import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug, getAllCities, getNearbyCities, slugify } from "@/data/states";
import { categoryGroups } from "@/data/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCityImage, getCityBodyImage, getCityImageAlt, bodyImages } from "@/data/images";
import WaitlistForm from "@/components/WaitlistForm";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((c) => ({
    slug: c.stateSlug,
    city: c.citySlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  const cityName = state.coveredCities.find((c) => slugify(c) === citySlug);
  if (!cityName) return {};
  return {
    title: `Commercial Construction Leads in ${cityName}, ${state.name} | Mercator.ai`,
    description: `Find commercial construction leads in ${cityName}, ${state.name}. Mercator.ai uses AI to track private projects, land sales, and permits in ${cityName} before they go to bid.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();
  const cityName = state.coveredCities.find((c) => slugify(c) === citySlug);
  if (!cityName) notFound();

  const nearbyCities = getNearbyCities(stateSlug, citySlug);
  const isLive = state.isLive;
  const location = `${cityName}, ${state.abbr}`;

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getCityImage(citySlug)} alt={getCityImageAlt(cityName)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs variant="light" items={[
            { label: "Construction Leads", href: "/commercial-construction-leads/" },
            { label: state.name, href: `/commercial-construction-leads/${state.slug}/` },
            { label: cityName },
          ]} />
          {isLive && (
            <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Live Coverage
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Commercial Construction Leads in {cityName}, {state.name}
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mb-8">
            {isLive
              ? `Mercator.ai is actively tracking private construction projects in the ${cityName} metro area. Get AI-powered visibility into commercial, industrial, and multi-family projects before they go to bid.`
              : `Mercator.ai is expanding to ${cityName}, ${state.abbr}. Sign up to get notified when we launch coverage for commercial construction leads in ${cityName} and the surrounding ${state.name} market.`}
          </p>
          <a href="https://meetings.hubspot.com/chase-book/demo" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition">
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      {/* Intro with side image */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                Finding Construction Leads in {cityName}
              </h2>
              <p className="text-body leading-relaxed mb-4">
                The {cityName} construction market is competitive. General contractors, subcontractors, and suppliers compete for private projects that are often awarded before they ever appear on a public bid board. Mercator.ai gives you a head start by detecting construction projects at their earliest stage.
              </p>
              <p className="text-body leading-relaxed">
                In {cityName}, commercial construction leads originate from land transactions, rezoning applications, building permit filings, and early-stage project registrations. Mercator.ai&apos;s AI monitors these signals across the {cityName} metro area and surfaces actionable intelligence so you can engage with project stakeholders before your competitors.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getCityBodyImage(citySlug)} alt={`Construction activity in ${cityName}`} className="w-full h-[320px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What we track - with icon image */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-dark mb-6">
                What Mercator.ai Tracks in {cityName}
              </h2>
              <ul className="space-y-4">
                {[
                  `Land sales and title transfers in the ${cityName} metro area`,
                  `Rezoning applications and conditional use permits in ${cityName} and surrounding jurisdictions`,
                  `Building permit filings for commercial, industrial, and multi-family projects`,
                  `Project stakeholder details including owners, developers, architects, and engineering consultants`,
                  `Real-time updates when project scope, timeline, or stakeholders change`
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.permits} alt="Building permits and construction documents" className="w-full h-full object-cover min-h-[280px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of projects - full width image break */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.siteAerial} alt={`Aerial view of construction development in ${cityName}`} className="w-full h-[320px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Types of Projects in {cityName}
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Mercator.ai tracks every type of commercial construction project in the {cityName} area. Whether you specialize in healthcare facilities, data centers, retail buildouts, multi-family housing, or industrial warehousing, our platform surfaces projects that match your capabilities and market focus.
              </p>
              <p className="text-body leading-relaxed">
                The {cityName} market spans commercial office buildings, healthcare facilities, retail centers, institutional projects, industrial developments, and multi-family housing at every scale from tenant improvements to ground-up high-rise construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why earlier visibility - with meeting image */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                Why Earlier Visibility Matters in {cityName}
              </h2>
              <p className="text-body leading-relaxed mb-4">
                In a competitive market like {cityName}, the contractor who builds relationships with owners and developers first has a significant advantage. Mercator.ai customers report finding projects 60% faster and generating 3x more qualified leads than traditional prospecting methods.
              </p>
              <p className="text-body leading-relaxed">
                By the time a project hits a bid board, the relationships that determine who wins the work have often already been formed. Mercator.ai ensures you are part of those early conversations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.meeting} alt="Construction professionals discussing project opportunities" className="w-full h-[320px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaitlistForm location={location} />
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-surface py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              More {state.name} Markets
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.citySlug}
                  href={`/commercial-construction-leads/${c.stateSlug}/${c.citySlug}/`}
                  className="bg-white border border-gray-100 hover:border-primary/30 rounded-xl px-4 py-3 text-sm font-medium text-dark hover:text-primary transition text-center"
                >
                  {c.cityName}
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={`/commercial-construction-leads/${state.slug}/`} className="text-primary hover:text-primary-dark text-sm font-semibold transition">
                ← All {state.name} construction leads
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Category links */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">
            Construction Leads by Project Type
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categoryGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-lg font-bold text-dark mb-3">{group.name}</h3>
                <ul className="space-y-2">
                  {group.categories.slice(0, 4).map((cat) => (
                    <li key={cat.slug}>
                      <Link href={`/commercial-construction-leads/${cat.slug}/`} className="text-primary hover:text-primary-dark text-sm font-medium transition">
                        {cat.name} Leads →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
