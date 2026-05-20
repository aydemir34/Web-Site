import type { Business, ServiceItem } from "../types";
import { slugify } from "./slugify";

export function normalizePhoneForWhatsapp(phone: string): string {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.startsWith("00")) {
    return digits.slice(2);
  }
  return digits;
}

function normalizeServiceLabel(service: ServiceItem | string): string {
  const raw = typeof service === "string" ? service : service.name;
  if (!raw) {
    return "hizmet";
  }
  const lowered = raw.toLocaleLowerCase("tr-TR");
  const fromSlug = slugify(raw).replace(/-/g, " ");
  return lowered.length > 0 ? lowered : fromSlug;
}

export function buildWhatsAppMessage(business: Business, service?: ServiceItem | string): string {
  if (service) {
    if (typeof service !== "string" && service.whatsappMessage) {
      return service.whatsappMessage;
    }

    const serviceLabel = normalizeServiceLabel(service);
    return `Merhaba, ${serviceLabel} hizmeti için randevu ve fiyat bilgisi almak istiyorum.`;
  }

  const normalizedMain = business.mainService.toLocaleLowerCase("tr-TR");
  const isHairMakeup =
    business.slug === "simay-sarikaya-hair-makeup" ||
    normalizedMain.includes("makyaj") ||
    normalizedMain.includes("hair") ||
    normalizedMain.includes("saç");

  if (isHairMakeup && business.mainService) {
    return "Merhaba, gelin saçı ve makyajı için randevu bilgisi almak istiyorum.";
  }

  return "Merhaba, hizmetleriniz ve randevu bilgisi hakkında bilgi almak istiyorum.";
}

export function buildWhatsAppUrl(business: Business, service?: ServiceItem | string): string {
  const phone = normalizePhoneForWhatsapp(business.whatsapp || business.phone);
  const message = buildWhatsAppMessage(business, service);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
