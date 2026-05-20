import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Archetype, Business, BusinessTone, OrnamentStyle, PackageFit, ServiceItem } from "../src/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const businessesPath = path.join(repoRoot, "src/data/businesses.json");

const TEMPLATE_COLUMNS = [
  "businessName",
  "slug",
  "category",
  "district",
  "neighborhood",
  "mainService",
  "phone",
  "whatsapp",
  "instagramUrl",
  "mapUrl",
  "mapEmbedUrl",
  "address",
  "googleReviewUrl",
  "rating",
  "reviewCount",
  "hasWebsite",
  "instagramActive",
  "visualQuality",
  "offerDepth",
  "responseLikelihood",
  "themeId",
  "archetype",
  "tone",
  "packageFit",
  "hasProducts",
  "assetSet",
  "heroMedia",
  "gridImages",
  "videos",
  "ornamentStyle",
  "heroEyebrow",
  "heroTitle",
  "heroDescription",
  "primaryCta",
  "secondaryCta",
  "ctaTitle",
  "ctaDescription",
  "ctaButtonText",
  "seoTitle",
  "seoDescription",
  "ogImage",
  "trustBadges",
  "processSteps",
  "service1Name",
  "service1Description",
  "service1DetailBody",
  "service1DetailPoints",
  "service1BestFor",
  "service1MediaTags",
  "service1WhatsappMessage",
  "service2Name",
  "service2Description",
  "service2DetailBody",
  "service2DetailPoints",
  "service2BestFor",
  "service2MediaTags",
  "service2WhatsappMessage",
  "service3Name",
  "service3Description",
  "service3DetailBody",
  "service3DetailPoints",
  "service3BestFor",
  "service3MediaTags",
  "service3WhatsappMessage",
  "service4Name",
  "service4Description",
  "service4DetailBody",
  "service4DetailPoints",
  "service4BestFor",
  "service4MediaTags",
  "service4WhatsappMessage",
  "service5Name",
  "service5Description",
  "service5DetailBody",
  "service5DetailPoints",
  "service5BestFor",
  "service5MediaTags",
  "service5WhatsappMessage",
  "notes"
];

type CsvRow = Record<string, string>;

const validCategories = ["beauty-salon", "aesthetic-clinic", "skincare-clinic"] as const;
const validArchetypes: Archetype[] = [
  "soft-beauty-editorial",
  "clean-clinic-minimal",
  "product-led-beauty",
  "campaign-playful-premium"
];
const validTones: BusinessTone[] = [
  "bridal-editorial",
  "warm-beauty",
  "clean-clinic",
  "premium-aesthetic",
  "playful-campaign",
  "minimal-professional"
];
const validPackageFits: PackageFit[] = ["basic", "booking", "growth", "premium"];

function normalizeKey(value: string): string {
  return value.trim().replace(/^\uFEFF/, "");
}

function detectDelimiter(headerLine: string): "," | ";" {
  const commaCount = (headerLine.match(/,/g) ?? []).length;
  const semicolonCount = (headerLine.match(/;/g) ?? []).length;
  return semicolonCount > commaCount ? ";" : ",";
}

function parseCsvLine(line: string, delimiter: "," | ";"): string[] {
  const cells: string[] = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === "\"" && quoted && next === "\"") {
      cell += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      cells.push(cell);
      cell = "";
    } else {
      cell += char;
    }
  }

  cells.push(cell);
  return cells.map((item) => item.trim());
}

function parseCsv(content: string): CsvRow[] {
  const normalized = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n").filter((line) => line.trim().length > 0);
  if (lines.length < 2) {
    return [];
  }

  const delimiter = detectDelimiter(lines[0]);
  const headers = parseCsvLine(lines[0], delimiter).map(normalizeKey);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line, delimiter);
    return headers.reduce<CsvRow>((row, header, index) => {
      row[header] = values[index] ?? "";
      return row;
    }, {});
  });
}

