import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const updateChecks = [
  {
    title: "Codes",
    cadence: "Every 6-12 hours",
    body: "Recheck IMCOOL and any new rewards against live sources before changing active or expired status."
  },
  {
    title: "Roblox page",
    cadence: "Daily",
    body: "Watch the official Roblox description, title, thumbnails, and availability for source-of-record changes."
  },
  {
    title: "Creator and video signals",
    cadence: "Weekly",
    body: "Use BrentAnimate and Train Crash Simulator videos as vocabulary and update signals, not single-source proof."
  },
  {
    title: "Tier-list evidence",
    cadence: "Weekly",
    body: "Upgrade role-first guidance only after engine stats, costs, or repeated player testing are verified."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates - Codes, Events & Source Changes`,
  description: `Track Train Crash Simulator updates, code freshness, Roblox page changes, source status, and tier-list evidence checks.`,
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Updates`,
    description: "Track code freshness, Roblox page changes, source status, and tier-list evidence checks.",
    url: `${siteConfig.domain}/updates`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates`,
    description: "Track code freshness, Roblox page changes, source status, and tier-list evidence checks.",
    images: ["/opengraph-image"]
  }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Update watch"
        title={`${siteConfig.gameName} Updates`}
        description="Track codes, Roblox page changes, source status, and tier-list evidence without treating unverified player reports as final."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Freshness plan"
          title="What needs checking next"
          copy="The game is fresh enough that codes and source status should be watched more often than static wiki notes."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {updateChecks.map((item) => (
            <article key={item.title} className="content-card">
              <span className="mini-label">{item.cadence}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/66">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h3 className="mt-3 text-lg font-bold text-white">Check rewards</h3>
          <p className="mt-2 text-sm text-white/66">Update active and expired lists after each code check.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Status</span>
          <h3 className="mt-3 text-lg font-bold text-white">Review official links</h3>
          <p className="mt-2 text-sm text-white/66">Record Trello, Discord, wiki, and creator-source changes here.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Sources</span>
          <h3 className="mt-3 text-lg font-bold text-white">Keep evidence clean</h3>
          <p className="mt-2 text-sm text-white/66">Separate official, code-site, creator-video, and community claims.</p>
        </Link>
      </section>
    </main>
  );
}
