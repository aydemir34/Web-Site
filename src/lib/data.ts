import businessesJson from "../data/businesses.json";
import themesJson from "../data/themes.json";
import type { Business, Theme } from "../types";

const businesses = businessesJson as Business[];
const themes = themesJson as Theme[];

export function getBusinesses(): Business[] {
  return businesses;
}

export function getThemes(): Theme[] {
  return themes;
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((item) => item.slug === slug);
}

export function getThemeById(id: string): Theme | undefined {
  return themes.find((item) => item.id === id);
}

export function getThemeByVariant(baseThemeId: string, variant: string | null): Theme | undefined {
  if (!variant || variant === "default") {
    return getThemeById(baseThemeId);
  }

  const variantMap: Record<string, string> = {
    minimal: "clean-clinic-minimal",
    editorial: "soft-beauty-editorial",
    campaign: "campaign-playful-premium"
  };

  const mapped = variantMap[variant];
  if (mapped) {
    return getThemeById(mapped);
  }
  return getThemeById(baseThemeId);
}
