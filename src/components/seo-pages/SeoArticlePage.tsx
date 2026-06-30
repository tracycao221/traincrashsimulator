import Link from "next/link";
import type { SeoPage } from "@/data/seo-pages";
import { seoHubLinks } from "@/data/seo-pages";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export function SeoArticlePage({ page }: { page: SeoPage }) {
  const siblingLinks = seoHubLinks.filter((item) => item.href !== page.route).slice(0, 6);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: page.h1, href: page.route }]} />
      <FaqJsonLd items={page.faq} />
      <Breadcrumbs items={[{ label: page.h1, href: page.route }]} />

      <PageIntro eyebrow={page.eyebrow} title={page.h1} description={page.intro}>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide" className="button-secondary">Guide hub</Link>
          <Link href="/codes" className="button-secondary">Codes</Link>
          <Link href="/sources" className="button-secondary">Sources</Link>
        </div>
      </PageIntro>

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-4">
          {page.sections.map((section) => (
            <article key={section.heading} className="content-card">
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/68">
                  {section.bullets.map((item) => (
                    <li key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-2">{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <aside className="grid content-start gap-4">
          <section className="content-card">
            <span className="mini-label">Checklist</span>
            <h2 className="mt-3 text-xl font-bold text-white">Use this before your next run</h2>
            <ol className="mt-4 grid gap-2 text-sm leading-6 text-white/68">
              {page.checklist.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-md bg-white/[0.04] px-3 py-2">
                  <span className="font-bold text-[color:var(--accent)]">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="content-card">
            <span className="mini-label">Related pages</span>
            <div className="mt-4 grid gap-3">
              {page.related.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="row-link">
                  <span>
                    <strong>{link.label}</strong>
                    <small>{link.note}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="More Train Crash Simulator help"
          title="Continue with related SEO guides"
          copy="These pages are linked together so players can move from quick answers into deeper controls, walkthrough, crash, and strategy help."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siblingLinks.map((link) => (
            <Link key={link.href} href={link.href} className="content-card">
              <span className="mini-label">{link.intent}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title={`${page.h1} questions`} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {page.faq.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-sm leading-6 text-white/68">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
