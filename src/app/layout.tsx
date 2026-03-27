import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commercial Construction Leads | Mercator.ai",
  description:
    "AI-powered commercial construction leads. Find private projects before a contractor is selected with Mercator.ai.",
  openGraph: {
    title: "Commercial Construction Leads | Mercator.ai",
    description:
      "AI-powered commercial construction leads. Find private projects before a contractor is selected with Mercator.ai.",
    url: "https://www.mercator.ai",
    siteName: "Mercator.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="https://www.mercator.ai" className="flex-shrink-0 mr-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mercator-logo-white.svg"
            alt="Mercator.ai"
            width={152}
            height={40}
            className="h-10 w-auto"
          />
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center justify-center gap-5 text-[13px] flex-1 whitespace-nowrap">
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/80 hover:text-white transition">
              Service Areas
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="bg-dark-alt border border-white/10 rounded-lg shadow-xl py-2 min-w-[160px]">
                <a href="https://www.mercator.ai/texas-construction-coverage" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition">Texas</a>
                <a href="https://www.mercator.ai/florida-construction-coverage" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition">Florida</a>
              </div>
            </div>
          </div>
          <a href="https://www.mercator.ai/articles" className="text-white/80 hover:text-white transition">Articles</a>
          <a href="https://www.mercator.ai/pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/80 hover:text-white transition">
              Free Permit App
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="bg-dark-alt border border-white/10 rounded-lg shadow-xl py-2 min-w-[160px]">
                <a href="https://www.mercator.ai/mercator-ai-free-permits-app-texas" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition">Texas</a>
                <a href="https://www.mercator.ai/free-florida-permits-app" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition">Florida</a>
              </div>
            </div>
          </div>
          <a href="https://www.mercator.ai/podcast" className="text-white/80 hover:text-white transition">Podcast</a>
          <a href="https://www.mercator.ai/case-studies" className="text-white/80 hover:text-white transition">Case Studies</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <a href="https://app.mercator.ai/login" className="hidden lg:block text-[13px] text-white/80 hover:text-white transition font-medium">
            Log in
          </a>
          <a
            href="https://meetings.hubspot.com/chase-book/demo"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:brightness-110 transition whitespace-nowrap"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white/60 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="https://www.mercator.ai" className="inline-block mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mercator-logo-white.svg"
                alt="Mercator.ai"
                width={152}
                height={40}
                className="h-9 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed">
              Mercator.ai is AI-powered business development for the construction industry that drives strategic business development with real-time data.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.mercator.ai/pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.mercator.ai/articles" className="hover:text-white transition">Articles</a></li>
              <li><a href="https://www.mercator.ai/case-studies" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="https://www.mercator.ai/podcast" className="hover:text-white transition">Future of Construction Podcast</a></li>
              <li><a href="https://www.mercator.ai/mercator-ai-free-permits-app-texas" className="hover:text-white transition">Mercator.ai Free Permits App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.mercator.ai/contact-us" className="hover:text-white transition">Contact us</a></li>
              <li><a href="https://secure.collage.co/jobs/mercatorai" className="hover:text-white transition">Careers</a></li>
              <li><a href="https://www.mercator.ai/in-the-news" className="hover:text-white transition">News</a></li>
              <li><a href="https://www.mercator.ai/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center">
          Copyright {new Date().getFullYear()} © Mercator.ai Inc.
        </div>
      </div>
    </footer>
  );
}
