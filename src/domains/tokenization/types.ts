import type { StaticImageData } from "next/image";

export type CarouselItem = Readonly<{
  id: string;
  title: string;
  description: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  href: string;
}>;
