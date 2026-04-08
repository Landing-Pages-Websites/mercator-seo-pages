"use client";

import { useState, FormEvent } from "react";

export default function CTAEmailSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Get Notified When We Launch in Your Market
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Mercator.ai is expanding coverage state by state. Enter your email to get early access and be the first to know when your market goes live.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            You&apos;re on the list! We&apos;ll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              className="flex-1 px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40"
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
        )}
        {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
}
