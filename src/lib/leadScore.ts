import type { LeadSignals } from "../types";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getLeadScore(signals: LeadSignals): number {
  const websiteGapScore = signals.hasWebsite ? 8 : 25;
  const reviewScore = clamp((signals.reviewCount / 120) * 20, 0, 20);
  const ratingScore = clamp((signals.rating / 5) * 15, 0, 15);
  const instagramScore = signals.instagramActive ? 10 : 3;
  const visualScore = clamp((signals.visualQuality / 10) * 10, 0, 10);
  const offerDepthScore = clamp((signals.offerDepth / 10) * 10, 0, 10);
  const responseScore = clamp((signals.responseLikelihood / 10) * 10, 0, 10);

  const total =
    websiteGapScore +
    reviewScore +
    ratingScore +
    instagramScore +
    visualScore +
    offerDepthScore +
    responseScore;

  return Math.round(clamp(total, 0, 100));
}
