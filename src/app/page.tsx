import type { Metadata } from "next";
import Link from "next/link";
import { states } from "@/data/states";
import { categoryGroups } from "@/data/categories";

export const metadata: Metadata = {
  title: "Commercial Construction Leads | Mercator.ai",
  description:
    "Find commercial construction leads in every US state. AI-powered project intelligence from Mercator.ai helps contractors discover private projects earlier.",
};

export default function HomePage() {
  return (
    <>
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 text-balance">
            Commercial Construction Leads
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto mb-8">
            Find private construction projects before your competitors. Explore leads by state, city, or project type.
          </p>
          <Link
            href="/commercial-construction-leads/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition"
          >
            Browse Construction Leads
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Browse by State</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {states.map((s) => (
              <Link
                key={s.slug}
                href={`/commercial-construction-leads/${s.slug}/`}
                className="bg-surface hover:bg-primary/5 border border-gray-100 hover:border-primary/30 rounded-lg px-2 py-2 text-xs font-medium text-dark hover:text-primary transition text-center"
              >
                {s.abbr}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
