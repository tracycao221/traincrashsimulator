import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const guides = [
  {
    title: "Beginner route",
    label: "Start here",
    body: "Open the official Roblox page, redeem checked codes, then test one train or engine goal at a time.",
    href: "/codes"
  },
  {
    title: "How to redeem codes",
    label: "Rewards",
    body: "Use Toolbox, Rewards, enter the code, and redeem. Recheck the UI before launch because Roblox games often move menus.",
    href: "/codes"
  },
  {
    title: "Coins and Gems planning",
    label: "Currency",
    body: "Track Coins and Gems manually until exact mission payouts, earning rates, and engine prices are verified.",
    href: "/calculator"
  },
  {
    title: "Engine unlock choices",
    label: "Engines",
    body: "Compare known rewards and needs-check engines before spending currency on a train that may not fit your goal.",
    href: "/tier-list"
  },
  {
    title: "Crash scenario testing",
    label: "Scenarios",
    body: "Test one scenario at a time and record which train gives the crash outcome you want before calling it best.",
    href: "/wiki"
  },
  {
    title: "Engine transfer status",
    label: "Series",
    body: "Verify BrentAnimate railway-series transfer rules before buying an engine for another game.",
    href: "/sources"
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides - Beginner, Codes, Coins & Engines`,
  description: `Train Crash Simulator guides for beginners, codes, Coins, Gems, engine unlocks, crash scenarios, and BrentAnimate railway-series source checks.`,
  alternates: { canonical: `${siteConfig.domain}/guides` },
  openGraph: {
    title: `${siteConfig.gameName} Guides`,
    description: `Beginner, codes, currency, engines, crash scenarios, and source checks for Train Crash Simulator.`,
    url: `${siteConfig.domain}/guides`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guides`,
    description: `Beginner, codes, currency, engines, crash scenarios, and source checks for Train Crash Simulator.`,
    images: ["/opengraph-image"]
  }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for beginner help, code redemption, Coins and Gems planning, engine unlock decisions, crash-scenario testing, and source checks."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that answer real player questions"
          copy="These guides stay careful where data is incomplete. Exact engine rankings, mission rewards, and formulas need source-backed checks first."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.label}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
