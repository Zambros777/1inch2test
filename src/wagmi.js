import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon, arbitrum, base, mainnet, optimism, bsc } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "c625a70d113a213464b3a0e46f8a6f4f",
  chains: [polygon, mainnet, optimism, arbitrum, base, bsc],
});

/** */
