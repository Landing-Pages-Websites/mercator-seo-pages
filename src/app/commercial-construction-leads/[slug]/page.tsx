import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug, slugify } from "@/data/states";
import { categories, getCategoryBySlug, categoryGroups } from "@/data/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import WaitlistForm from "@/components/WaitlistForm";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import CategoryGrid from "@/components/CategoryGrid";
import { getStateImage, getCategoryImage, getCategoryImageAlt } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const stateParams = states.map((s) => ({ slug: s.slug }));
  const catParams = categories.map((c) => ({ slug: c.slug }));
  return [...stateParams, ...catParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const state = getStateBySlug(slug);
  if (state) {
    return {
      title: `Commercial Construction Leads in ${state.name} | Mercator.ai`,
      description: `Find commercial construction leads in ${state.name}. Mercator.ai uses AI to surface private projects, land sales, rezonings, and permits across ${state.name} before your competitors.`,
    };
  }

  const cat = getCategoryBySlug(slug);
  if (cat) {
    return {
      title: `${cat.name} Construction Leads | Mercator.ai`,
      description: `Find ${cat.name.toLowerCase()} construction leads with Mercator.ai. AI-powered project intelligence for ${cat.name.toLowerCase()} projects including early signals, stakeholder data, and real-time alerts.`,
    };
  }

  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  // Check if it's a state
  const state = getStateBySlug(slug);
  if (state) return <StatePage state={state} />;

  // Check if it's a category
  const cat = getCategoryBySlug(slug);
  if (cat) return <CategoryPage cat={cat} />;

  notFound();
}

