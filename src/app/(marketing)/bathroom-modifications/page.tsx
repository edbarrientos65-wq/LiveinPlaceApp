import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Aging-in-Place Bathroom Modifications | Live In Place',
  description:
    'Bathroom safety modifications for seniors and those with physical impairments. Grab bars, shower chairs, toilet assists, and transfer benches in Northern Virginia.',
};

const solutions = [
  'Grips to get into the bathroom',
  'Grab bars for standing and pivoting',
  'Toilet and shower assists',
  'Shower chairs',
  'Transfer tub benches',
];

export default function BathroomModificationsPage() {
  return (
    <>
      <PageHero
        label="Room Solutions"
        title="Aging-in-Place Bathroom Modifications"
        description="Improve functionality and accessibility for your loved ones. Bathroom modifications reduce fall risks and other injuries. Create a better bathroom experience today!"
      />

      {/* Why Modify */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Why Should You Modify the Bathroom?
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Bathroom accessibility creates a safe and comfortable experience for your loved ones. Give you and your loved ones peace of mind as they use the bathroom. Don&apos;t worry about slips or falls when modifications help.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Aging-in-place bathroom modifications are often necessary for seniors. Grab bars support standing and pivoting. Shower chairs offer support for bathing, and grips guide people into the bathroom itself. Simple adjustments make a huge difference for those in need of assistance.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Creating a Trouble-Free Experience
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Bathrooms are challenging rooms for your loved ones because mobility devices increase the risk of injuries. Using wheelchairs and canes inside the room can cause slips and falls. Fortunately, modifications make a trouble-free experience.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              When enhancing your space, you don&apos;t need a full-scale remodel to adjust the room. Simple additions are safe and affordable, making them perfect for all types of households. Restore your loved one&apos;s confidence and increase their independence with bathroom aids.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
              Bathroom Safety Solutions
            </h2>
            <p className="text-lg text-text-medium text-center leading-relaxed mb-8">
              Our certified Aging-In-Place specialists give careful consideration to physical and neurological conditions before making bathroom recommendations:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Let Live in Place Help You!
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Our specialists give careful consideration to physical and neurological conditions before recommending features. We understand the importance of aging-in-place bathroom modifications, and we want to help you make the best decision.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              We offer continuous support as you accommodate your home for loved ones. Start your journey with Live in Place today!
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
