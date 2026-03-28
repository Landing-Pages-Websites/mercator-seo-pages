import type { Metadata } from "next";
import Link from "next/link";
import { states, getLiveStates, slugify } from "@/data/states";
import { categoryGroups } from "@/data/categories";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Commercial Construction Leads by State | Mercator.ai",
  description:
    "Find commercial construction leads with AI-powered project intelligence. Mercator.ai helps contractors discover private projects earlier. Live in Texas and Florida.",
};

export default function ConstructionLeadsHub() {
  const liveStates = getLiveStates();

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            AI-Powered Construction Intelligence
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 text-balance">
            Commercial Construction Leads
          </h1>
          <p className="text-lg md:text-xl text-body max-w-3xl mx-auto mb-8">
            Mercator.ai tracks over 110,000 active private construction projects. Find commercial construction leads in your state and city, powered by AI-driven project intelligence.
          </p>
          <a
            href="https://meetings.hubspot.com/chase-book/demo"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition"
          >
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      {/* Live Coverage Markets */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Live Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Markets We Cover
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Mercator.ai is live in Texas and Florida. Explore construction leads by city in our active markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {liveStates.map((state) => (
              <div key={state.slug} className="bg-white border border-gray-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-dark">{state.name}</h3>
                  <Link
                    href={`/commercial-construction-leads/${state.slug}/`}
                    className="text-primary text-sm font-medium hover:text-primary-dark transition"
                  >
                    View state page →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {state.coveredCities.map((city) => (
                    <Link
                      key={city}
                      href={`/commercial-construction-leads/${state.slug}/${slugify(city)}/`}
                      className="bg-surface hover:bg-primary/5 border border-gray-100 hover:border-primary/30 rounded-xl px-4 py-3 text-sm font-medium text-dark hover:text-primary transition text-center"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All States Grid */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
            Construction Leads by State
          </h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            Select your state to explore commercial construction leads and upcoming projects in your market.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/commercial-construction-leads/${state.slug}/`}
                className={`border rounded-xl px-4 py-3 text-sm font-medium transition text-center ${
                  state.isLive
                    ? "bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                    : "bg-white border-gray-100 hover:border-primary/30 text-dark hover:text-primary"
                }`}
              >
                {state.name} {state.isLive && "●"}
              </Link>
            ))}
          </div>
          <p className="text-center text-xs text-body/50 mt-4">● = Live coverage</p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
            Construction Leads by Project Type
          </h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            Explore leads by construction category. Each project type has unique signals that Mercator.ai tracks to give you earlier visibility.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {categoryGroups.map((group) => (
              <div key={group.name} className="bg-surface rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">{group.name}</h3>
                <ul className="space-y-3">
                  {group.categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/commercial-construction-leads/${cat.slug}/`}
                        className="flex items-center gap-2 text-body hover:text-primary text-sm font-medium transition group"
                      >
                        <svg className="w-4 h-4 text-primary/50 group-hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {cat.name} Construction Leads
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            How Mercator.ai Finds Construction Leads
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "AI Detects Early Signals",
                description: "Mercator.ai monitors land sales, rezonings, permit filings, and project registrations. Private projects are surfaced months before they hit a bid board."
              },
              {
                step: "02",
                title: "Actionable Intelligence",
                description: "Every project comes with stakeholder details, scope information, and suggested next steps. Know who is building, what they are building, and how to engage."
              },
              {
                step: "03",
                title: "Win More Work",
                description: "Real-time alerts notify you when projects change. Be the first call when a developer needs a contractor. Build relationships that lead to awarded work."
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