function slugify(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitList(value: string): string[] {
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseBoolean(value: string, fallback = false): boolean {
  const normalized = value.trim().toLocaleLowerCase("tr-TR");
  if (["1", "true", "evet", "var", "yes"].includes(normalized)) {
    return true;
  }
  if (["0", "false", "hayır", "hayir", "yok", "no"].includes(normalized)) {
    return false;
  }
  return fallback;
}

function parseNumber(value: string, fallback = 0): number {
  const normalized = value.replace(",", ".").trim();
  const numeric = Number(normalized);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizePhoneForWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("90")) {
    return digits;
  }
  if (digits.startsWith("0")) {
    return `9${digits}`;
  }
  if (digits.length === 10) {
    return `90${digits}`;
  }
  return digits;
}

function pickCategory(value: string): Business["category"] {
  return validCategories.includes(value as Business["category"]) ? (value as Business["category"]) : "beauty-salon";
}

function defaultArchetype(category: Business["category"], mainService: string): Archetype {
  const lower = mainService.toLocaleLowerCase("tr-TR");
  if (category === "aesthetic-clinic" || category === "skincare-clinic") {
    return "clean-clinic-minimal";
  }
  if (lower.includes("ürün") || lower.includes("product")) {
    return "product-led-beauty";
  }
  return "soft-beauty-editorial";
}

function pickArchetype(value: string, category: Business["category"], mainService: string): Archetype {
  return validArchetypes.includes(value as Archetype) ? (value as Archetype) : defaultArchetype(category, mainService);
}

function defaultTone(category: Business["category"], mainService: string): BusinessTone {
  const lower = mainService.toLocaleLowerCase("tr-TR");
  if (category === "aesthetic-clinic") {
    return "premium-aesthetic";
  }
  if (category === "skincare-clinic") {
    return "clean-clinic";
  }
  if (lower.includes("gelin") || lower.includes("makyaj")) {
    return "bridal-editorial";
  }
  return "warm-beauty";
}

function pickTone(value: string, category: Business["category"], mainService: string): BusinessTone {
  return validTones.includes(value as BusinessTone) ? (value as BusinessTone) : defaultTone(category, mainService);
}

function defaultTheme(category: Business["category"], tone: BusinessTone): string {
  if (tone === "bridal-editorial") {
    return "bridal-editorial-luxe";
  }
  if (category === "aesthetic-clinic" || category === "skincare-clinic") {
    return "clean-clinic-minimal";
  }
  return "soft-beauty-editorial";
}

function pickPackageFit(value: string): PackageFit {
  return validPackageFits.includes(value as PackageFit) ? (value as PackageFit) : "basic";
}

function buildServices(row: CsvRow, mainService: string): ServiceItem[] {
  const services: ServiceItem[] = [];

  for (let index = 1; index <= 5; index += 1) {
    const name = row[`service${index}Name`]?.trim();
    const description = row[`service${index}Description`]?.trim();
    if (!name && !description) {
      continue;
    }

    const service: ServiceItem = {
      name: name || mainService,
      description: description || `${name || mainService} için randevu ve hizmet bilgisi WhatsApp üzerinden paylaşılır.`
    };

    const detailBody = row[`service${index}DetailBody`]?.trim();
    const detailPoints = splitList(row[`service${index}DetailPoints`] ?? "");
    const bestFor = row[`service${index}BestFor`]?.trim();
    const mediaTags = splitList(row[`service${index}MediaTags`] ?? "");
    const whatsappMessage = row[`service${index}WhatsappMessage`]?.trim();

    if (detailBody) {
      service.detailBody = detailBody;
    }
    if (detailPoints.length) {
      service.detailPoints = detailPoints;
    }
    if (bestFor) {
      service.bestFor = bestFor;
    }
    if (mediaTags.length) {
      service.mediaTags = mediaTags;
    }
    if (whatsappMessage) {
      service.whatsappMessage = whatsappMessage.replace(/\\n/g, "\n");
    }

    services.push(service);
  }

  if (services.length) {
    return services;
  }

  return [
    {
      name: mainService,
      description: `${mainService} için randevu ve hizmet bilgisi WhatsApp üzerinden paylaşılır.`,
      whatsappMessage: `Merhaba, web sitenizden geliyorum.\n${mainService} için tarih/saat bilgisi almak istiyorum.\nTarihim: ...\nNotum: ...`
    }
  ];
}

function buildBusiness(row: CsvRow, index: number): Business {
  const businessName = row.businessName?.trim();
  if (!businessName) {
    throw new Error(`Satır ${index + 2}: businessName zorunlu.`);
  }

  const category = pickCategory(row.category ?? "");
  const district = row.district?.trim() || "İstanbul";
  const neighborhood = row.neighborhood?.trim() || district;
  const mainService = row.mainService?.trim() || "Randevu Hizmeti";
  const slug = row.slug?.trim() || slugify(`${businessName}-${district}`);
  const tone = pickTone(row.tone ?? "", category, mainService);
  const archetype = pickArchetype(row.archetype ?? "", category, mainService);
  const themeId = row.themeId?.trim() || defaultTheme(category, tone);
  const phone = row.phone?.trim() || "";
  const whatsapp = row.whatsapp?.trim() || normalizePhoneForWhatsapp(phone);
  const instagramUrl = row.instagramUrl?.trim() || "";
  const mapUrl = row.mapUrl?.trim() || "";
  const heroTitle = row.heroTitle?.trim() || `${mainService} için randevunuzu kolayca planlayın.`;
  const heroDescription =
    row.heroDescription?.trim() ||
    `${district} ${neighborhood} çevresinde ${mainService.toLocaleLowerCase("tr-TR")} hizmetleri için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.`;

  const gridImages = splitList(row.gridImages ?? "");
  const videos = splitList(row.videos ?? "");
  const trustBadges = splitList(row.trustBadges ?? "");
  const processSteps = splitList(row.processSteps ?? "");
  const rating = parseNumber(row.rating ?? "", 0);
  const reviewCount = parseNumber(row.reviewCount ?? "", 0);

  return {
    slug,
    businessName,
    category,
    district,
    neighborhood,
    address: row.address?.trim() || `${neighborhood}, ${district}/İstanbul`,
    phone,
    whatsapp,
    instagramUrl,
    mapUrl,
    googleReviewUrl: row.googleReviewUrl?.trim() || undefined,
    mapEmbedUrl: row.mapEmbedUrl?.trim() || "",
    mainService,
    themeId,
    archetype,
    tone,
    packageFit: pickPackageFit(row.packageFit ?? ""),
    hasProducts: parseBoolean(row.hasProducts ?? "", false),
    visualProfile: {
      assetSet: row.assetSet?.trim() || undefined,
      heroMedia: row.heroMedia?.trim() || undefined,
      gridImages: gridImages.length ? gridImages : undefined,
      videos: videos.length ? videos : undefined,
      ornamentStyle: row.ornamentStyle?.trim() ? (row.ornamentStyle.trim() as OrnamentStyle) : undefined
    },
    hero: {
      eyebrow: row.heroEyebrow?.trim() || mainService,
      title: heroTitle,
      description: heroDescription,
      primaryCta: row.primaryCta?.trim() || "WhatsApp’tan Randevu Bilgisi Al",
      secondaryCta: row.secondaryCta?.trim() || "Hizmetleri İncele"
    },
    cta: {
      title: row.ctaTitle?.trim() || "Randevu bilgisi almak ister misiniz?",
      description: row.ctaDescription?.trim() || "Tarih, hizmet ve aklınızdaki hazırlık detaylarını yazın; uygun akışı birlikte netleştirelim.",
      buttonText: row.ctaButtonText?.trim() || "WhatsApp’tan Bilgi Al"
    },
    trustBadges: trustBadges.length ? trustBadges : ["WhatsApp ile hızlı bilgi", "Randevu planı", `${district} ve çevresi`],
    services: buildServices(row, mainService),
    processSteps: processSteps.length ? processSteps : ["İlk görüşme", "Hizmet seçimi", "Randevu planı", "Uygulama günü"],
    reviews: [],
    faq: [
      {
        question: "Randevu bilgisi nasıl alınır?",
        answer: "WhatsApp üzerinden tarih, hizmet ve hazırlık detaylarınızı ileterek randevu bilgisi alabilirsiniz."
      }
    ],
    products: [],
    moduleOrder: {
      home: ["hero", "trustBadges", "servicesGrid", "processSteps", "instagramPreviewGrid", "appointmentCta"],
      services: ["servicesGrid", "processSteps", "appointmentCta", "faq"],
      appointment: ["contactMap", "appointmentCta", "faq"]
    },
    seo: {
      title: row.seoTitle?.trim() || `${businessName} | ${district} ${mainService}`,
      description: row.seoDescription?.trim() || `${district} ${neighborhood} çevresinde ${mainService} için randevu ve iletişim bilgileri.`,
      ogImage: row.ogImage?.trim() || row.heroMedia?.trim() || "/assets/og/default-og.jpg"
    },
    leadSignals: {
      hasWebsite: parseBoolean(row.hasWebsite ?? "", false),
      rating,
      reviewCount,
      instagramActive: parseBoolean(row.instagramActive ?? "", Boolean(instagramUrl)),
      visualQuality: clamp(parseNumber(row.visualQuality ?? "", 5), 0, 10),
      offerDepth: clamp(parseNumber(row.offerDepth ?? "", 5), 0, 10),
      responseLikelihood: clamp(parseNumber(row.responseLikelihood ?? "", 5), 0, 10)
    }
  };
}

function printUsage(): void {
  console.log(`Usage:
  npm run import-businesses-csv -- path/to/businesses.csv
  npm run import-businesses-csv -- path/to/businesses.csv --write
  npm run import-businesses-csv -- --template

Default mode is dry-run. Use --write to merge rows into src/data/businesses.json.
List fields use pipe separators, for example: hizmet 1|hizmet 2|hizmet 3`);
}

function mergeBusinesses(existing: Business[], imported: Business[]): Business[] {
  const bySlug = new Map(imported.map((business) => [business.slug, business]));
  const merged = existing.map((business) => bySlug.get(business.slug) ?? business);
  const existingSlugs = new Set(existing.map((business) => business.slug));
  const additions = imported.filter((business) => !existingSlugs.has(business.slug));
  return [...merged, ...additions];
}

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  printUsage();
  process.exit(0);
}

