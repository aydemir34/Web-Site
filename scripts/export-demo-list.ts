import { getBusinesses } from "../src/lib/data";

const siteBase = "https://demo-placeholder.example.com";
const businesses = getBusinesses();

console.log("Demo URLs:");
for (const business of businesses) {
  const base = `${siteBase}/demo/${business.slug}/`;
  console.log(`${base}`);
  console.log(`${base}hizmetler/`);
  console.log(`${base}randevu/`);
}
