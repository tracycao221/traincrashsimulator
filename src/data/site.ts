import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} codes, beginner guide, how to play, controls, best crashes, walkthrough, strategy, updates, and source-backed Roblox wiki help.`,
  valueProposition: `Find ${gameConfig.name} codes, how to play help, controls, beginner tips, best crashes, and strategy notes before you spend time grinding in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-30",
  freshnessLabel: "codes, beginner guide, controls, and crash tips",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Calculator", href: "/calculator", description: "Decision helper for builds or progression." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Check codes" },
  { href: "/beginner-guide", label: "Beginner guide" },
  { href: "/how-to-play", label: "How to play" },
  { href: "/best-crashes", label: "Best crashes" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Live", note: "Designed for frequent checks" },
  { label: "Core pages", value: "10", note: "Codes, tier list, Trello, tools, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  {
    code: "IMCOOL",
    reward: "Red and Black VIP BR Engine",
    status: "Needs check",
    addedDate: "Roblox Den showed 1 active code and 0 expired with a last-checked stamp of 10:47PM on 06/29/2026; GameRant search results dated 2026-06-25 also pointed to Train Crash Simulator codes; a June 27, 2026 YouTube guide repeated new-codes wording without exposing another code; public sources reviewed here on 2026-06-30"
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Best early-game pick",
    tier: "S",
    role: "Starter path",
    reason: "Use this slot for the safest beginner recommendation once research confirms the game systems.",
    confidence: "Needs check",
    bestFor: ["beginner", "low investment"],
    sourceNote: "Replace with checked Roblox, creator, wiki, video, or community evidence.",
    teamNote: "Good starter picks should work without rare team pieces."
  },
  {
    name: "Best farming pick",
    tier: "A",
    role: "Progression",
    reason: "Use this slot for the most repeatable grind, income, or mission option.",
    confidence: "Needs check",
    bestFor: ["farming", "repeat runs"],
    sourceNote: "Replace with current creator videos, wiki notes, or verified community testing.",
    teamNote: "Pair farming picks with support or speed options when the game has team slots."
  },
  {
    name: "Best endgame pick",
    tier: "A",
    role: "Late game",
    reason: "Use this slot for high-skill or high-investment choices after more data is available.",
    confidence: "Needs check",
    bestFor: ["late game", "bossing"],
    sourceNote: "Replace with cross-checked late-game, update, or boss-clear evidence.",
    teamNote: "Endgame picks need synergy notes before being ranked as final."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/beginner-guide",
    eyebrow: "Guide",
    description: "First-session checklist for codes, controls, crash testing, and safe source checks."
  },
  {
    title: "How to play walkthrough",
    href: "/walkthrough",
    eyebrow: "Guide",
    description: "Step-by-step route from official page checks to controls, codes, and first crash tests."
  },
  {
    title: "Strategy guide",
    href: "/strategy",
    eyebrow: "Guide",
    description: "Plan around rewards, crash goals, source confidence, and update-sensitive advice."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Items and rewards",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for weapons, pets, units, items, drops, or reward tables."
  },
  {
    title: "Maps and systems",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for locations, bosses, quests, puzzles, events, or mechanics."
  },
  {
    title: "Builds and entities",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for clans, classes, characters, abilities, factories, or brainrots."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains the game loop and shows real gameplay."
  },
  {
    title: "Beginner route",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first session or first major unlock."
  },
  {
    title: "Meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports rankings, builds, update context, or advanced strategy."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `Where should I start on ${gameConfig.name}?`,
      a: `Start with current ${gameConfig.name} code notes, then read the beginner guide, controls page, walkthrough, and best crashes guide before planning a longer strategy.`
    },
    {
      q: `Does this site have ${gameConfig.name} codes and how-to-play help?`,
      a: `Yes. The site links codes, how to play, controls, tips, walkthrough, strategy, best crashes, updates, and FAQ pages from the homepage.`
    },
    {
      q: `Are ${gameConfig.name} code rewards guaranteed?`,
      a: "No. Code rewards stay labeled with source notes and checked dates so the page does not overstate unverified rewards."
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "Uncertain rewards stay clearly labeled so the page does not overstate verification."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Replace placeholder tiers with research-backed rankings, explain use cases, and split beginner, farming, and endgame recommendations when needed."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
