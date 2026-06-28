import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const wikiTopics = [
  {
    title: "Engines and trains",
    label: "Core entity",
    body: "Track modern engines, classic steam engines, themed engines, and the reported Red and Black VIP BR Engine reward.",
    status: "Needs full list"
  },
  {
    title: "Crash scenarios",
    label: "Mode",
    body: "Use this section for crash setup notes, derailment outcomes, and scenario testing once names are verified.",
    status: "Needs scenario names"
  },
  {
    title: "Coins and Gems",
    label: "Currency",
    body: "Coins and Gems are the main economy terms to verify before publishing exact unlock or farming math.",
    status: "Formula pending"
  },
  {
    title: "Missions",
    label: "Progression",
    body: "Mission objectives and rewards should be listed only after in-game or official-source checks.",
    status: "Needs reward table"
  },
  {
    title: "Toolbox and Rewards",
    label: "Codes",
    body: "The current redemption path is Toolbox, Rewards, enter code, and redeem. Recheck this before launch.",
    status: "Reported"
  },
  {
    title: "BrentAnimate railway series",
    label: "Series",
    body: "Engine transfer across BrentAnimate railway games is a key claim to verify before players spend currency.",
    status: "Needs scope check"
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki - Engines, Coins, Gems & Crash Scenarios`,
  description: `${siteConfig.gameName} wiki hub for engines, crash scenarios, Coins, Gems, missions, rewards, and source-backed Roblox notes.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` },
  openGraph: {
    title: `${siteConfig.gameName} Wiki`,
    description: `${siteConfig.gameName} wiki hub for engines, crash scenarios, Coins, Gems, missions, and source notes.`,
    url: `${siteConfig.domain}/wiki`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki`,
    description: `${siteConfig.gameName} wiki hub for engines, crash scenarios, Coins, Gems, missions, and source notes.`,
    images: ["/opengraph-image"]
  }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub for source-backed notes on engines, crash scenarios, Coins, Gems, missions, rewards, and BrentAnimate railway-series transfer claims."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Wiki topics to verify first"
          copy="These topics are safe to publish as a hub now, but exact lists and formulas stay labelled until sources confirm them."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wikiTopics.map((topic) => (
            <article key={topic.title} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="mini-label">{topic.label}</span>
                <span className="status-pill">{topic.status}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">{topic.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{topic.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h3 className="mt-3 text-lg font-bold text-white">Check current rewards</h3>
          <p className="mt-2 text-sm text-white/66">Use codes before treating an engine as rare, expensive, or hard to get.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Tier List</span>
          <h3 className="mt-3 text-lg font-bold text-white">Compare known picks</h3>
          <p className="mt-2 text-sm text-white/66">See role-first train and engine notes while exact rankings are still being checked.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Sources</span>
          <h3 className="mt-3 text-lg font-bold text-white">Review evidence</h3>
          <p className="mt-2 text-sm text-white/66">Separate official Roblox data, code sites, creator signals, and unverified claims.</p>
        </Link>
      </section>
    </main>
  );
}
