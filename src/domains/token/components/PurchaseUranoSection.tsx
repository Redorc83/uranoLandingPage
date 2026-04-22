"use client";

import { Box, Stack, Typography } from "@mui/material";

import theme from "@/theme/theme";
import { SwapWidget, useWalletConnect, useUranoBalance } from "@/shared/wallet";
import { useErrorModal, ErrorModal } from "@/shared/ui";
import WalletReferralCard from "./WalletReferralCard";

export default function PurchaseUranoSection() {
  const { errorModalOpen, errorModalTitle, errorModalMessage, showError, closeError } = useErrorModal();
  const { address } = useWalletConnect();
  const { balance: uranoBalance } = useUranoBalance(address);
  const hasUrano = uranoBalance > 0;

  return (
    <Box
      component="section"
      id="purchase-urano"
      sx={{
        width: "100%",
        maxWidth: 1180,
        mx: "auto",
        pt: { xs: 6, md: 10 },
        px: { xs: 2.5, md: 3 },
        scrollMarginTop: 80,
      }}
    >
      <Typography
        className="conthrax"
        sx={{
          textAlign: "center",
          fontSize: { xs: 26, md: 44 },
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          background: theme.palette.uranoGradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: { xs: 4, md: 6 },
          px: 2,
        }}
      >
        Purchase Urano
      </Typography>

      <Stack
        direction={{ xs: "column", md: hasUrano ? "row" : "column" }}
        alignItems={{ xs: "stretch", md: "flex-start" }}
        justifyContent="center"
        gap={{ xs: 3, md: 4 }}
      >
        <Box sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
          <SwapWidget showError={showError} />
        </Box>

        {hasUrano && address && (
          <Box sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
            <WalletReferralCard address={address} />
          </Box>
        )}
      </Stack>

      <ErrorModal
        open={errorModalOpen}
        onClose={closeError}
        errorTitle={errorModalTitle}
        errorMessage={errorModalMessage}
      />
    </Box>
  );
}
