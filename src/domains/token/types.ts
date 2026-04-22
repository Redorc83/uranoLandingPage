import type { StaticImageData } from "next/image";

export type PoweredByUranoItem = Readonly<{
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
  bgImage: StaticImageData | string;
  hoverBgImage?: StaticImageData | string;
  href?: string;
}>;

export type MobilePoweredByUranoItem = Readonly<{
  id: string;
  title: string;
  description: string;
  href: string;
}>;

export type TechIntegrationItem = Readonly<{
  id: string;
  image: StaticImageData | string;
  imageAlt?: string;
  caption: string;
  href?: string;
}>;

export type MobileTechIntegrationItem = Readonly<{
  id: string;
  image: StaticImageData | string;
  imageAlt?: string;
  caption: string;
  href: string;
}>;

export type FaqItem = Readonly<{
  id: string;
  question: string;
  answer: string;
}>;
