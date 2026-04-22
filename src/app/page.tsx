import { Stack } from "@mui/material";

import { Hero } from "@/domains/shell";
import { TokenizationServiceCarousel, tokenizationCarouselItems } from "@/domains/tokenization";
import { ExploreEcosystemSection, desktopEcosystemItems } from "@/domains/ecosystem";
import { PoweredByUranoSection, PurchaseUranoSection, TechIntegrationsSection, FaqSection, desktopPoweredItems, techItems, faqItems } from "@/domains/token";
import { PartnersAndAdvisorsSection } from "@/domains/partners";

export default function Home() {
  return (
    <Stack component="main" width="100%" height="100%" minHeight="100dvh">
      <Hero />
      <TokenizationServiceCarousel title="Tokenization as a Service" items={tokenizationCarouselItems} />
      <ExploreEcosystemSection title="Explore the Urano Ecosystem" items={desktopEcosystemItems} />
      <PoweredByUranoSection title="Powered by Urano" items={desktopPoweredItems} />
      <PurchaseUranoSection />
      <TechIntegrationsSection title="Tech Integrations" items={techItems} />
      <PartnersAndAdvisorsSection />
      <FaqSection title="FAQ" items={faqItems} />
      <Stack width="100%" height="20vh" />
    </Stack>
  );
}
