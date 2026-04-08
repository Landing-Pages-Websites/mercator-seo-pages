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
import HeroEmailCapture from "@/components/HeroEmailCapture";
import CTAEmailSection from "@/components/CTAEmailSection";

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
              : `Mercator.ai currently covers Texas and Florida. Join the waitlist to be notified when ${cityName}, ${state.abbr} coverage launches.`}
          </p>
          <HeroEmailCapture />
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
                The {cityName} construction market is competitive. General contractors, subcontractors, and suppliers compete for private projects that are often awarded before they ever appear on a public bid board. Mercator.ai gives you a head start by detecting construction projects at their earliest stage, when a land deal closes, a rezoning application is filed, or a building permit is submitted.
              </p>
              <p className="text-body leading-relaxed mb-4">
                In {cityName}, commercial construction leads originate from land transactions, rezoning applications, building permit filings, and early-stage project registrations. Mercator.ai&apos;s AI monitors these signals across the {cityName} metro area and surfaces actionable intelligence so you can engage with project stakeholders before your competitors.
              </p>
              <p className="text-body leading-relaxed">
                Unlike bid boards that show projects after a contractor is being selected, Mercator.ai reveals private construction activity in {cityName} at the point of maximum opportunity. The earlier you learn about a project, the more time you have to build a relationship with the owner, developer, or design team that will determine who wins the work.
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
              <h2 className="text-2xl font-bold text-dark mb-4">
                What Mercator.ai Tracks in {cityName}
              </h2>
              <p className="text-body leading-relaxed mb-6">
                Mercator.ai monitors a comprehensive set of development signals across the {cityName} metro area. Each signal is connected to project stakeholder data, so you know who is behind every opportunity:
              </p>
              <ul className="space-y-4">
                {[
                  `Land sales and title transfers in the ${cityName} metro area that signal upcoming commercial, industrial, or multi-family development`,
                  `Rezoning applications and conditional use permits in ${cityName} and surrounding jurisdictions that confirm a project's type and scope`,
                  `Building permit filings for commercial, industrial, and multi-family projects that provide construction details and timelines`,
                  `Project stakeholder details including owners, developers, architects, and engineering consultants involved in ${cityName} projects`,
                  `Real-time updates when project scope, timeline, or stakeholders change, so you can engage at the right moment`
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

      {/* Who uses Mercator.ai - cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">Who Uses Mercator.ai in {cityName}?</h2>
          <p className="text-body leading-relaxed mb-6">Mercator.ai serves construction professionals at every stage of the project lifecycle in {cityName}:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "General Contractors", desc: `Discover private construction work in the ${cityName} area before it hits a bid board. Build relationships with developers and owners at the land deal or rezoning stage, when the project team is being formed and contractor selection is still open.` },
              { title: "Subcontractors", desc: `Get upstream visibility into ${cityName} construction projects and position your specialty trade early. Know about a project before your GC sends out sub-bid invitations, and use that lead time to prepare competitive pricing and demonstrate relevant experience.` },
              { title: "Suppliers & Manufacturers", desc: `Follow ${cityName} projects from land acquisition through design and construction. Engage architects and engineers during the specification phase when product decisions are being made, and build the relationships that lead to getting your products specified on the project.` },
            ].map((card) => (
              <div key={card.title} className="bg-surface rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-sm text-body">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of projects - full width image break */}
      <section className="bg-surface py-12 md:py-20">
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
                The {cityName} market spans commercial office buildings, healthcare facilities, retail centers, institutional projects, industrial developments, and multi-family housing at every scale. Mercator.ai categorizes each project by type so you can filter for work that matches your expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why earlier visibility - with meeting image */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                Why Earlier Visibility Matters in {cityName}
              </h2>
              <p className="text-body leading-relaxed mb-4">
                In a competitive market like {cityName}, the contractor who builds relationships with owners and developers first has a significant advantage. Mercator.ai clients typically report a 60% reduction in lead qualification time and a 3x increase in early-stage project discovery.
              </p>
              <p className="text-body leading-relaxed mb-4">
                By the time a project hits a bid board, the relationships that determine who wins the work have often already been formed. The general contractor, key subcontractors, and material suppliers frequently have an inside track based on early engagement with the owner and design team. Mercator.ai ensures you are part of those early conversations in {cityName}.
              </p>
              <p className="text-body leading-relaxed">
                Whether you are tracking private commercial projects, monitoring industrial development, or looking for multi-family opportunities in the {cityName} metro area, Mercator.ai gives you the intelligence to make informed decisions about where to invest your business development resources and which relationships to prioritize.
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
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaitlistForm location={location} />
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 md:py-20">
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
      <section className="bg-surface py-12 md:py-20">
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
                        {cat.name} Construction Leads →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAEmailSection />
    </>
  );
}
