import assetsConfig from "../data/assets.json";
import type { Business, ServiceItem } from "../types";
import { slugify } from "./slugify";

type AssetKind = "hero" | "grid" | "video";
type FallbackKind = "hero" | "service" | "featured" | "grid" | "video" | "contact" | "background";
type ServiceGroup = "hair" | "makeup" | "nails" | "lashes" | "skincare" | "laser" | "clinic" | "default";
type AssetRole = "logo" | "hero" | "featured" | "service" | "grid" | "video" | "contact" | "background";
type AssetType = "image" | "video" | "logo";

type AssetEntry = {
  src: string;
  type: AssetType;
  category: string;
  role: AssetRole;
  tags: string[];
  assetSet?: string | string[];
  serviceSlug?: string;
  alt?: string;
  source?: string;
  isRemote?: boolean;
};

const EXTENSIONS = ["jpg", "jpeg", "webp", "png"] as const;
const VIDEO_EXTENSIONS = ["mp4", "webm"] as const;

const serviceKeywordMap: Array<{ group: ServiceGroup; keywords: string[] }> = [
  { group: "hair", keywords: ["sac", "saç", "hair", "fön", "topuz"] },
  { group: "makeup", keywords: ["makyaj", "makeup"] },
  { group: "nails", keywords: ["tirnak", "tırnak", "nails", "manikur", "manikür"] },
  { group: "lashes", keywords: ["kirpik", "kas", "kaş", "lash", "brow"] },
  { group: "skincare", keywords: ["cilt", "skin", "bakim", "bakım"] },
  { group: "laser", keywords: ["lazer", "laser", "epilasyon"] },
  { group: "clinic", keywords: ["klinik", "clinic", "medikal", "estetik"] }
];

function ensureAbsolute(path: string | null | undefined): string | null {
  if (!path) {
    return null;
  }
  return path.startsWith("/") ? path : `/${path}`;
}

function firstValid(candidates: Array<string | null | undefined>): string | null {
  for (const candidate of candidates) {
    const normalized = ensureAbsolute(candidate);
    if (normalized) {
      return normalized;
    }
  }
  return null;
}

function allValid(candidates: Array<string | null | undefined>): string[] {
  const result: string[] = [];
  for (const candidate of candidates) {
    const normalized = ensureAbsolute(candidate);
    if (normalized && !result.includes(normalized)) {
      result.push(normalized);
    }
  }
  return result;
}

function getAssetSetId(business: Business): string | null {
  if (business.visualProfile?.assetSet) {
    return business.visualProfile.assetSet;
  }
  return assetsConfig.themeToAssetSet[business.themeId as keyof typeof assetsConfig.themeToAssetSet] ?? null;
}

function getAssetSetConfig(business: Business) {
  const setId = getAssetSetId(business);
  if (!setId) {
    return null;
  }
  return assetsConfig.assetSets[setId as keyof typeof assetsConfig.assetSets] ?? null;
}

function businessConfig(business: Business) {
  return assetsConfig.businesses[business.slug as keyof typeof assetsConfig.businesses] ?? null;
}

function serviceGroupFromName(serviceName: string): ServiceGroup {
  const normalized = slugify(serviceName);
  for (const entry of serviceKeywordMap) {
    if (entry.keywords.some((keyword) => normalized.includes(slugify(keyword)))) {
      return entry.group;
    }
  }
  return "default";
}

function businessMediaBase(business: Business): string {
  return `/assets/businesses/${business.slug}/`;
}

function buildPatternCandidates(base: string, stems: string[], exts: readonly string[]): string[] {
  const list: string[] = [];
  for (const stem of stems) {
    for (const ext of exts) {
      list.push(`${base}${stem}.${ext}`);
    }
  }
  return list;
}

function configuredRemote(business: Business, kind: AssetKind | "contact"): string[] {
  const cfg = businessConfig(business);
  if (!cfg?.remote) {
    return [];
  }
  const candidate = (cfg.remote as Record<string, unknown>)[kind];
  if (!Array.isArray(candidate)) {
    return [];
  }
  return candidate.map((item) => ensureAbsolute(typeof item === "string" ? item : null)).filter((item): item is string => Boolean(item));
}

function pickServiceBucket(source: Record<string, string[]> | null | undefined, group: ServiceGroup): string[] {
  if (!source) {
    return [];
  }
  return source[group] ?? source.default ?? [];
}

