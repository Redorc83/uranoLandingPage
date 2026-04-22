import { Stack } from "@mui/material";

import { MobileHero } from "@/domains/shell";
import { MobileTokenizationServiceCarousel, tokenizationCarouselItems } from "@/domains/tokenization";
import { MobileExploreEcosystemSection, mobileEcosystemItems } from "@/domains/ecosystem";
import { MobilePoweredByUranoSection, MobilePurchaseUranoSection, MobileTechIntegrationsSection, MobileFaqSection, mobilePoweredItems, mobileTechItems, faqItems } from "@/domains/token";
import { MobilePartnersAndAdvisorsSection } from "@/domains/partners";

export default function Home() {
  return (
    <Stack component="main" width="100%" height="100%" minHeight="100dvh">
      <MobileHero />
      <MobileTokenizationServiceCarousel items={tokenizationCarouselItems} />
      <MobileExploreEcosystemSection items={mobileEcosystemItems} />
      <MobilePoweredByUranoSection items={mobilePoweredItems} />
      <MobilePurchaseUranoSection />
      <MobileTechIntegrationsSection items={mobileTechItems} />
      <MobilePartnersAndAdvisorsSection />
      <MobileFaqSection items={faqItems} />
    </Stack>
  );
}
