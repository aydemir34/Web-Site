import { getBusinesses } from "../src/lib/data";
import { getLeadScore } from "../src/lib/leadScore";

const businesses = getBusinesses();
const ranked = businesses
  .map((business) => ({
    slug: business.slug,
    name: business.businessName,
    district: business.district,
    score: getLeadScore(business.leadSignals)
  }))
  .sort((a, b) => b.score - a.score);

console.log("Lead ranking (high to low):");
for (const lead of ranked) {
  console.log(`${lead.score.toString().padStart(3, " ")} | ${lead.slug} | ${lead.name} | ${lead.district}`);
}