function sanitizeEntry(input: unknown): AssetEntry | null {
  const raw = input as Partial<AssetEntry> | null;
  if (!raw || typeof raw.src !== "string" || typeof raw.role !== "string" || typeof raw.type !== "string") {
    return null;
  }
  const src = ensureAbsolute(raw.src);
  if (!src) {
    return null;
  }
  return {
    src,
    type: raw.type as AssetType,
    category: typeof raw.category === "string" ? raw.category : "misc",
    role: raw.role as AssetRole,
    tags: Array.isArray(raw.tags) ? raw.tags.filter((tag): tag is string => typeof tag === "string") : [],
    assetSet:
      typeof raw.assetSet === "string" || (Array.isArray(raw.assetSet) && raw.assetSet.every((item) => typeof item === "string"))
        ? raw.assetSet
        : undefined,
    serviceSlug: typeof raw.serviceSlug === "string" ? raw.serviceSlug : undefined,
    alt: typeof raw.alt === "string" ? raw.alt : undefined,
    source: typeof raw.source === "string" ? raw.source : undefined,
    isRemote: typeof raw.isRemote === "boolean" ? raw.isRemote : undefined
  };
}

function getStructuredAssets(business: Business): { businessAssets: AssetEntry[]; sharedAssets: AssetEntry[] } {
  const cfg = businessConfig(business) as Record<string, unknown> | null;
  const businessAssetsRaw = (cfg?.assets as unknown[]) ?? [];
  const sharedAssetsRaw = (assetsConfig.assets as unknown[]) ?? [];
  const assetSetId = getAssetSetId(business);
  const matchesAssetSet = (entry: AssetEntry): boolean => {
    if (!entry.assetSet || !assetSetId) {
      return true;
    }
    return Array.isArray(entry.assetSet) ? entry.assetSet.includes(assetSetId) : entry.assetSet === assetSetId;
  };

  return {
    businessAssets: businessAssetsRaw.map(sanitizeEntry).filter((item): item is AssetEntry => Boolean(item)),
    sharedAssets: sharedAssetsRaw
      .map(sanitizeEntry)
      .filter((item): item is AssetEntry => Boolean(item))
      .filter(matchesAssetSet)
  };
}

function getServiceTokens(serviceName: string): string[] {
  return slugify(serviceName)
    .split("-")
    .map((part) => part.trim())
    .filter(Boolean);
}

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickRoleAsset(
  entries: AssetEntry[],
  options: { role: AssetRole; serviceSlug?: string; serviceTokens?: string[]; category?: string }
): string | null {
  const byRole = entries.filter((entry) => entry.role === options.role || (options.role === "featured" && entry.role === "service"));
  if (byRole.length === 0) {
    return null;
  }

  const serviceSlug = options.serviceSlug;
  const serviceTokens = options.serviceTokens ?? [];
  const category = options.category;

  const byServiceSlug = serviceSlug ? byRole.filter((entry) => entry.serviceSlug === serviceSlug) : [];
  if (byServiceSlug.length > 0) {
    return byServiceSlug[0]?.src ?? null;
  }

  const byTag = byRole.filter((entry) =>
    serviceTokens.length > 0 && entry.tags.some((tag) => serviceTokens.some((token) => slugify(tag).includes(token)))
  );
  if (byTag.length > 0) {
    const i = hashString(serviceSlug ?? byTag[0]!.src) % byTag.length;
    return byTag[i]?.src ?? null;
  }

  const byCategory = category ? byRole.filter((entry) => entry.category === category) : [];
  if (byCategory.length > 0) {
    const i = hashString((serviceSlug ?? category) + options.role) % byCategory.length;
    return byCategory[i]?.src ?? null;
  }

  if (byRole.length === 1) {
    return byRole[0]!.src;
  }

  const i = hashString((serviceSlug ?? options.role) + (category ?? "")) % byRole.length;
  return byRole[i]?.src ?? null;
}

export function getBusinessLogo(business: Business): string | null {
  const { businessAssets, sharedAssets } = getStructuredAssets(business);
  const byRole = pickRoleAsset(businessAssets, { role: "logo" }) ?? pickRoleAsset(sharedAssets, { role: "logo" });
  if (byRole) {
    return byRole;
  }
  const base = businessMediaBase(business);
  return firstValid([`${base}logo.svg`, `${base}logo.png`, `${base}logo.webp`]);
}

