export type ThemeDirection = "soft-beauty" | "clean-clinic";
export type OrnamentStyle = "blush-waves" | "minimal-lines" | "mint-halo" | "playful-shapes" | "bridal-silk";
export type Archetype =
  | "soft-beauty-editorial"
  | "clean-clinic-minimal"
  | "product-led-beauty"
  | "campaign-playful-premium";
export type PackageFit = "basic" | "booking" | "growth" | "premium";
export type BusinessTone =
  | "bridal-editorial"
  | "warm-beauty"
  | "clean-clinic"
  | "premium-aesthetic"
  | "playful-campaign"
  | "minimal-professional";

export type Theme = {
  id: string;
  name: string;
  direction: ThemeDirection;
  fontHeading: string;
  fontBody: string;
  palette: {
    bg: string;
    bgElevated: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    primaryContrast: string;
    accent: string;
    border: string;
    glow: string;
  };
  ornamentStyle?: OrnamentStyle;
};

export type ServiceItem = {
  name: string;
  description: string;
};

export type ReviewItem = {
  name: string;
  text: string;
  service: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductItem = {
  name: string;
  price: string;
  description: string;
};

export type ModuleId =
  | "hero"
  | "trustBadges"
  | "servicesGrid"
  | "serviceCarousel"
  | "processSteps"
  | "reviewsPreview"
  | "instagramPreviewGrid"
  | "productPreview"
  | "appointmentCta"
  | "contactMap"
  | "faq";

export type LeadSignals = {
  hasWebsite: boolean;
  rating: number;
  reviewCount: number;
  instagramActive: boolean;
  visualQuality: number;
  offerDepth: number;
  responseLikelihood: number;
};

export type Business = {
  slug: string;
  businessName: string;
  category: "beauty-salon" | "aesthetic-clinic" | "skincare-clinic";
  district: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagramUrl: string;
  mapUrl: string;
  mapEmbedUrl: string;
  mainService: string;
  themeId: string;
  archetype?: Archetype;
  tone: BusinessTone;
  packageFit?: PackageFit;
  hasProducts: boolean;
  visualProfile?: {
    assetSet?: string;
    heroMedia?: string;
    gridImages?: string[];
    videos?: string[];
    ornamentStyle?: OrnamentStyle;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  trustBadges: string[];
  trustFeatures?: Array<{
    heading: string;
    description: string;
  }>;
  whyUs?: Array<{
    heading: string;
    description: string;
  }>;
  services: ServiceItem[];
  processSteps: string[];
  reviews: ReviewItem[];
  faq: FaqItem[];
  products: ProductItem[];
  moduleOrder: {
    home: ModuleId[];
    services: ModuleId[];
    appointment: ModuleId[];
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  leadSignals: LeadSignals;
};
