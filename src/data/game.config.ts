import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Train Crash Simulator",
  slug: "train-crash-simulator",
  domain: "https://traincrashsimulator.com",
  theme: {
    primaryColor: "#E23B2E",
    accentColor: "#F5B82E",
    surfaceColor: "#111A22",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Coins",
    abbr: "COINS"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/84106928849831/Train-Crash-Simulator-BrentAnimates-Railway",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
