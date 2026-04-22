import type { ExploreEcosystemItem } from "./types";

import ecosystemImage1 from "@/assets/images/ecosystem1.webp";
import ecosystemImage2 from "@/assets/images/ushares.webp";
import ecosystemImage3 from "@/assets/images/ecosystem3.webp";
import ecosystemImage4 from "@/assets/images/ecosystem4 -1.webp";

const baseEcosystemItems: ExploreEcosystemItem[] = [
  {
    id: "uapp",
    title: "uApp",
    description: "Our Web3-native platform designed to let users access and manage real-world asset representations, stake $URANO, and participate in decentralized governance within a single, seamless ecosystem.",
    primaryCtaLabel: "LAUNCH",
    primaryCtaHref: "launch",
    secondaryCtaLabel: "DISCOVER",
    secondaryCtaHref: "https://docs.uranoecosystem.com/ecosystem/uapp",
    imageSide: "left",
    backdropWord: "uApp",
    image: ecosystemImage1.src,
    imageAlt: "uApp preview",
  },
  {
    id: "ushares",
    title: "uShares",
    description: "From art and real estate to private equity, uShares represent real-world assets in a fractionalized on-chain format, enabling broader access through compliant digital instruments.",
    primaryCtaLabel: "BUY",
    primaryCtaHref: "launch",
    secondaryCtaLabel: "DISCOVER",
    secondaryCtaHref: "https://docs.uranoecosystem.com/ecosystem/ushares",
    imageSide: "right",
    backdropWord: "uShares",
    image: ecosystemImage2.src,
    imageAlt: "uShares preview",
  },
  {
    id: "ustation",
    title: "uStation",
    description: "Supporting businesses and individuals throughout the process of bringing real-world assets on-chain.",
    primaryCtaLabel: "TOKENIZE NOW",
    primaryCtaHref: "mailto:info@uranoecosystem.com",
    secondaryCtaLabel: "DISCOVER",
    secondaryCtaHref: "https://docs.uranoecosystem.com/ecosystem/ustation",
    imageSide: "left",
    backdropWord: "uStation",
    image: ecosystemImage3.src,
    imageAlt: "uStation preview",
  },
  {
    id: "uassistant",
    title: "uAssistant",
    description: "An AI agent designed to guide users through real-world assets, assist with complex operations, and enhance the overall platform experience.",
    primaryCtaLabel: "LAUNCH",
    primaryCtaHref: "launch",
    secondaryCtaLabel: "DISCOVER",
    secondaryCtaHref: "https://docs.uranoecosystem.com/ecosystem/uassistant",
    imageSide: "right",
    backdropWord: "uAssistant",
    image: ecosystemImage4.src,
    imageAlt: "uAssistant preview",
  },
];

export const desktopEcosystemItems: ExploreEcosystemItem[] = baseEcosystemItems;

export const mobileEcosystemItems: ExploreEcosystemItem[] = baseEcosystemItems.map((item) =>
  item.id === "ustation" ? { ...item, primaryCtaLabel: "TOKENIZE" } : item
);
