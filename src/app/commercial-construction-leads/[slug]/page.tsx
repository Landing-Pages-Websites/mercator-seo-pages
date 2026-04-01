import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug, slugify } from "@/data/states";
import { categories, getCategoryBySlug, categoryGroups } from "@/data/categories";
import type { CategoryData } from "@/data/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import WaitlistForm from "@/components/WaitlistForm";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import CategoryGrid from "@/components/CategoryGrid";
import { getStateImage, getCategoryImage, getCategoryBodyImage, getCategoryImageAlt, bodyImages } from "@/data/images";

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
  const state = getStateBySlug(slug);
  if (state) return <StatePage state={state} />;
  const cat = getCategoryBySlug(slug);
  if (cat) return <CategoryPage cat={cat} />;
  notFound();
}

// ==================== STATE PAGE ====================
function StatePage({ state }: { state: NonNullable<ReturnType<typeof getStateBySlug>> }) {
  const isLive = state.isLive;
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getStateImage()} alt={`Construction development in ${state.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs variant="light" items={[
            { label: "Construction Leads", href: "/commercial-construction-leads/" },
            { label: state.name },
          ]} />
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
              : `Mercator.ai currently covers Texas and Florida with plans to expand. Join the waitlist to be notified when ${state.name} coverage launches.`}
          </p>
          <a href="https://meetings.hubspot.com/chase-book/demo" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition">
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      {/* What are leads - with side image */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">What Are Commercial Construction Leads?</h2>
              <p className="text-body leading-relaxed mb-4">
                Commercial construction leads are early indicators of upcoming private building projects. In {state.name}, these signals include land transactions, rezoning applications, permit filings, and project registrations that point to new commercial, industrial, and multi-family developments. Every private construction project generates a trail of public and semi-public data before a contractor is ever selected, and Mercator.ai is built to detect those signals.
              </p>
              <p className="text-body leading-relaxed mb-4">
                Traditional lead sources like bid boards and plan rooms only show projects after a contractor is already being selected. By the time a project appears on these platforms, the owner has spent months working with an architect, developing construction documents, and forming the relationships that will determine who wins the work. Mercator.ai changes that by using artificial intelligence to detect projects at the earliest stage, giving general contractors, subcontractors, and suppliers in {state.name} a competitive edge.
              </p>
              <p className="text-body leading-relaxed">
                Unlike public infrastructure projects that follow a formal bidding process, private commercial construction in {state.name} is awarded through relationships, reputation, and timing. The contractors who learn about a project first have the best opportunity to build trust with the owner and design team before the competition even knows the project exists.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.craneSkyline} alt="Construction cranes on a city skyline" className="w-full h-[320px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works - checklist with permits image */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-dark mb-4">How Mercator.ai Works in {state.name}</h2>
              <p className="text-body leading-relaxed mb-6">
                Mercator.ai is an AI-powered business development platform built for commercial construction. {isLive ? `In ${state.name}, Mercator.ai actively tracks:` : `When ${state.name} coverage launches, Mercator.ai will track the following signals to detect projects early:`}
              </p>
              <ul className="space-y-3">
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
              <p className="text-body leading-relaxed mt-6">
                Every signal is connected to actionable intelligence: who is behind the project, what is being built, how large the project is, and where it stands in the development pipeline. {isLive ? `${state.name} professionals` : "Contractors"} use this data to prioritize outreach, qualify opportunities, and build the relationships that lead to awarded work.
              </p>
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.permits} alt="Building permits and construction planning documents" className="w-full h-full object-cover min-h-[280px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Who uses - cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">Who Uses Mercator.ai in {state.name}?</h2>
          <p className="text-body leading-relaxed mb-6">Mercator.ai serves construction professionals across the entire project lifecycle. Whether you are pursuing ground-up commercial projects, tenant improvements, or industrial developments in {state.name}, the platform gives you the early intelligence to compete more effectively:</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "General Contractors", desc: `Identify and qualify private construction work in ${state.name} earlier. Discover projects at the land sale or rezoning stage and build relationships with owners and developers before the competition knows a project exists.` },
              { title: "Subcontractors", desc: `Gain upstream visibility into ${state.name} construction projects so you can build relationships with general contractors and owners that earn you a "last look" on pricing. Position your specialty trade early on projects where your expertise is a natural fit.` },
              { title: "Suppliers & Manufacturers", desc: `Get specified earlier on ${state.name} projects by knowing what is being built, who is designing it, and what materials will be required. Engage architects and engineers during the specification phase, when product decisions are being made.` },
            ].map((card) => (
              <div key={card.title} className="bg-surface rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-sm text-body">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll find when live */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.meeting} alt="Construction professionals reviewing project data" className="w-full h-[320px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-dark mb-4">What You&apos;ll Find on This Page When Live</h2>
              <p className="text-body leading-relaxed mb-4">
                {isLive
                  ? `${state.name} coverage is live. Book a demo to see active construction projects, stakeholder data, and real-time alerts for ${state.name} markets.`
                  : `When we launch ${state.name} coverage, this page will include a searchable feed of active commercial construction projects, stakeholder contact information, project timelines, and customizable alerts. You'll be able to filter by project type, location, stage, and value to find the opportunities that match your capabilities.`}
              </p>
              <p className="text-body leading-relaxed">
                {isLive
                  ? `Use Mercator.ai to track ${state.name} projects from the earliest land deal through construction start. Set up custom alerts for the project types, locations, and stakeholder roles that matter to your business.`
                  : `Mercator.ai is expanding coverage state by state, prioritizing the markets with the most active commercial construction. Join the waitlist below to be the first to know when ${state.name} goes live.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaitlistForm location={state.name} />
        </div>
      </section>

      {/* Cities */}
      {state.coveredCities.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">{state.name} Markets We Cover</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {state.coveredCities.map((city) => (
                <Link key={city} href={`/commercial-construction-leads/${state.slug}/${slugify(city)}/`} className="bg-surface border border-gray-100 hover:border-primary/30 rounded-xl px-4 py-3 text-sm font-medium text-dark hover:text-primary transition text-center">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category grid */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">Construction Leads by Project Type</h2>
          <CategoryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}

// ==================== CATEGORY PAGE ====================
function CategoryPage({ cat }: { cat: CategoryData }) {
  const relatedCategories = categories.filter((c) => c.parent === cat.parent && c.slug !== cat.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getCategoryImage(cat.slug)} alt={getCategoryImageAlt(cat.name)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs variant="light" items={[
            { label: "Construction Leads", href: "/commercial-construction-leads/" },
            { label: `${cat.name} Leads` },
          ]} />
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            {cat.parent} Category
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            {cat.name} Construction Leads
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mb-8">
            Mercator.ai tracks {cat.name.toLowerCase()} construction projects from the earliest planning signals through construction start. Get AI-powered visibility into upcoming {cat.name.toLowerCase()} projects before they go to bid.
          </p>
          <a href="https://meetings.hubspot.com/chase-book/demo" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition">
            Book a Live Demo
          </a>
        </div>
      </section>

      <StatsBar />

      {/* Description with body image */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">What Is {cat.name} Construction?</h2>
              <p className="text-body leading-relaxed mb-4">{cat.description}</p>
              <p className="text-body leading-relaxed">{cat.descriptionExtended}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getCategoryBodyImage(cat.slug)} alt={`${cat.name} construction project`} className="w-full h-[320px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional problem section - full width */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">The Problem with Traditional {cat.name} Lead Sources</h2>
          <p className="text-body leading-relaxed">{cat.traditionalProblem}</p>
        </div>
      </section>

      {/* Signals with permits image */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-dark mb-4">Signals Mercator.ai Tracks for {cat.name} Projects</h2>
              <p className="text-body leading-relaxed mb-6">
                Every {cat.name.toLowerCase()} project generates a series of public and semi-public signals before a contractor is ever selected. Mercator.ai&apos;s AI monitors these signals in real time:
              </p>
              <ul className="space-y-3">
                {cat.signals.map((signal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bodyImages.permits} alt="Building permits and project documentation" className="w-full h-full object-cover min-h-[280px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Why early - full width */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">Why Earlier Visibility Matters for {cat.name}</h2>
          <p className="text-body leading-relaxed">{cat.whyEarly}</p>
        </div>
      </section>

      {/* What you get with Mercator.ai */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">What You Get with Mercator.ai for {cat.name} Leads</h2>
          <p className="text-body leading-relaxed mb-6">
            Mercator.ai delivers more than a list of projects. Every {cat.name.toLowerCase()} construction lead in the platform includes the complete intelligence package you need to evaluate the opportunity and take action:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Project Details", desc: `Full project scope including building type, square footage, estimated value, and current development stage for every ${cat.name.toLowerCase()} project detected.` },
              { title: "Stakeholder Contacts", desc: "Names and contact information for property owners, developers, architects, engineers, and other project stakeholders so you can reach the right decision-maker." },
              { title: "Development Timeline", desc: `A complete history of each ${cat.name.toLowerCase()} project's development activity, from the initial land deal through current permit status, so you understand where the project stands.` },
              { title: "Real-Time Alerts", desc: `Customizable notifications when new ${cat.name.toLowerCase()} projects are detected in your market, when projects advance to the next stage, or when key stakeholder information changes.` },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-xl p-5">
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Planning to Construction Start pipeline */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-4">From Planning to Construction Start</h2>
          <p className="text-body leading-relaxed mb-8">
            Mercator.ai tracks {cat.name.toLowerCase()} projects through every stage of the pre-construction pipeline. Here is how a typical {cat.name.toLowerCase()} project moves from concept to construction, and where Mercator.ai gives you an advantage:
          </p>
          <div className="space-y-6">
            {cat.pipelineSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="text-body">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How contractors use - cards + aerial image */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">How Contractors Use Mercator.ai for {cat.name} Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "General Contractors", desc: `Track ${cat.name.toLowerCase()} projects from land acquisition through permit filing. Build relationships with owners and developers before the project goes to formal bid. Use Mercator.ai's stakeholder data to identify the decision-makers and design professionals involved, and time your outreach to coincide with the stage when contractor relationships are being formed.` },
              { title: "Subcontractors", desc: `Identify ${cat.name.toLowerCase()} projects that match your specialty trade and engage general contractors early in the process. Knowing about a project before the GC issues a sub-bid invitation gives you time to prepare competitive pricing and demonstrate relevant experience. Mercator.ai shows you the project scope, timeline, and design team so you can target the right opportunities.` },
              { title: "Suppliers & Manufacturers", desc: `Discover ${cat.name.toLowerCase()} projects during the design and specification phase when product selections are being made. Engage architects and engineers with product information and technical support while they are still evaluating options. Mercator.ai tracks the design team and project scope so you can align your outreach with the specification timeline.` },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-sm text-body">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bodyImages.siteAerial} alt={`Aerial view of ${cat.name.toLowerCase()} construction`} className="w-full h-[280px] object-cover" />
          </div>
        </div>
      </section>

      {/* Coverage + Waitlist */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">{cat.name} Construction Lead Coverage</h2>
              <p className="text-body leading-relaxed mb-4">                
                Mercator.ai is currently live in Texas and Florida, with plans to expand to additional states. As coverage grows, {cat.name.toLowerCase()} contractors in more markets will have access to the same AI-powered project intelligence that top firms in our launch markets already use.
              </p>
              <p className="text-body leading-relaxed mb-4">
                Join the waitlist to be notified when Mercator.ai launches {cat.name.toLowerCase()} construction lead coverage in your market. Early waitlist members will receive priority access and onboarding support.
              </p>
              <p className="text-body leading-relaxed">
                Every {cat.name.toLowerCase()} project in Mercator.ai includes the project location, development stage, stakeholder contacts, scope details, and a full timeline of development activity. You can set up custom alerts to be notified when new {cat.name.toLowerCase()} projects are detected, when existing projects advance to the next stage, or when stakeholder information changes.
              </p>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bodyImages.hardHat} alt="Construction professional at work site" className="w-full h-[220px] object-cover" />
              </div>
              <WaitlistForm location={`${cat.name} construction markets`} />
            </div>
          </div>
        </div>
      </section>

      {/* States grid */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6">{cat.name} Construction Leads by State</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {states.map((state) => (
              <Link key={state.slug} href={`/commercial-construction-leads/${state.slug}/`} className="bg-white border border-gray-100 hover:border-primary/30 rounded-lg px-2 py-1.5 text-xs font-medium text-dark hover:text-primary transition text-center">
                {state.abbr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related categories */}
      {relatedCategories.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Related {cat.parent} Categories</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCategories.map((rc) => (
                <Link key={rc.slug} href={`/commercial-construction-leads/${rc.slug}/`} className="bg-surface border border-gray-100 hover:border-primary/30 rounded-xl p-6 transition group">
                  <h3 className="font-bold text-dark group-hover:text-primary mb-2 transition">{rc.name} Leads</h3>
                  <p className="text-sm text-body line-clamp-2">{rc.description.substring(0, 120)}...</p>
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
