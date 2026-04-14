import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';
import FAQ from '@/components/marketing/FAQ';

export const metadata: Metadata = {
  title: 'Custom Grab Bars & Safety Railings for Home | Live In Place',
  description:
    'Custom grab bars, door grips, and railing modifications for home safety. All railings custom made and stained to match your home. Serving Northern Virginia.',
};

const productTypes = [
  {
    title: 'Door Grips',
    description: 'Grips at entrances can improve confidence and safety for your loved one as they move through doorways.',
  },
  {
    title: 'Grab Bars',
    description: 'Grab bar installations provide stability in bathrooms, hallways, bedrooms, and other critical areas throughout the home.',
  },
  {
    title: 'Railing Modifications',
    description: 'Specialty railings make stairs and steps less intimidating. All railings are custom made to fit your staircase and stained to match your home.',
  },
];

const faqItems = [
  {
    question: 'Are all of these smaller installations permanent?',
    answer: 'No, they are easily removable if needed.',
  },
  {
    question: 'What if you don\'t have the medical equipment I need?',
    answer: 'We can offer referrals or may even be able to order it for you!',
  },
  {
    question: 'How long does it take to install these smaller items?',
    answer: 'Most things like this can be installed in 30 minutes or less.',
  },
  {
    question: 'Are there warranties on these products?',
    answer: 'We offer warranties on our stairlifts, but not smaller items like grab bars.',
  },
  {
    question: 'Why Live In Place?',
    answer:
      'We will offer non-obligatory recommendations that provide various solutions to improve your safety, independence and confidence. You can choose exactly what you feel is the best fit for your needs and our team will do the installation!',
  },
];

export default function GrabBarsPage() {
  return (
    <>
      <PageHero
        label="Safety Solutions"
        title="Custom Grab Bars & Safety Railings"
        description="Strategically placed grab bars, door grips, and custom railings throughout your home to prevent slips and falls and support safe navigation."
        ctaText="Schedule an Assessment"
        ctaHref="/contact"
      />

      {/* Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Safety Bars
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Our team offers various mobility bars and home modifications based on the exact medical needs of the client, taking physical abilities, limitations, and known medical conditions into account when making recommendations.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Whether for the bathroom, the bedroom, or the hallway, our custom grab bars ensure your loved one can safely navigate their living space. Our solutions can make a world of difference, offering support and stability in critical areas of the home.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Custom Improvements Based on Abilities
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Together we create a modification plan that meets your current and future needs. Many of these small additions can make a huge difference, and your loved one can:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Confidently and safely access the entire home',
                'See improvements in quality of life',
                'Avoid isolation — not stuck in certain areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-text-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {productTypes.map((product) => (
              <div key={product.title} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M12 4v16" />
                    <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3">{product.title}</h3>
                <p className="text-text-medium leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Railing Modifications Detail */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              Railing Modifications
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              When your loved one can&apos;t get up and down stairs, they&apos;re cut off from entire areas of their home. Adding railings for the stairs can ensure both their safety and their comfort as they navigate their home. Help your loved one move freely and confidently throughout their space, restoring their access and independence.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              During your consultation, we&apos;ll provide you with possible solutions to meet the current and progressing health needs of your loved one. We&apos;ll also help you understand how adding safety bars, door grips, a second railing, or a reinforced railing can help.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              All railings are custom made to fit your staircase and are stained to match your home! Invest in the security and independence of your loved one today.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Grab Bar Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
