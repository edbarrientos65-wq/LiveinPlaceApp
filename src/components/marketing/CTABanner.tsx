import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Make Home Safe?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Take the first step toward a safer, more accessible home for your loved one.
          Contact us today for an expert assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-warm-white transition-all"
          >
            Schedule an Assessment
          </Link>
          <a
            href="tel:+1-703-4330380"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (703) 433-0380
          </a>
        </div>
      </div>
    </section>
  );
}
