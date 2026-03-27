export default function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Ready to Find Projects Before Your Competitors?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of contractors using Mercator.ai to discover private construction projects earlier, build relationships with decision-makers, and win more work.
        </p>
        <a
          href="https://meetings.hubspot.com/chase-book/demo"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
        >
          Book a Live Demo
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
