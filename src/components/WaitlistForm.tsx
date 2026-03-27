"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm({ location }: { location: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // For now, just show success — backend integration TBD
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">You&apos;re on the list!</h3>
        <p className="text-body">We&apos;ll notify you when {location} coverage goes live.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8">
      <h3 className="text-xl font-bold text-dark mb-2">
        Get notified when we launch {location} coverage
      </h3>
      <p className="text-body text-sm mb-6">
        Be first to access AI-powered construction leads in {location}. Join the waitlist.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-dark transition whitespace-nowrap"
        >
          Join Waitlist
        </button>
      </div>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </form>
  );
}