export function getAssetSetFallback(assetSet: string | null | undefined, type: FallbackKind): string | null {
  if (!assetSet) {
    return null;
  }
  const setConfig = assetsConfig.assetSets[assetSet as keyof typeof assetsConfig.assetSets] as Record<string, unknown> | undefined;
  if (!setConfig) {
    return null;
  }

  if (type === "service" || type === "featured") {
    const serviceBuckets = (setConfig.service as Record<string, string[]> | undefined) ?? undefined;
    return firstValid(serviceBuckets?.default ?? []);
  }

  return firstValid(((setConfig[type] as string[] | undefined) ?? []).map((item) => ensureAbsolute(item)));
}

export function getHeroMedia(business: Business): string | null {
  const explicit = ensureAbsolute(business.visualProfile?.heroMedia);
  const cfg = businessConfig(business);
  const assetSetId = getAssetSetId(business);
  const setConfig = getAssetSetConfig(business);
  const group = serviceGroupFromName(business.mainService);
  const base = businessMediaBase(business);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);

  const structuredBusiness = pickRoleAsset(businessAssets, { role: "hero", category: group });
  const structuredShared = pickRoleAsset(sharedAssets, { role: "hero", category: group });
  const businessExplicit = allValid((cfg?.heroMedia as string[] | undefined) ?? []);
  const businessPattern = buildPatternCandidates(base, [`hero-${group}-01`, "hero-hair-makeup-01", "hero-bridal-makeup-01", "hero-01"], EXTENSIONS);
  const shared = setConfig?.hero ?? [];
  const remote = configuredRemote(business, "hero");
  const assetSetFallback = getAssetSetFallback(assetSetId, "hero");

  return firstValid([explicit, structuredBusiness, ...businessExplicit, ...businessPattern, structuredShared, ...shared, ...remote, assetSetFallback]);
}

export function getFeaturedServiceMedia(business: Business, service: ServiceItem | string): string | null {
  const serviceName = typeof service === "string" ? service : service.name;
  const serviceSlug = slugify(serviceName);
  const serviceTokens = getServiceTokens(serviceName);
  const group = serviceGroupFromName(serviceName);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);
  const structuredBusiness = pickRoleAsset(businessAssets, { role: "featured", serviceSlug, serviceTokens, category: group });
  const structuredShared = pickRoleAsset(sharedAssets, { role: "featured", serviceSlug, serviceTokens, category: group });
  return firstValid([structuredBusiness, structuredShared, getServiceMedia(business, service)]);
}

export function getServiceMedia(business: Business, service: ServiceItem | string): string | null {
  const serviceName = typeof service === "string" ? service : service.name;
  const serviceSlug = slugify(serviceName);
  const serviceTokens = getServiceTokens(serviceName);
  const group = serviceGroupFromName(serviceName);
  const base = businessMediaBase(business);
  const cfg = businessConfig(business);
  const assetSetId = getAssetSetId(business);
  const setConfig = getAssetSetConfig(business);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);

  const structuredBusiness = pickRoleAsset(businessAssets, { role: "service", serviceSlug, serviceTokens, category: group });
  const structuredShared = pickRoleAsset(sharedAssets, { role: "service", serviceSlug, serviceTokens, category: group });
  const explicitBusinessMapped = pickServiceBucket((cfg?.serviceMedia as Record<string, string[]> | undefined) ?? undefined, group);
  const businessPattern = buildPatternCandidates(
    base,
    [`service-${group}-01`, `service-${serviceSlug}-01`, "service-hair-01", "service-makeup-01", "service-01"],
    EXTENSIONS
  );
  const shared = pickServiceBucket((setConfig?.service as Record<string, string[]> | undefined) ?? undefined, group);
  const remoteService = pickServiceBucket((cfg?.remote?.service as Record<string, string[]> | undefined) ?? undefined, group);
  const assetSetFallback = getAssetSetFallback(assetSetId, "service");

  return firstValid([structuredBusiness, ...explicitBusinessMapped, ...businessPattern, structuredShared, ...shared, ...remoteService, assetSetFallback]);
}

