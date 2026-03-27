import Link from "next/link";

export default function StatsBar() {
  return (
    <div className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">110,000+</div>
            <div className="text-sm text-white/60">Active Projects Tracked</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">60%</div>
            <div className="text-sm text-white/60">Faster Lead Qualification</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">3x</div>
            <div className="text-sm text-white/60">More Leads Generated</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.6/5</div>
            <div className="text-sm text-white/60">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
