"use client";

import { useState, FormEvent } from "react";

export default function HeroEmailCapture() {
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

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You&apos;re on the list! We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
      <input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(""); }}
        className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition whitespace-nowrap"
      >
        Get Early Access
      </button>
      {error && <p className="text-red-300 text-xs sm:absolute sm:mt-14">{error}</p>}
    </form>
  );
}
