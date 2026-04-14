import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Aging-in-Place Home Modifications by Room | Live In Place',
  description:
    'Custom home modification solutions for every room. Bathroom, bedroom, living room, staircase, and entrance modifications in Northern Virginia.',
};

const rooms = [
  {
    title: 'Bathroom Modifications',
    href: '/bathroom-modifications',
    description: 'Grab bars, shower chairs, toilet assists, and transfer benches to prevent slips and falls in the most challenging room of the home.',
    solutions: ['Grips to get into the bathroom', 'Grab bars for standing and pivoting', 'Toilet and shower assists', 'Shower chairs', 'Transfer tub benches'],
  },
  {
    title: 'Bedroom Modifications',
    href: '/bedroom',
    description: 'Bed railings, furniture risers, and grab bars to create a safe and comfortable sleeping environment.',
    solutions: ['Bed railings', 'Furniture risers', 'Grab bars for dressing', 'Fall prevention tools', 'Lift chair referrals'],
  },
  {
    title: 'Living Room Modifications',
    href: '/living-room',
    description: 'Furniture enhancers and safety modifications to keep your loved one active and involved in family activities.',
    solutions: ['Furniture risers', 'Couch canes', 'Carpet or rug modifications', 'Lift chair referrals'],
  },
  {
    title: 'Staircase Solutions',
    href: '/staircase-solutions',
    description: 'Stairlifts and custom railing modifications for safe navigation between levels of the home.',
    solutions: ['Residential stairlifts', 'Custom railings', 'Reinforced railings', 'Safety bars'],
  },
  {
    title: 'Home Access',
    href: '/home-access',
    description: 'Exterior and interior ramps for safe entry and exit. Both temporary and permanent solutions available.',
    solutions: ['Exterior modular ramps', 'Portable ramps', 'Interior ramps', 'Entrance modifications'],
  },
];

export default function SolutionsByRoomPage() {
  return (
    <>
      <PageHero
        label="Solutions by Room"
        title="Aging-in-Place Home Modifications by Room"
        description="Live in Place is ready to give you back your independence and confidence by offering custom solutions for your entire home."
      />

      {/* Room Cards */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {rooms.map((room, i) => (
              <div
                key={room.title}
                className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-stone-100 ${
                  i % 2 === 0 ? '' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-4">
                      {room.title}
                    </h2>
                    <p className="text-lg text-text-medium leading-relaxed mb-6">
                      {room.description}
                    </p>
                    <Link
                      href={room.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Learn more
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark mb-3">Solutions include:</p>
                    <ul className="space-y-2">
                      {room.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-medium">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert CTA */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Need an Expert Opinion?
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Contact Live in Place today for a complete home assessment. We&apos;ll provide home modification recommendations that are unique to you or your loved one&apos;s situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
            >
              Schedule Your Assessment
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
