import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Aging-in-Place Living Room Modifications | Live In Place',
  description:
    'Living room safety modifications for seniors. Furniture risers, couch canes, rug modifications, and more to keep your loved ones active and independent.',
};

const solutions = [
  'Furniture leg risers with non-slip grip pads',
  'Couch canes for balance when sitting or standing',
  'Carpet and rug modifications to remove fall hazards',
  'Referrals for lift chairs',
];

export default function LivingRoomPage() {
  return (
    <>
      <PageHero
        label="Room Solutions"
        title="Aging-in-Place Living Room Modifications"
        description="Create an accessible home with living room modifications. The supportive features increase independence and safety. Make the living room a comfortable space for everyone!"
      />

      {/* Why Modify */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Why Do You Need Living Room Modifications?
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Living room furniture modifications for elderly residents and people with physical impairments are must-have features inside the home. They&apos;re convenient, prevent accidents, and support mobility. Without modifications, your loved one may confine themselves to one area of the home.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Make the living room a space for everyone, including your aging loved one! Modifications are easy to install, and you&apos;ll instantly see their benefits. For instance, furniture leg risers elevate seating with a non-slip grip pad, allowing your loved ones to sit with ease.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Living Room Enhancers Are Worth It
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Difficulty rising from furniture is an obstacle that seniors and physically impaired people encounter. Sitting too low may cause discomfort and make rising from furniture a pain. However, living room enhancers eliminate trouble! Couch canes provide balance as people sit or stand, rug modifications remove fall hazards, and leg risers offer optimal support.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark text-center mb-8">
              Living Room Safety Solutions
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

      {/* Keep Active */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Keep Your Loved Ones Active and Independent
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              At times, people with mobility issues feel stuck. Without support devices, navigating the home is challenging. Elderly residents and those with physical impairments fear slips and falls, so they avoid excess movement. This leads to decreased activity and independence.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              However, you can enhance their overall well-being with aging-in-place living room modifications. Furniture enhancers provide easy access to seating, increasing your loved one&apos;s mobility. They can utilize every room inside their home with safety solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Contact the Experts
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Our certified aging-in-place specialists prioritize every room inside the home. Our goal is to accommodate your loved ones and make their space accessible. When it&apos;s time to modify your loved one&apos;s home, let Live In Place help!
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
