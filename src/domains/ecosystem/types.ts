import type { StaticImageData } from "next/image";

export type ExploreEcosystemItem = Readonly<{
  id: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageSide: "left" | "right";
  image?: StaticImageData | string;
  imageAlt?: string;
  backdropWord?: string;
}>;
