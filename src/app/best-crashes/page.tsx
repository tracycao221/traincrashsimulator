import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/seo-pages/SeoArticlePage";
import { canonicalFor, seoPageMap } from "@/data/seo-pages";

const page = seoPageMap.bestCrashes;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: canonicalFor(page.route) },
  openGraph: { title: page.title, description: page.description, url: canonicalFor(page.route), images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/opengraph-image"] }
};

export default function BestCrashesPage() {
  return <SeoArticlePage page={page} />;
}
