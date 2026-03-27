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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="https://www.mercator.ai" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L4 36h32L20 4zm0 8l10 20H10l10-20z" fill="#172C29"/>
          </svg>
          <span className="text-xl font-bold text-dark">Mercator.ai</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/commercial-construction-leads/" className="text-body hover:text-dark transition">All States</a>
          <a href="https://www.mercator.ai/pricing" className="text-body hover:text-dark transition">Pricing</a>
          <a href="https://www.mercator.ai/case-studies" className="text-body hover:text-dark transition">Case Studies</a>
        </nav>
        <a
          href="https://meetings.hubspot.com/chase-book/demo"
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 36h32L20 4zm0 8l10 20H10l10-20z" fill="white"/>
              </svg>
              <span className="text-lg font-bold text-white">Mercator.ai</span>
            </div>
            <p className="text-sm leading-relaxed">
              AI-powered business development for the construction industry. Find private projects earlier, track active opportunities, and get real-time alerts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.mercator.ai/pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="https://www.mercator.ai/case-studies" className="hover:text-white transition">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.mercator.ai/articles" className="hover:text-white transition">Articles</a></li>
              <li><a href="https://www.mercator.ai/podcast" className="hover:text-white transition">Podcast</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Coverage</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/commercial-construction-leads/" className="hover:text-white transition">All States</a></li>
              <li><a href="/commercial-construction-leads/texas/" className="hover:text-white transition">Texas</a></li>
              <li><a href="/commercial-construction-leads/florida/" className="hover:text-white transition">Florida</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Mercator.ai Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
