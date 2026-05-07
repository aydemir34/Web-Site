import assetsConfig from "../data/assets.json";
import type { Business, ServiceItem } from "../types";
import { slugify } from "./slugify";

type AssetKind = "hero" | "grid" | "video";
type FallbackKind = "hero" | "service" | "grid" | "video" | "contact";
type ServiceGroup = "hair" | "makeup" | "nails" | "lashes" | "skincare" | "laser" | "clinic" | "default";

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

function pickServiceBucket(
  source: Record<string, string[]> | null | undefined,
  group: ServiceGroup
): string[] {
  if (!source) {
    return [];
  }
  return source[group] ?? source.default ?? [];
}

export function getBusinessLogo(business: Business): string | null {
  const base = businessMediaBase(business);
  return firstValid([`${base}logo.svg`, `${base}logo.png`, `${base}logo.webp`]);
}

export function getAssetSetFallback(assetSet: string | null | undefined, type: FallbackKind): string | null {
  if (!assetSet) {
    return null;
  }
  const setConfig = assetsConfig.assetSets[assetSet as keyof typeof assetsConfig.assetSets] as
    | Record<string, unknown>
    | undefined;
  if (!setConfig) {
    return null;
  }

  if (type === "service") {
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
  const businessExplicit = allValid((cfg?.heroMedia as string[] | undefined) ?? []);

  const businessPattern = buildPatternCandidates(
    base,
    [`hero-${group}-01`, "hero-hair-makeup-01", "hero-bridal-makeup-01", "hero-01"],
    EXTENSIONS
  );
  const shared = setConfig?.hero ?? [];
  const remote = configuredRemote(business, "hero");

  const assetSetFallback = getAssetSetFallback(assetSetId, "hero");

  return firstValid([explicit, ...businessExplicit, ...businessPattern, ...shared, ...remote, assetSetFallback]);
}

export function getServiceMedia(business: Business, service: ServiceItem | string): string | null {
  const serviceName = typeof service === "string" ? service : service.name;
  const group = serviceGroupFromName(serviceName);
  const base = businessMediaBase(business);
  const cfg = businessConfig(business);
  const assetSetId = getAssetSetId(business);
  const setConfig = getAssetSetConfig(business);

  const explicitBusinessMapped = pickServiceBucket(
    (cfg?.serviceMedia as Record<string, string[]> | undefined) ?? undefined,
    group
  );
  const businessPattern = buildPatternCandidates(
    base,
    [
      `service-${group}-01`,
      `service-${slugify(serviceName)}-01`,
      "service-hair-01",
      "service-makeup-01",
      "service-01"
    ],
    EXTENSIONS
  );
  const shared = pickServiceBucket((setConfig?.service as Record<string, string[]> | undefined) ?? undefined, group);
  const remoteService = pickServiceBucket(
    (cfg?.remote?.service as Record<string, string[]> | undefined) ?? undefined,
    group
  );
  const assetSetFallback = getAssetSetFallback(assetSetId, "service");

  return firstValid([...explicitBusinessMapped, ...businessPattern, ...shared, ...remoteService, assetSetFallback]);
}

export function getGridMedia(business: Business): string[] {
  const explicit = (business.visualProfile?.gridImages ?? []).map((item) => ensureAbsolute(item));
  const cfg = businessConfig(business);
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
  const merged = allValid([...explicit, ...businessExplicit, ...businessPattern, ...shared, ...remote, assetSetFallback]);
  return merged.length > 0 ? merged : [];
}

export function getVideoMedia(business: Business): string[] {
  const explicit = (business.visualProfile?.videos ?? []).map((item) => ensureAbsolute(item));
  const base = businessMediaBase(business);
  const pattern = buildPatternCandidates(base, ["video-01", "reel-01", "video-makeup-process-01"], VIDEO_EXTENSIONS);
  const setConfig = getAssetSetConfig(business);
  const shared = setConfig?.video ?? [];
  const remote = configuredRemote(business, "video");
  const assetSetFallback = getAssetSetFallback(getAssetSetId(business), "video");
  return allValid([...explicit, ...pattern, ...shared, ...remote, assetSetFallback]);
}

export function getContactMedia(business: Business): string | null {
  const base = businessMediaBase(business);
  const cfg = businessConfig(business);
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

  return firstValid([...businessExplicit, ...explicitCandidates, ...shared, ...remote, assetSetFallback]);
}