if (args.includes("--template")) {
  console.log(TEMPLATE_COLUMNS.join(","));
  process.exit(0);
}

const csvPath = args.find((arg) => !arg.startsWith("-"));
const shouldWrite = args.includes("--write");

if (!csvPath) {
  printUsage();
  process.exit(1);
}

const absoluteCsvPath = path.resolve(process.cwd(), csvPath);
const content = fs.readFileSync(absoluteCsvPath, "utf8");
const rows = parseCsv(content);
const imported = rows.map((row, index) => buildBusiness(row, index));
const existing = JSON.parse(fs.readFileSync(businessesPath, "utf8")) as Business[];
const merged = mergeBusinesses(existing, imported);

const replaced = imported.filter((business) => existing.some((item) => item.slug === business.slug)).length;
const added = imported.length - replaced;

console.log(`CSV satırları: ${rows.length}`);
console.log(`İçe aktarılacak işletme: ${imported.length}`);
console.log(`Yeni: ${added}`);
console.log(`Güncellenecek: ${replaced}`);
console.log(`Mod: ${shouldWrite ? "write" : "dry-run"}`);

if (imported.length) {
  console.log("\nSlug listesi:");
  for (const business of imported) {
    console.log(`- ${business.slug} | ${business.businessName} | ${business.district}`);
  }
}

if (shouldWrite) {
  fs.writeFileSync(businessesPath, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`\nYazıldı: ${path.relative(repoRoot, businessesPath)}`);
} else {
  console.log("\nDry-run tamamlandı. Yazmak için komutu --write ile tekrar çalıştırın.");
}
