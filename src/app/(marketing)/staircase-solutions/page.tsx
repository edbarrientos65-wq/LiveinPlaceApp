import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Stair Solutions for Seniors | Stair Railing Installation | Live In Place',
  description:
    'Residential stairlifts and railing modifications for safe stair navigation. Reduce fall risks for seniors and those with limited mobility in Northern Virginia.',
};

export default function StaircaseSolutionsPage() {
  return (
    <>
      <PageHero
        label="Room Solutions"
        title="Stair Solutions for Seniors"
        description="Residential stairlifts and railing modifications will help your loved ones navigate the home safely. Reduce the risk of falls and create safe passage."
      />

      {/* Make Your Home Safe */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Make Your Home Safe
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Allow your loved one to move around with ease with our stair solutions for seniors. Maintaining mobility is essential for your loved ones. However, physical limitations and medical conditions create obstacles for seniors and those with mobility issues.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Without assistance, residents may climb stairs and risk injuries or confine themselves to one area in the home. Neither situation is ideal. Luckily, stairlifts and custom railing help adults as they move throughout a house. The support reduces falls and gives seniors independence.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Take It One Step at a Time
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Home modifications are essential for aging in place. You want to create the best environment for your loved ones. In multi-level homes, stairs are a big concern for elderly residents and those with physical impairments.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Take the right steps by adding the proper stair solutions. With Live in Place, stairlift installation is quick and easy. Railing modifications are important for stairs too. It&apos;s all about recognizing your loved one&apos;s abilities and adding home improvements to create a better home experience.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Why Stair Solutions Are Worth It
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Stair solutions for seniors provide safety and comfort as your loved ones navigate the home. They&apos;re smart investments because they restore mobility and independence for people in need of assistance. Make your home accessible with custom railing or stairlifts. Don&apos;t worry about your loved ones falling or climbing stairs without help.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Our Staircase Solutions
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link href="/stairlifts" className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21l10-10M7 7v14M17 3v4m0 0h4m-4 0l-4 4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-text-dark mb-3">Stairlifts</h3>
              <p className="text-text-medium leading-relaxed">Regain access to every level of your home with safe, reliable stairlift installations.</p>
            </Link>
            <Link href="/grips-grab-bars-railings" className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M5 6v12M19 6v12M9 10v8M15 10v8" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-text-dark mb-3">Custom Railings</h3>
              <p className="text-text-medium leading-relaxed">Custom-made railings stained to match your home for safety and stability on stairs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Let Experts Help */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Let the Experts Help You
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Every home is different, and your loved ones need a special solution for stairs. Our experts evaluate homes and collaborate with clients to create the best solutions. Whether you need a reinforced railing, stairlifts, or safety bars, we have your back!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
            >
              Schedule an Assessment
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
