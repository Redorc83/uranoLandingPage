"use client";

import type { ReactElement } from "react";
import React from "react";
import Image from "next/image";
import { Box, Stack, Link } from "@mui/material";
import { keyframes } from "@emotion/react";

import type { PartnerLogo } from "../types";
import { PARTNER_ROW_1, PARTNER_ROW_2 } from "../data";

import partnersBg from "@/assets/images/mobilePartnerBg.webp";

const marqueeLeft = keyframes`
  0% { transform: translate3d(0,0,0); }
  100% { transform: translate3d(-50%,0,0); }
`;

const marqueeRight = keyframes`
  0% { transform: translate3d(-50%,0,0); }
  100% { transform: translate3d(0,0,0); }
`;

const CARD_ASPECT = "852 / 448";

function LogoImage({ logo }: { logo: PartnerLogo }): ReactElement {
    return (
        <Link href={logo.href} target="_blank" rel="noopener noreferrer" underline="none">
            <Box
                sx={{
                    height: { xs: 65, md: 130 },
                    aspectRatio: CARD_ASPECT,
                    width: "auto",
                    position: "relative",
                    flex: "0 0 auto",
                }}
            >
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 900px) 210px, 248px"
                    style={{ objectFit: "contain" }}
                    priority={false}
                />
            </Box>
        </Link>
    );
}

function MarqueeRow({
    items,
    durationSeconds,
    gapPx = 10,
    direction = "left",
}: {
    items: readonly PartnerLogo[];
    durationSeconds: number;
    gapPx?: number;
    direction?: "left" | "right";
}): ReactElement {
    const laneItems = React.useMemo(() => {
        const REPEAT = 8;
        return Array.from({ length: REPEAT }, () => items).flat();
    }, [items]);

    const anim = direction === "left" ? marqueeLeft : marqueeRight;

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <Box
                sx={{
                    display: "flex",
                    width: "max-content",
                    animation: `${anim} ${durationSeconds}s linear infinite`,
                    willChange: "transform",

                    // ✅ important: spacing between the 2 duplicated blocks (the seam)
                    columnGap: `${gapPx}px`,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: `${gapPx}px`,
                        py: 1,
                    }}
                >
                    {laneItems.map((l, idx) => (
                        <LogoImage key={`a-${idx}`} logo={l} />
                    ))}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: `${gapPx}px`,
                        py: 1,
                    }}
                >
                    {laneItems.map((l, idx) => (
                        <LogoImage key={`b-${idx}`} logo={l} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}


export default function MobilePartnersAndAdvisorsSection(): ReactElement {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                height: "66vh",
                position: "relative",
                py: { xs: 10, md: 14 },
                mb: 12
            }}
        >
            <Stack spacing={{ xs: 6, md: 7 }} sx={{ px: { xs: 3, md: 16 } }}>
                <MobileGradientStrokeTitle />


                <Stack spacing={{ xs: 0, md: 0 }}>
                    <MarqueeRow items={PARTNER_ROW_1} durationSeconds={300} gapPx={8} direction="left" />
                    <MarqueeRow items={PARTNER_ROW_2} durationSeconds={360} gapPx={8} direction="right" />
                </Stack>
            </Stack>
            <Box sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 12,
                pointerEvents: "none !important"
            }}>
                <Image
                    src={partnersBg}
                    alt="Partners and Advisors Background"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "contain",
                        pointerEvents: "none",
                        userSelect: "none",
                        transform: "scaleY(1.8)", // <- taller (15%)
                        transformOrigin: "center",
                      }}
                />
                <Box sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "30vh",
                    zIndex: 13,
                    background: "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #0F0F0F 100%)",
                }}>
                    <Box sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "30vh",
                        zIndex: 14,
                        background: "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #0F0F0F 100%)",
                    }}>
                        <Box sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: "30vh",
                            zIndex: 15,
                            background: "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #0F0F0F 100%)",
                        }}></Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}

function MobileGradientStrokeTitle({
    text = "PARTNERS & ADVISORS",
}: {
    text?: string;
}): ReactElement {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: { xs: 54, md: 78 },
            }}
        >
            <Box
                component="svg"
                role="img"
                aria-label={text}
                viewBox="0 0 1200 120"
                sx={{ width: "100%", height: "100%", overflow: "visible" }}
            >
                <defs>
                    <linearGradient
                        id="uranoStrokeGrad"
                        x1="0"
                        y1="0"
                        x2="1200"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#5EBBC3" />
                        <stop offset="100%" stopColor="#6DE7C2" />
                    </linearGradient>

                    <mask id="uranoTextStrokeMask" maskUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="1200" height="120" fill="black" />
                        <text
                            x="600"
                            y="86"
                            textAnchor="middle"
                            fontFamily="Conthrax, sans-serif"
                            fontSize="64"
                            fontWeight="700"
                            letterSpacing="8"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            style={{ fill: "none" }}
                        >
                            {text}
                        </text>
                    </mask>
                </defs>

                <rect
                    x="0"
                    y="0"
                    width="1200"
                    height="120"
                    fill="url(#uranoStrokeGrad)"
                    mask="url(#uranoTextStrokeMask)"
                />
            </Box>
        </Box>
    );
}
