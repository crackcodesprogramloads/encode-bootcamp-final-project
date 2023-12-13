"use client";

import { ReactNode } from "react";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export default function WagmiRainbowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const ALCHEMY_API = process.env.NEXT_PUBLIC_ALCHEMY_ID || "";
  const WALLET_CONNECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT || "";

  const { chains, publicClient } = configureChains(
    [sepolia],
    [alchemyProvider({ apiKey: ALCHEMY_API }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Encode final project",
    projectId: WALLET_CONNECT_ID,
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
