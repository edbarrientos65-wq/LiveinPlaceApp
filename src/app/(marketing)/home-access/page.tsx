import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Home Access Solutions for Elderly | Home Ramp Installation | Live In Place',
  description:
    'Home access ramps and entrance modifications for seniors and those with limited mobility. Modular and portable ramps for safe entry and exit in Northern Virginia.',
};

export default function HomeAccessPage() {
  return (
    <>
      <PageHero
        label="Room Solutions"
        title="Home Access Solutions for the Elderly"
        description="Eliminate obstacles and make accessing the home easy for your loved ones. Home access solutions are essential features for accessible spaces."
      />

      {/* Make Life Easier */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Make Life Easier With Ramps
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              The right home accessibility solutions make life easier for people with limited mobility. Wheelchair users can access their homes without problems. Furthermore, customized ramps assist walker, cane, and crutch users as well.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Don&apos;t let doorways or steep entrances become a trouble spot. Instead, install ramps to assist your loved ones. Boost confidence and independence with an accessibility ramp from Live in Place.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              The Convenient and Helpful Solution
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Not only are ramps helpful for your loved ones, but they also support caregivers. Assist people in and out of the home easily with a ramp. Transport equipment and furniture inside your home without tripping over stairs. You&apos;ll save time and effort with access ramps for the home!
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Temporary or Long-Term Assistance
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              The best thing about access ramps is that they&apos;re temporary or long-term features for homes. Portable ramps fold, and you can keep them in storage areas. Customized modular ramps will stay in place and become permanent features in homes.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Both solutions accommodate your loved one&apos;s needs while also improving your space. Simple installation increases accessibility and mobility for seniors and those in need of support.
            </p>
          </div>
        </div>
      </section>

      {/* Ramp Options */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Ramp Options
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="font-serif text-xl font-bold text-text-dark mb-3">Modular Ramps</h3>
              <p className="text-text-medium leading-relaxed mb-4">
                Permanent customized ramps with railings, designed for long-term use. Ideal for wheelchair, walker, and cane users.
              </p>
              <Link href="/ramps" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                Learn more about ramps
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="font-serif text-xl font-bold text-text-dark mb-3">Portable Ramps</h3>
              <p className="text-text-medium leading-relaxed mb-4">
                Temporary, lightweight ramps that fold for easy storage. Perfect for short-term rehabilitation needs.
              </p>
              <Link href="/ramps" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                Learn more about ramps
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              How Live in Place Can Help
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              We provide a medical-based assessment of the patient and home to ensure they receive the right ramp. We address long-term and short-term needs before installation. Make aging in place easier with access ramps that will improve your loved one&apos;s quality of life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
