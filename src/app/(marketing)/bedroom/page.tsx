import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Bedroom Modifications for Elderly | Live In Place',
  description:
    'Bedroom safety modifications for seniors and those with mobility issues. Bed railings, furniture risers, grab bars, and fall prevention solutions in Northern Virginia.',
};

const solutions = [
  'Bed railings for repositioning and fall prevention',
  'Furniture risers for easier access',
  'Grab bars for stability when getting dressed',
  'Custom hand railings for added support',
  'Referrals for lift chairs and lift beds',
];

export default function BedroomPage() {
  return (
    <>
      <PageHero
        label="Room Solutions"
        title="Bedroom Modifications for the Elderly"
        description="Ensure the safety of your loved ones with bedroom modifications that minimize injury risks and increase comfort and independence."
      />

      {/* Importance */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Importance of Bedroom Modifications
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Bedroom modifications are important for older adults and those with physical impairments because safety solutions prevent accidents. They include helpful features like bed railings, furniture risers, and grab bars or custom hand railings for added stability when getting dressed.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Increase your loved one&apos;s safety and independence inside their home! When you eliminate hazards, the bedroom becomes a comfortable environment for everyone.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Simple Solutions That Make a Difference
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Bedroom safety for the elderly and physically impaired is critical for all homes. When it comes to modifying your loved one&apos;s space, simple solutions make a huge difference. Bed railings help people reposition themselves and lift themselves up. Furthermore, railings are fall prevention tools because they provide a safety barrier.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Security and comfort are the main reasons why people seek bedroom modifications. Provide 24/7 support with bed assistance devices, and know that your loved ones are safe! Increase their confidence and independence with the best features.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark text-center mb-8">
              Bedroom Safety Solutions
            </h2>
            <div className="space-y-3">
              {solutions.map((s) => (
                <div key={s} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-stone-100">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-dark font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let Us Help */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Let Live In Place Help You
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Let your loved ones enjoy all areas of the home by modifying their space. You don&apos;t need major renovations to create a safe and comfortable bedroom. Our simple solutions are easy to incorporate inside homes.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              If you&apos;re interested in other solutions, don&apos;t worry — we also offer referrals for lift chairs and beds. We&apos;re here to support your loved one&apos;s needs and make the home a secure environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
              >
                Schedule an Assessment
              </Link>
              <Link
                href="/solutions-by-room"
                className="inline-flex items-center justify-center rounded-full border-2 border-text-dark/10 px-8 py-4 text-base font-semibold text-text-dark hover:border-primary hover:text-primary transition-all"
              >
                View All Room Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
