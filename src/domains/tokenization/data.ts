import type { CarouselItem } from "./types";

import slider1 from "@/assets/images/slider/IB.webp";
import slider2 from "@/assets/images/slider/Notarization.webp";
import slider3 from "@/assets/images/slider/Compliance.webp";
import slider4 from "@/assets/images/slider/RE.webp";
import slider5 from "@/assets/images/slider/IP.webp";
import slider6 from "@/assets/images/slider/Art.webp";

export const tokenizationCarouselItems: CarouselItem[] = [
  {
    id: "backing",
    title: "INSTITUTIONAL BACKING",
    description: "Supported and trusted by BlockSuisse AG a SPV Holding serving as an anchor investor.",
    image: slider1.src,
    imageAlt: "Slider 1",
    href: "https://docs.uranoecosystem.com/the-legal-structure-of-urano/blocksuisse-ag",
  },
  {
    id: "notarization",
    title: "DIGITAL NOTARIZATION",
    description: "Tamper-proof certification for digital and tokenized assets with instant on-chain verification.",
    image: slider2.src,
    imageAlt: "Slider 2",
    href: "https://notarify.io/",
  },
  {
    id: "compliance",
    title: "COMPLIANCE",
    description: "Full regulatory transparency and security, ensuring all tokenized assets meet compliance standards.",
    image: slider3.src,
    imageAlt: "Slider 3",
    href: "https://withpersona.com/",
  },
  {
    id: "real-estate",
    title: "REAL ESTATE",
    description: "From bricks to tokens: access institutional-grade fractional real estate.",
    image: slider4.src,
    imageAlt: "Slider 4",
    href: "https://docs.uranoecosystem.com/core-concepts/use-cases-of-tokenization#real-estate",
  },
  {
    id: "intellectual-properties",
    title: "INTELLECTUAL PROPERTIES",
    description: "Early access to tomorrow's unicorns: IP, patents, and emerging startups.",
    image: slider5.src,
    imageAlt: "Slider 5",
    href: "https://docs.uranoecosystem.com/core-concepts/use-cases-of-tokenization#intellectual-property-ip",
  },
  {
    id: "art",
    title: "ART",
    description: "Tokenize fine Arts, track provenance on-chain and open new opportunities for creators.",
    image: slider6.src,
    imageAlt: "Slider 6",
    href: "https://docs.uranoecosystem.com/core-concepts/use-cases-of-tokenization#art-and-collectibles",
  },
];