// ==================== STATE PAGE ====================
function StatePage({ state }: { state: NonNullable<ReturnType<typeof getStateBySlug>> }) {
  const isLive = state.isLive;
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getStateImage()} alt={`Construction development in ${state.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Construction Leads", href: "/commercial-construction-leads/" },
              { label: state.name },
            ]}
          />
          {isLive && (
            <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Live Coverage
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Commercial Construction Leads in {state.name}
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mb-8">
            {isLive
              ? `Mercator.ai provides live, AI-powered construction intelligence in ${state.name}. Track private projects, discover early-stage opportunities, and connect with decision-makers before your competitors know a project exists.`
              : `Mercator.ai is expanding to ${state.name}. Soon you'll be able to track private construction projects, discover early-stage opportunities, and receive real-time alerts for commercial construction leads across ${state.name}.`}
          </p>
          <a
            href="https://meetings.hubspot.com/chase-book/demo"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition"
          >
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">
              What Are Commercial Construction Leads?
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Commercial construction leads are early indicators of upcoming private building projects. In {state.name}, these signals include land transactions, rezoning applications, permit filings, and project registrations that point to new commercial, industrial, and multi-family developments.
            </p>
            <p className="text-body leading-relaxed mb-6">
              Traditional lead sources like bid boards and plan rooms only show projects after a contractor is already being selected. Mercator.ai changes that by using artificial intelligence to detect projects at the earliest stage, giving general contractors, subcontractors, and suppliers in {state.name} a competitive edge.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              How Mercator.ai Works in {state.name}
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Mercator.ai is an AI-powered business development platform built for commercial construction. {isLive ? `In ${state.name}, we actively track:` : `When we launch in ${state.name}, you'll get access to:`}
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Private land sales and title transfers that signal upcoming development",
                "Rezoning applications that indicate a change from residential or agricultural use to commercial",
                "Building permit filings for new construction, renovations, and tenant improvements",
                "Project stakeholder information including owners, developers, architects, and consultants",
                "Real-time alerts when project details change, so you can engage at the right moment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              Who Uses Mercator.ai in {state.name}?
            </h2>
            <p className="text-body leading-relaxed mb-4">
              Mercator.ai serves construction professionals across the entire project lifecycle:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
              {[
                {
                  title: "General Contractors",
                  desc: `Identify and qualify private work in ${state.name} earlier. Be more selective with the projects you pursue and build relationships with owners before the competition.`
                },
                {
                  title: "Subcontractors",
                  desc: `Gain upstream visibility into ${state.name} projects so you can build relationships that earn you a "last look" and position your specialty early.`
                },
                {
                  title: "Suppliers",
                  desc: `Get specified earlier on ${state.name} projects by knowing what is being built and who is designing it. Follow projects from land acquisition through construction.`
                }
              ].map((item) => (
                <div key={item.title} className="bg-surface rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-body">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              What You&apos;ll Find on This Page When Live
            </h2>
            <p className="text-body leading-relaxed mb-6">
              When {state.name} coverage is fully live, this page will include a live project feed showing active commercial construction opportunities, coverage maps showing which {state.name} markets we monitor, project alert configuration so you can receive notifications for specific project types and locations, and detailed project profiles with stakeholder contacts and project timelines.
            </p>
          </div>

          <div className="mt-12">
            <WaitlistForm location={state.name} />
          </div>
        </div>
      </section>

      {state.coveredCities.length > 0 && (
        <section className="bg-surface py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              {state.name} Markets We Cover
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {state.coveredCities.map((city) => (
                <Link
                  key={city}
                  href={`/commercial-construction-leads/${state.slug}/${slugify(city)}/`}
                  className="bg-white border border-gray-100 hover:border-primary/30 rounded-xl px-4 py-3 text-sm font-medium text-dark hover:text-primary transition text-center"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">
            Construction Leads by Project Type
          </h2>
          <CategoryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}

// ==================== CATEGORY PAGE ====================
import type { CategoryData } from "@/data/categories";

function CategoryPage({ cat }: { cat: CategoryData }) {
  const relatedCategories = categories.filter(
    (c) => c.parent === cat.parent && c.slug !== cat.slug
  );

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getCategoryImage(cat.slug)} alt={getCategoryImageAlt(cat.name)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Construction Leads", href: "/commercial-construction-leads/" },
              { label: `${cat.name} Leads` },
            ]}
          />
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            {cat.parent} Category
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            {cat.name} Construction Leads
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mb-8">
            Mercator.ai tracks {cat.name.toLowerCase()} construction projects from the earliest planning signals through construction start. Get AI-powered visibility into upcoming {cat.name.toLowerCase()} projects before they go to bid.
          </p>
          <a
            href="https://meetings.hubspot.com/chase-book/demo"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition"
          >
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">
              What Is {cat.name} Construction?
            </h2>
            <p className="text-body leading-relaxed mb-8">
              {cat.description}
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              Signals Mercator.ai Tracks for {cat.name} Projects
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Every {cat.name.toLowerCase()} project generates a series of public and semi-public signals before a contractor is ever selected. Mercator.ai&apos;s AI monitors these signals in real time:
            </p>
            <ul className="space-y-3 mb-8">
              {cat.signals.map((signal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-body">{signal}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              Why Earlier Visibility Matters for {cat.name}
            </h2>
            <p className="text-body leading-relaxed mb-8">
              {cat.whyEarly}
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              How Contractors Use Mercator.ai for {cat.name} Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
              {[
                {
                  title: "General Contractors",
                  desc: `Track ${cat.name.toLowerCase()} projects from land acquisition through permit filing. Build relationships with owners and developers before the project goes to formal bid.`
                },
                {
                  title: "Subcontractors",
                  desc: `Identify ${cat.name.toLowerCase()} projects early and connect with GCs during the estimating phase. Position your specialty work before the bid list is finalized.`
                },
                {
                  title: "Suppliers",
                  desc: `Get specified on ${cat.name.toLowerCase()} projects by engaging with architects and engineers during design. Follow projects from schematic design through construction.`
                }
              ].map((item) => (
                <div key={item.title} className="bg-surface rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-body">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-12">
              {cat.name} Construction Market Overview
            </h2>
            <p className="text-body leading-relaxed mb-6">
              The {cat.name.toLowerCase()} construction sector represents a significant portion of annual US construction spending. Market dynamics including population growth, infrastructure investment, technological change, and regulatory requirements drive consistent demand for new {cat.name.toLowerCase()} projects across virtually every metro area.
            </p>
            <p className="text-body leading-relaxed mb-8">
              Mercator.ai&apos;s coverage of {cat.name.toLowerCase()} construction leads spans all 50 states, with deep intelligence in Texas and Florida where we have the most comprehensive data. As we expand coverage, {cat.name.toLowerCase()} contractors in every market will have access to the same AI-powered project intelligence that top firms in our launch markets already use.
            </p>
          </div>

          <div className="mt-12">
            <WaitlistForm location={`${cat.name} construction markets`} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">
            {cat.name} Construction Leads by State
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/commercial-construction-leads/${state.slug}/`}
                className="bg-white border border-gray-100 hover:border-primary/30 rounded-lg px-2 py-1.5 text-xs font-medium text-dark hover:text-primary transition text-center"
              >
                {state.abbr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedCategories.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Related {cat.parent} Categories
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCategories.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/commercial-construction-leads/${rc.slug}/`}
                  className="bg-surface border border-gray-100 hover:border-primary/30 rounded-xl p-6 transition group"
                >
                  <h3 className="font-bold text-dark group-hover:text-primary mb-2 transition">
                    {rc.name} Leads
                  </h3>
                  <p className="text-sm text-body line-clamp-2">
                    {rc.description.substring(0, 120)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
