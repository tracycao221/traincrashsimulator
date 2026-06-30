import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { CopyButton } from "@/components/ui/CopyButton";

function getCurrentMonthYear() {
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date());
}

const codes = activeCodes;
const expiredCodes: typeof activeCodes = [];

const faq = [
  {
    q: "How do I redeem Train Crash Simulator codes?",
    a: "Open the Toolbox, choose Rewards, enter the code exactly, then redeem it in-game."
  },
  {
    q: "Why is my Train Crash Simulator code not working?",
    a: "The code may be expired, already redeemed, typed with the wrong casing, or waiting for a newer server. Rejoin and try copying it exactly."
  },
  {
    q: "What does IMCOOL give in Train Crash Simulator?",
    a: "Roblox Den listed IMCOOL for a Red and Black VIP BR Engine and showed 1 active code with 0 expired, with a last-checked stamp of 10:47PM on June 29, 2026, when we reviewed public sources on June 30, 2026. Current search also surfaced a live GameRant result dated June 25, 2026 for Train Crash Simulator codes, and a June 27, 2026 YouTube guide repeated new-codes phrasing for the game, but accessible public results still did not expose another confirmed code or any confirmed expired code, so we keep IMCOOL at Needs check until a same-day live in-game verification is done."
  },
  {
    q: "How often are new Train Crash Simulator codes checked?",
    a: "Codes should be checked every 6 to 12 hours while the game is fresh, then updated with a visible checked date."
  }
];

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()}) - IMCOOL, Rewards & Fixes`,
  description: `${siteConfig.gameName} codes for ${getCurrentMonthYear()}: IMCOOL reward notes, redemption steps, expired-code status, and code-not-working fixes with source labels.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()}) - IMCOOL`,
    description: `IMCOOL reward notes, redemption steps, expired-code status, and source confidence labels for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()}) - IMCOOL`,
    description: `IMCOOL reward notes, redemption steps, expired-code status, and source confidence labels for ${siteConfig.gameName}.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  const monthYear = getCurrentMonthYear();
  const faqSchema = buildFaqSchema();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Last reviewed: 2026-06-30"
        title={`${siteConfig.gameName} Codes (${monthYear})`}
        description="Copy the current best-known Train Crash Simulator code, check the reward, and use the source notes before you spend Coins or Gems. Public sources reviewed on June 30, 2026 still point to one reported active code and no confirmed expired codes: Roblox Den refreshed IMCOOL on June 29, 2026, and a June 27 YouTube guide reinforced the same new-codes search intent without revealing another code."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active Codes"
          title="Working codes to check first"
          copy="Codes are freshness-sensitive. Roblox Den still showed IMCOOL as the only directly reviewed public code, with 0 expired codes and a last-checked stamp of 10:47PM on June 29, 2026, during our June 30 review. Current search also surfaced a live GameRant result dated June 25, 2026 for Train Crash Simulator codes, and a June 27 YouTube guide repeated new-codes phrasing without exposing another code, so we still need same-day in-game confirmation before making a stronger claim."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {codes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/78">{code.reward}</p>
              <p className="mt-2 text-sm text-white/50">{code.addedDate}</p>
              <div className="mt-5">
                <CopyButton code={code.code} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Use the in-game Toolbox and Rewards flow reported by current code sources."
          />
          <ol className="mt-5 grid gap-3 text-white/72">
            <li>1. Open Train Crash Simulator from the official Roblox page.</li>
            <li>2. Open the Toolbox menu.</li>
            <li>3. Choose Rewards.</li>
            <li>4. Paste the code exactly, then redeem it.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Why these codes matter"
            title="Use your rewards well"
            copy="The reported IMCOOL reward is an engine, so check the tier-list notes and unlock planner before treating it as your main goal."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="button-primary" href="/tier-list">Check tier notes</Link>
            <Link className="button-secondary" href="/calculator">Open planner</Link>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expired Codes"
          title="Expired and removed codes"
          copy="No expired Train Crash Simulator codes are confirmed from current public sources. This section stays visible so old codes can be checked instead of silently disappearing."
        />
        <div className="mt-6 grid gap-4">
          {expiredCodes.map((code) => (
            <article key={code.code} className="content-card opacity-70">
              <h3 className="font-mono text-xl font-bold line-through">{code.code}</h3>
              <p className="mt-2 text-white/60">{code.reward}</p>
            </article>
          ))}
          {expiredCodes.length === 0 ? (
            <p className="content-card text-white/68">No confirmed expired codes from current public sources yet.</p>
          ) : null}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Code questions" />
        <div className="mt-6 grid gap-4">
          {faq.map((item) => (
            <details key={item.q} className="content-card">
              <summary className="cursor-pointer text-lg font-bold text-white">{item.q}</summary>
              <p className="mt-3 text-white/68">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next checks"
          title="More Train Crash Simulator pages"
          copy="Codes are only one part of the launch surface. Use these pages to check rewards, sources, and unlock planning."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/tier-list">Train picks to check</Link>
          <Link className="button-secondary" href="/trello">Trello and Discord status</Link>
          <Link className="button-secondary" href="/sources">Source list</Link>
        </div>
      </section>
    </main>
  );
}