export function getServiceMediaGallery(business: Business, service: ServiceItem | string, maxItems = 3): string[] {
  const primary = getServiceMedia(business, service);
  const serviceName = typeof service === "string" ? service : service.name;
  const serviceSlug = slugify(serviceName);
  const serviceTokens = getServiceTokens(serviceName);
  const group = serviceGroupFromName(serviceName);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);

  const roleMatches = [
    ...businessAssets.filter(
      (entry) =>
        (entry.role === "service" || entry.role === "featured") &&
        (entry.serviceSlug === serviceSlug ||
          entry.tags.some((tag) => serviceTokens.some((token) => slugify(tag).includes(token))) ||
          entry.category === group)
    ),
    ...sharedAssets.filter(
      (entry) =>
        (entry.role === "service" || entry.role === "featured") &&
        (entry.serviceSlug === serviceSlug ||
          entry.tags.some((tag) => serviceTokens.some((token) => slugify(tag).includes(token))) ||
          entry.category === group)
    )
  ].map((entry) => entry.src);

  const fallbackGallery = getGridMedia(business).slice(0, 2);
  const merged = allValid([primary, ...roleMatches, ...fallbackGallery]);
  return merged.slice(0, maxItems);
}

export function getGridMedia(business: Business): string[] {
  const explicit = (business.visualProfile?.gridImages ?? []).map((item) => ensureAbsolute(item));
  const cfg = businessConfig(business);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);
  const structuredBusiness = businessAssets.filter((entry) => entry.role === "grid").map((entry) => entry.src);
  const structuredShared = sharedAssets.filter((entry) => entry.role === "grid").map((entry) => entry.src);
  const businessExplicit = allValid((cfg?.gridMedia as string[] | undefined) ?? []);
  const base = businessMediaBase(business);
  const businessPattern = [
    ...buildPatternCandidates(base, ["grid-01", "grid-02", "grid-03", "grid-04", "grid-05", "grid-06"], EXTENSIONS),
    ...buildPatternCandidates(base, ["grid-hair-makeup-01", "grid-hair-makeup-02", "grid-hair-makeup-03"], EXTENSIONS)
  ];
  const setConfig = getAssetSetConfig(business);
  const shared = setConfig?.grid ?? [];
  const remote = configuredRemote(business, "grid");
  const assetSetFallback = getAssetSetFallback(getAssetSetId(business), "grid");
  return allValid([...explicit, ...structuredBusiness, ...businessExplicit, ...businessPattern, ...structuredShared, ...shared, ...remote, assetSetFallback]);
}

export function getVideoMedia(business: Business): string[] {
  const explicit = (business.visualProfile?.videos ?? []).map((item) => ensureAbsolute(item));
  const { businessAssets, sharedAssets } = getStructuredAssets(business);
  const structuredBusiness = businessAssets.filter((entry) => entry.role === "video").map((entry) => entry.src);
  const structuredShared = sharedAssets.filter((entry) => entry.role === "video").map((entry) => entry.src);
  const base = businessMediaBase(business);
  const pattern = buildPatternCandidates(base, ["video-01", "reel-01", "video-makeup-process-01"], VIDEO_EXTENSIONS);
  const setConfig = getAssetSetConfig(business);
  const shared = setConfig?.video ?? [];
  const remote = configuredRemote(business, "video");
  const assetSetFallback = getAssetSetFallback(getAssetSetId(business), "video");
  return allValid([...explicit, ...structuredBusiness, ...pattern, ...structuredShared, ...shared, ...remote, assetSetFallback]);
}

export function getContactMedia(business: Business): string | null {
  const base = businessMediaBase(business);
  const cfg = businessConfig(business);
  const { businessAssets, sharedAssets } = getStructuredAssets(business);
  const structuredBusiness = pickRoleAsset(businessAssets, { role: "contact", category: "contact-location" });
  const structuredShared = pickRoleAsset(sharedAssets, { role: "contact", category: "contact-location" });
  const businessExplicit = allValid((cfg?.contactMedia as string[] | undefined) ?? []);
  const explicitCandidates = allValid([
    `${base}contact-location-01.jpg`,
    `${base}contact-location-01.webp`,
    `${base}contact-location-01.png`,
    `${base}interior-01.jpg`,
    `${base}interior-01.webp`,
    `${base}interior-01.png`
  ]);

  const setConfig = getAssetSetConfig(business);
  const shared = ((setConfig as Record<string, unknown> | null)?.contact as string[] | undefined) ?? [];
  const remote = configuredRemote(business, "contact");
  const assetSetFallback = getAssetSetFallback(getAssetSetId(business), "contact");

  return firstValid([structuredBusiness, ...businessExplicit, ...explicitCandidates, structuredShared, ...shared, ...remote, assetSetFallback]);
}
