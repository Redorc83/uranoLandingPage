import type { PoweredByUranoItem, MobilePoweredByUranoItem, TechIntegrationItem, MobileTechIntegrationItem, FaqItem } from "./types";

import Subtract1 from "@/assets/images/Subtract1.webp";
import Subtract2 from "@/assets/images/Subtract2.webp";
import Subtract3 from "@/assets/images/Subtract3.webp";
import Subtract4 from "@/assets/images/Subtract4.webp";
import hoverSubtract1 from "@/assets/images/hoverSubstract1.webp";
import hoverSubtract2 from "@/assets/images/hoverSubstract2.webp";
import hoverSubtract3 from "@/assets/images/hoverSubstract3.webp";
import hoverSubtract4 from "@/assets/images/hoverSubstract4.webp";

import tech1Image from "@/assets/images/tech1.webp";
import tech2Image from "@/assets/images/tech2.webp";

export const desktopPoweredItems: PoweredByUranoItem[] = [
  {
    id: "governance",
    title: "Governance",
    description: "Shape the Urano ecosystem through on-chain governance. $URANO holders vote on proposals, protocol upgrades and ecosystem allocations, contributing to the evolution of the protocol.",
    side: "left",
    bgImage: Subtract1,
    hoverBgImage: hoverSubtract1,
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/governance",
  },
  {
    id: "staking",
    title: "Staking",
    description: "Stake your $URANO to support protocol integrity, access participation-based benefits and receive protocol rewards.",
    side: "right",
    bgImage: Subtract2,
    hoverBgImage: hoverSubtract2,
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/staking",
  },
  {
    id: "priority",
    title: "Priority  Access",
    description: "Access curated tokenizations, strategic launches and ecosystem programs, available to verified $URANO holders.",
    side: "left",
    bgImage: Subtract3,
    hoverBgImage: hoverSubtract3,
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken#strategic-benefits-of-holding-usdurano",
  },
  {
    id: "revenue",
    title: "Ecosystem Rewards Pool",
    description: "Benefit from Urano's ecosystem activity through a shared rewards pool that supports active participation across the network.",
    side: "right",
    bgImage: Subtract4,
    hoverBgImage: hoverSubtract4,
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/ecosystem-rewards-pool",
  },
];

export const mobilePoweredItems: MobilePoweredByUranoItem[] = [
  {
    id: "governance",
    title: "Governance",
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/governance",
    description: "Shape the Urano ecosystem through on-chain governance. $URANO holders vote on proposals, protocol upgrades and ecosystem allocations, contributing to the evolution of the protocol.",
  },
  {
    id: "staking",
    title: "Staking",
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/staking",
    description: "Stake your $URANO to support protocol integrity, access participation-based benefits and receive protocol rewards.",
  },
  {
    id: "priority",
    title: "Priority  Access",
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken#strategic-benefits-of-holding-usdurano",
    description: "Access curated tokenizations, strategic launches and ecosystem programs, available to verified $URANO holders.",
  },
  {
    id: "revenue",
    title: "Ecosystem Rewards Pool",
    href: "https://docs.uranoecosystem.com/ecosystem/uranotoken/ecosystem-rewards-pool",
    description: "Benefit from Urano's ecosystem activity through a shared rewards pool that supports active participation across the network.",
  },
];

export const techItems: TechIntegrationItem[] = [
  {
    id: "arbifuel",
    image: tech1Image.src,
    imageAlt: "ArbiFuel",
    caption: "Gasless transactions powered by ArbiFuel",
    href: "https://docs.uranoecosystem.com/arbitrum/arbifuel-program",
  },
  {
    id: "thirdweb",
    image: tech2Image.src,
    imageAlt: "Thirdweb",
    caption: "Onboarding everyone seamlessly with Thirdweb",
    href: "https://thirdweb.com/",
  },
];

export const mobileTechItems: MobileTechIntegrationItem[] = [
  {
    id: "arbifuel",
    image: tech1Image.src,
    imageAlt: "ArbiFuel",
    caption: "Gasless transactions powered by ArbiFuel",
    href: "https://docs.uranoecosystem.com/arbitrum/arbifuel-program",
  },
  {
    id: "thirdweb",
    image: tech2Image.src,
    imageAlt: "Thirdweb",
    caption: "Onboarding everyone seamlessly with Thirdweb",
    href: "https://thirdweb.com/",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "what-is-urano",
    question: "What is Urano Ecosystem?",
    answer: "Urano is a Web3-native ecosystem that connects real-world assets to on-chain infrastructure through compliant tokenization and modular products.",
  },
  {
    id: "what-are-ushares",
    question: "What are uShares?",
    answer: "uShares are fractional digital units representing the economic structure of tokenized assets, enabling broader access to real-world opportunities. ",
  },
  {
    id: "who-can-access",
    question: "Who can access and use the Urano platform?",
    answer: "Access depends on jurisdiction and product availability. Some modules require eligibility checks and identity verification.",
  },
];
