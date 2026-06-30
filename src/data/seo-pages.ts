import { siteConfig } from "@/data/site";

export type SeoPageKey =
  | "guide"
  | "howToPlay"
  | "controls"
  | "tips"
  | "bestCrashes"
  | "beginnerGuide"
  | "updatesGuide"
  | "faq"
  | "walkthrough"
  | "strategy";

type SeoSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

type SeoRelatedLink = {
  href: string;
  label: string;
  note: string;
};

export type SeoPage = {
  key: SeoPageKey;
  route: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  intent: string;
  sections: SeoSection[];
  checklist: string[];
  faq: { q: string; a: string }[];
  related: SeoRelatedLink[];
};

const coreRelated: SeoRelatedLink[] = [
  {
    href: "/codes",
    label: "Codes",
    note: "Check current reward claims before planning around a free engine."
  },
  {
    href: "/wiki",
    label: "Wiki",
    note: "Use the wiki hub for source-backed engine, currency, and crash terms."
  },
  {
    href: "/sources",
    label: "Sources",
    note: "Review which Roblox, code-site, and community claims are verified."
  }
];

export const seoPages: SeoPage[] = [
  {
    key: "guide",
    route: "/guide",
    title: "Train Crash Simulator Guide - Codes, Controls, Tips & Best Crashes",
    description:
      "Train Crash Simulator guide with codes, controls, beginner tips, best crashes, walkthrough, strategy, updates, FAQ, and safe Roblox source checks.",
    eyebrow: "Player guide",
    h1: "Train Crash Simulator Guide",
    intro:
      "Use this guide as a practical starting point before you spend time testing engines, chasing rewards, or trusting a community claim. It keeps verified facts separate from items that still need live checking.",
    intent: "train crash simulator guide",
    sections: [
      {
        heading: "What to do first",
        body:
          "Start with the official Roblox game page, then check codes, source notes, and the guide hub before making a long progression plan. This keeps your route tied to public evidence instead of guessing.",
        bullets: [
          "Open the game from the official Roblox listing.",
          "Check whether a code reward is currently marked active, expired, or needs live verification.",
          "Use one route for each intent: codes for rewards, wiki for terms, and guides for decisions."
        ]
      },
      {
        heading: "How to use this site while playing",
        body:
          "Keep the homepage for quick navigation, the codes page for rewards, and this guide for decision order. If a claim involves a specific engine, currency rate, or transfer rule, confirm it before treating it as final.",
        bullets: [
          "Use /codes when a video or search result mentions a reward.",
          "Use /controls if you are still learning the interface.",
          "Use /best-crashes when you want safer criteria for testing crash setups."
        ]
      },
      {
        heading: "Avoid over-committing early",
        body:
          "Many Roblox simulator pages change after updates. Treat early engine choices, crash rankings, and reward claims as working notes until they are checked against the live game or an official source."
      }
    ],
    checklist: [
      "Check codes before spending time on a reward path.",
      "Learn basic controls before comparing crash outcomes.",
      "Record what changed after updates.",
      "Keep source notes visible when a claim is not official."
    ],
    faq: [
      {
        q: "Is this Train Crash Simulator guide official?",
        a: "No. It is a fan-made guide. Official Roblox and creator-owned sources remain the source of record."
      },
      {
        q: "Should I trust every code or crash claim?",
        a: "No. Use the source labels and checked dates, then verify in game when a reward or ranking affects your plan."
      }
    ],
    related: [
      { href: "/how-to-play", label: "How to Play", note: "Learn the basic game loop before using deeper guides." },
      { href: "/beginner-guide", label: "Beginner Guide", note: "A calmer first-session route for new players." },
      { href: "/strategy", label: "Strategy", note: "Turn early observations into a repeatable plan." },
      ...coreRelated
    ]
  },
  {
    key: "howToPlay",
    route: "/how-to-play",
    title: "How to Play Train Crash Simulator - Controls, Codes & First Crash",
    description:
      "Learn how to play Train Crash Simulator with controls, code checks, beginner route, first crash testing, walkthrough links, and source-safe tips.",
    eyebrow: "How to play",
    h1: "How to Play Train Crash Simulator",
    intro:
      "Train Crash Simulator is easiest to approach when you split the first session into setup, movement, reward checks, and controlled crash testing. This page avoids unsupported formulas and focuses on a safe order of play.",
    intent: "how to play train crash simulator",
    sections: [
      {
        heading: "Start with a simple loop",
        body:
          "Do not try to optimize everything immediately. Learn where the main controls, rewards, and reset points are, then test one route or crash setup at a time.",
        bullets: [
          "Join from the official Roblox listing.",
          "Look for obvious menu labels before trusting a third-party tutorial.",
          "Try one short run before spending currency or planning upgrades."
        ]
      },
      {
        heading: "Check rewards before planning",
        body:
          "Codes and promotional rewards can change quickly. If a public source lists a reward, treat it as a lead until the game accepts it or a trusted source confirms the current status.",
        bullets: [
          "Use the codes page for current reward notes.",
          "Keep expired or disputed code claims separate.",
          "Do not build a progression plan around an unverified reward."
        ]
      },
      {
        heading: "Make crash testing repeatable",
        body:
          "When comparing crashes, keep your route, train choice, timing, and outcome notes consistent. This makes your own results more useful than a random highlight clip."
      }
    ],
    checklist: [
      "Learn the menus.",
      "Try one short run.",
      "Check codes.",
      "Test one crash setup.",
      "Write down what changed."
    ],
    faq: [
      {
        q: "What should I do first in Train Crash Simulator?",
        a: "Learn the basic interface, check current code notes, and run one simple test before comparing engines or crashes."
      },
      {
        q: "Do I need a tier list before playing?",
        a: "No. A tier list helps later, but your first goal should be understanding controls and repeatable crash setups."
      }
    ],
    related: [
      { href: "/controls", label: "Controls", note: "Review interface and movement checks." },
      { href: "/walkthrough", label: "Walkthrough", note: "Follow a step-by-step first route." },
      { href: "/tips", label: "Tips", note: "Use quick habits that reduce wasted time." },
      ...coreRelated
    ]
  },
  {
    key: "controls",
    route: "/controls",
    title: "Train Crash Simulator Controls - Movement, Camera, Menus & Codes",
    description:
      "Train Crash Simulator controls guide for movement, camera, menu checks, reward screens, code redemption, reset habits, and repeatable crash testing.",
    eyebrow: "Controls",
    h1: "Train Crash Simulator Controls",
    intro:
      "Controls can vary by device and Roblox updates, so this page focuses on what to verify instead of pretending every keybind is permanent. Use it as a checklist when you start a session.",
    intent: "train crash simulator controls",
    sections: [
      {
        heading: "Confirm movement and camera first",
        body:
          "Before chasing a crash outcome, make sure you can move, steer, adjust the camera, and recover from a failed route. This prevents confusing a control problem with a strategy problem.",
        bullets: [
          "Test movement on a quiet route.",
          "Check whether camera angle changes affect your crash setup.",
          "Learn how to reset or return before longer attempts."
        ]
      },
      {
        heading: "Treat menus as update-sensitive",
        body:
          "Reward and toolbox menus may move when the game updates. If a code guide says a button is in one place, verify the current UI before assuming the guide is wrong.",
        bullets: [
          "Look for Toolbox or Rewards labels when redeeming codes.",
          "Check settings if controls feel different from a video.",
          "Keep device-specific issues separate from game-specific issues."
        ]
      },
      {
        heading: "Use controls to make better tests",
        body:
          "The best crash notes come from repeatable attempts. Keep your camera, timing, and path similar so you can compare outcomes more clearly."
      }
    ],
    checklist: [
      "Test movement.",
      "Test camera control.",
      "Find reset or return options.",
      "Locate reward menus.",
      "Run one repeatable crash test."
    ],
    faq: [
      {
        q: "Are Train Crash Simulator controls the same on every device?",
        a: "Not always. Roblox controls can differ across desktop, mobile, and controller setups, so verify your own device first."
      },
      {
        q: "Why do code instructions mention different menu names?",
        a: "Roblox games update their interfaces. Use the current in-game labels before assuming an older guide is accurate."
      }
    ],
    related: [
      { href: "/how-to-play", label: "How to Play", note: "Use controls inside the first-session route." },
      { href: "/best-crashes", label: "Best Crashes", note: "Apply repeatable controls to crash testing." },
      { href: "/faq", label: "FAQ", note: "Check common control and source questions." },
      ...coreRelated
    ]
  },
  {
    key: "tips",
    route: "/tips",
    title: "Train Crash Simulator Tips - Codes, Controls, Crashes & Strategy",
    description:
      "Train Crash Simulator tips for codes, controls, best crashes, beginner routes, update checks, source labels, walkthroughs, and safer strategy.",
    eyebrow: "Tips",
    h1: "Train Crash Simulator Tips",
    intro:
      "Good tips are not just shortcuts. They help you avoid wasting runs, trusting stale code claims, or comparing crash outcomes that were tested under different conditions.",
    intent: "train crash simulator tips",
    sections: [
      {
        heading: "Use source labels before acting",
        body:
          "A code, engine reward, or crash ranking is only as useful as its source. Prefer official Roblox information for identity and availability, then use code sites and videos as leads.",
        bullets: [
          "Check whether a claim is official, community-reported, or needs verification.",
          "Avoid spending around a reward that is not currently confirmed.",
          "Revisit update notes when a guide suddenly feels wrong."
        ]
      },
      {
        heading: "Make one change at a time",
        body:
          "If you change train choice, route, timing, and camera angle all at once, you cannot tell what caused a better crash. Adjust one variable, test, then compare.",
        bullets: [
          "Keep a short note of setup and result.",
          "Repeat a promising setup before calling it best.",
          "Separate fun crashes from efficient progression."
        ]
      },
      {
        heading: "Use the site like a route map",
        body:
          "Start at codes, learn controls, read the walkthrough, then move to strategy and best crashes. This keeps the pages useful without turning every keyword into a thin page."
      }
    ],
    checklist: [
      "Check source status.",
      "Redeem codes only when current.",
      "Change one testing variable at a time.",
      "Use walkthrough pages for sequence.",
      "Recheck after updates."
    ],
    faq: [
      {
        q: "What is the best Train Crash Simulator tip for new players?",
        a: "Do not rush optimization. Learn controls, check rewards, and make crash tests repeatable before comparing outcomes."
      },
      {
        q: "Should I follow every YouTube crash setup?",
        a: "Use videos as ideas, then test the setup yourself because updates and device controls can change results."
      }
    ],
    related: [
      { href: "/beginner-guide", label: "Beginner Guide", note: "Turn these tips into a first-session plan." },
      { href: "/strategy", label: "Strategy", note: "Use tips as part of a longer progression route." },
      { href: "/updates-guide", label: "Updates Guide", note: "Know when to recheck old advice." },
      ...coreRelated
    ]
  },
  {
    key: "bestCrashes",
    route: "/best-crashes",
    title: "Train Crash Simulator Best Crashes - Compare Routes, Trains & Setups",
    description:
      "Train Crash Simulator best crashes guide for comparing routes, trains, engines, repeatable setups, spectacle, strategy, and update-sensitive claims.",
    eyebrow: "Crash testing",
    h1: "Train Crash Simulator Best Crashes",
    intro:
      "The best crash is not always the loudest or most dramatic clip. A useful crash setup should be repeatable, understandable, and tied to the goal you are testing.",
    intent: "train crash simulator best crashes",
    sections: [
      {
        heading: "What makes a crash useful",
        body:
          "A crash setup is worth noting when you can repeat it and explain what changed. Keep the route, train, timing, and camera angle clear enough that another player could test it.",
        bullets: [
          "Repeatability: can you do it again?",
          "Clarity: do you know what caused the result?",
          "Goal fit: is it for spectacle, rewards, or progression?"
        ]
      },
      {
        heading: "Avoid fake ranking confidence",
        body:
          "Until exact engine lists, stats, and update changes are verified, treat best-crash claims as testing categories rather than final rankings.",
        bullets: [
          "Mark unverified engine claims as needs check.",
          "Use community videos as examples, not official proof.",
          "Recheck after major updates."
        ]
      },
      {
        heading: "Build your own crash notes",
        body:
          "A simple note such as route, engine, control setup, and outcome can make your personal testing more useful than a stale ranking page."
      }
    ],
    checklist: [
      "Pick one goal.",
      "Choose one route.",
      "Keep controls consistent.",
      "Repeat the result.",
      "Compare after updates."
    ],
    faq: [
      {
        q: "What are the best crashes in Train Crash Simulator?",
        a: "The most useful crashes are repeatable setups that match your goal. This page avoids unsupported exact rankings until source-backed data is available."
      },
      {
        q: "Can a video prove the best crash?",
        a: "A video can show a setup, but the result still needs testing because updates and controls can change outcomes."
      }
    ],
    related: [
      { href: "/controls", label: "Controls", note: "Make crash tests repeatable." },
      { href: "/strategy", label: "Strategy", note: "Decide whether a crash helps your goal." },
      { href: "/walkthrough", label: "Walkthrough", note: "Use a step-by-step testing route." },
      ...coreRelated
    ]
  },
  {
    key: "beginnerGuide",
    route: "/beginner-guide",
    title: "Train Crash Simulator Beginner Guide - Codes, Controls & First Run",
    description:
      "Train Crash Simulator beginner guide for first run setup, controls, codes, crash testing, walkthrough steps, source checks, and safe progression.",
    eyebrow: "Beginner route",
    h1: "Train Crash Simulator Beginner Guide",
    intro:
      "New players should not need ten tabs or an overconfident tier list. This beginner guide gives you a careful first-session route that works even when some exact data still needs verification.",
    intent: "train crash simulator beginner guide",
    sections: [
      {
        heading: "First five minutes",
        body:
          "Use your first minutes to learn the interface, confirm menus, and test one simple crash route. This gives you context before you follow codes, tier lists, or strategy pages.",
        bullets: [
          "Open the official Roblox game page.",
          "Check movement and camera controls.",
          "Find the rewards or code area if available.",
          "Try one simple run without spending around a guide claim."
        ]
      },
      {
        heading: "First reward check",
        body:
          "After you understand the interface, check codes and reward notes. If a code is listed as needs check, treat it as a lead until the game accepts it.",
        bullets: [
          "Use /codes for active and expired notes.",
          "Do not assume a reward still works because it appears in a search snippet.",
          "Keep a failed code separate from a typo or menu problem."
        ]
      },
      {
        heading: "First progression decision",
        body:
          "Once you understand controls and rewards, compare guide, strategy, and best-crash pages to decide what kind of testing you want to do next."
      }
    ],
    checklist: [
      "Verify official game page.",
      "Learn controls.",
      "Check rewards.",
      "Try one crash route.",
      "Read strategy only after you understand the basics."
    ],
    faq: [
      {
        q: "Is Train Crash Simulator hard for beginners?",
        a: "It is easier when you first learn the interface and controls instead of jumping straight into optimization."
      },
      {
        q: "What should beginners avoid?",
        a: "Avoid trusting stale code claims or exact rankings before checking whether the live game still supports them."
      }
    ],
    related: [
      { href: "/how-to-play", label: "How to Play", note: "Learn the basic loop." },
      { href: "/controls", label: "Controls", note: "Confirm device and menu behavior." },
      { href: "/tips", label: "Tips", note: "Use habits that reduce wasted runs." },
      ...coreRelated
    ]
  },
  {
    key: "updatesGuide",
    route: "/updates-guide",
    title: "Train Crash Simulator Updates Guide - Codes, Patches & What Changed",
    description:
      "Train Crash Simulator updates guide for code freshness, patch checks, controls, crash setups, source status, guide accuracy, and what changed.",
    eyebrow: "Updates",
    h1: "Train Crash Simulator Updates Guide",
    intro:
      "Updates can make old advice stale. Use this page to decide which claims need rechecking after a patch, new code signal, source-status change, or visible Roblox page update.",
    intent: "train crash simulator updates",
    sections: [
      {
        heading: "What to recheck first",
        body:
          "Start with the parts most likely to change: codes, rewards, menus, crash outcomes, and source links. Evergreen descriptions usually need less urgent attention.",
        bullets: [
          "Check whether codes changed from active to expired.",
          "Recheck menu labels used by redemption guides.",
          "Retest crash setups that depend on timing or route behavior."
        ]
      },
      {
        heading: "Separate official and community changes",
        body:
          "Official Roblox metadata is stronger for game identity and availability. Community posts, videos, and code sites are useful leads, but they should not silently overwrite source-backed notes.",
        bullets: [
          "Use the sources page when claims disagree.",
          "Keep disputed terms out of final rankings.",
          "Use updates as a reason to refresh, not to invent facts."
        ]
      },
      {
        heading: "How updates affect SEO pages",
        body:
          "A named update can justify a new hub only when several related terms appear. Otherwise, update existing pages like codes, controls, tips, and strategy."
      }
    ],
    checklist: [
      "Check codes.",
      "Check controls and menus.",
      "Check crash setup repeatability.",
      "Check source links.",
      "Update existing pages before creating thin pages."
    ],
    faq: [
      {
        q: "When should Train Crash Simulator pages be updated?",
        a: "Refresh pages when codes, menus, crash behavior, official links, or repeated community terms change."
      },
      {
        q: "Does every update need a new page?",
        a: "No. Most updates should improve existing pages unless there is a distinct, source-backed topic cluster."
      }
    ],
    related: [
      { href: "/updates", label: "Update Status", note: "See the existing update watch page." },
      { href: "/tips", label: "Tips", note: "Refresh evergreen advice after changes." },
      { href: "/faq", label: "FAQ", note: "Check common update questions." },
      ...coreRelated
    ]
  },
  {
    key: "faq",
    route: "/faq",
    title: "Train Crash Simulator FAQ - Codes, Controls, Best Crashes & Wiki",
    description:
      "Train Crash Simulator FAQ for codes, controls, best crashes, beginner guide, updates, walkthrough, strategy, wiki, and source status questions.",
    eyebrow: "FAQ",
    h1: "Train Crash Simulator FAQ",
    intro:
      "This FAQ collects common player questions in one indexable page. It keeps answers practical and cautious where exact rewards, engine data, or official source links still need checking.",
    intent: "train crash simulator FAQ",
    sections: [
      {
        heading: "Quick answers",
        body:
          "Use this page when you need a short answer, then follow the related guide when you want the full checklist.",
        bullets: [
          "Codes belong on the codes page.",
          "Controls belong on the controls page.",
          "Crash comparisons belong on the best-crashes page.",
          "Source disputes belong on the sources page."
        ]
      },
      {
        heading: "Why answers stay cautious",
        body:
          "Roblox simulator pages can change quickly. A careful answer is more useful than a confident claim that breaks after the next update."
      },
      {
        heading: "Where to go next",
        body:
          "Start with how to play, beginner guide, controls, tips, walkthrough, strategy, and best crashes depending on what problem you are trying to solve."
      }
    ],
    checklist: [
      "Use FAQ for short answers.",
      "Use guide pages for longer decisions.",
      "Use sources for verification.",
      "Use updates when something changed."
    ],
    faq: [
      {
        q: "Does Train Crash Simulator have codes?",
        a: "Public code sources have reported codes, but each code should be checked against current game behavior before relying on the reward."
      },
      {
        q: "Where is the Train Crash Simulator Trello?",
        a: "Use the Trello and sources pages for current official-link status. Do not assume an unofficial board is official."
      },
      {
        q: "What is the best crash setup?",
        a: "The best setup depends on your goal. Compare repeatability, clarity, and whether the setup still works after updates."
      }
    ],
    related: [
      { href: "/guide", label: "Guide", note: "Read the longer guide after short answers." },
      { href: "/controls", label: "Controls", note: "Fix control confusion first." },
      { href: "/updates-guide", label: "Updates Guide", note: "Know when answers need refreshing." },
      ...coreRelated
    ]
  },
  {
    key: "walkthrough",
    route: "/walkthrough",
    title: "Train Crash Simulator Walkthrough - Step-by-Step Codes & Crash Route",
    description:
      "Train Crash Simulator walkthrough with step-by-step official source checks, controls, codes, first crash route, update checks, and strategy planning.",
    eyebrow: "Walkthrough",
    h1: "Train Crash Simulator Walkthrough",
    intro:
      "This walkthrough gives you a clear order of actions without pretending to know every private formula. It is designed for players who want a repeatable first route.",
    intent: "train crash simulator walkthrough",
    sections: [
      {
        heading: "Step 1: Open and observe",
        body:
          "Start from the official Roblox listing, then look at the current interface before reading older guide instructions. Menus and reward areas can change.",
        bullets: [
          "Confirm you are on the intended game page.",
          "Look for main menus and reward labels.",
          "Do not spend currency during the first observation pass."
        ]
      },
      {
        heading: "Step 2: Test controls and one route",
        body:
          "Run a simple route to learn movement, camera, reset behavior, and crash timing. Keep this first route short enough that you can repeat it.",
        bullets: [
          "Keep the camera angle consistent.",
          "Repeat the same setup once.",
          "Note whether the result changes."
        ]
      },
      {
        heading: "Step 3: Check rewards and plan",
        body:
          "After you understand the basics, check codes, read source notes, and move into strategy or best-crash testing."
      }
    ],
    checklist: [
      "Official page.",
      "Interface check.",
      "Control test.",
      "Short crash route.",
      "Reward check.",
      "Strategy page."
    ],
    faq: [
      {
        q: "Is this walkthrough for speedrunning?",
        a: "No. It is a careful first route for understanding the game and avoiding stale claims."
      },
      {
        q: "When should I use strategy pages?",
        a: "Use strategy after you know the controls, rewards, and at least one repeatable crash setup."
      }
    ],
    related: [
      { href: "/how-to-play", label: "How to Play", note: "Understand the basic game loop." },
      { href: "/beginner-guide", label: "Beginner Guide", note: "Use a more beginner-focused checklist." },
      { href: "/strategy", label: "Strategy", note: "Plan after the walkthrough." },
      ...coreRelated
    ]
  },
  {
    key: "strategy",
    route: "/strategy",
    title: "Train Crash Simulator Strategy - Codes, Best Crashes & Progression",
    description:
      "Train Crash Simulator strategy guide for codes, best crashes, controls, updates, walkthrough planning, source checks, and repeatable Roblox progression.",
    eyebrow: "Strategy",
    h1: "Train Crash Simulator Strategy",
    intro:
      "Strategy starts after the basics. Once you can control your route and understand source labels, you can decide whether to optimize for rewards, crash outcomes, or repeatable testing.",
    intent: "train crash simulator strategy",
    sections: [
      {
        heading: "Choose a goal before optimizing",
        body:
          "A dramatic crash, a useful reward, and a repeatable test are different goals. Pick one before you compare setups or treat a ranking as useful.",
        bullets: [
          "Reward goal: start with codes and source checks.",
          "Crash goal: focus on controls and repeatability.",
          "Progression goal: use guide and update pages before long plans."
        ]
      },
      {
        heading: "Use updates as a reset point",
        body:
          "After an update, recheck old strategy assumptions. Code status, menu paths, crash behavior, and community advice may all need another pass.",
        bullets: [
          "Recheck the update guide.",
          "Retest favorite setups.",
          "Avoid copying old rankings without context."
        ]
      },
      {
        heading: "Turn testing into a simple system",
        body:
          "Use a short note format: date, route, train or engine, control setup, result, and source. That makes your own strategy more durable than a single clip."
      }
    ],
    checklist: [
      "Pick one goal.",
      "Check source status.",
      "Test controls.",
      "Repeat crash setup.",
      "Recheck after updates."
    ],
    faq: [
      {
        q: "What is the best Train Crash Simulator strategy?",
        a: "The safest strategy is to choose one goal, verify current rewards, and test crash setups repeatably before treating a claim as final."
      },
      {
        q: "Should strategy change after updates?",
        a: "Yes. Updates are a good reason to recheck codes, controls, crash setups, and source status."
      }
    ],
    related: [
      { href: "/best-crashes", label: "Best Crashes", note: "Compare setups with clearer criteria." },
      { href: "/updates-guide", label: "Updates Guide", note: "Know what to retest after patches." },
      { href: "/walkthrough", label: "Walkthrough", note: "Use the step-by-step route first." },
      ...coreRelated
    ]
  }
];

export const seoPageMap = Object.fromEntries(seoPages.map((page) => [page.key, page])) as Record<SeoPageKey, SeoPage>;

export const seoHubLinks = seoPages.map((page) => ({
  href: page.route,
  title: page.h1,
  description: page.description,
  intent: page.intent,
  anchor: page.title.split(" - ")[0]
}));

export function canonicalFor(route: string) {
  return `${siteConfig.domain}${route}`;
}
