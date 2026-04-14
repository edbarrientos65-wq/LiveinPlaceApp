import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';
import FAQ from '@/components/marketing/FAQ';

export const metadata: Metadata = {
  title: 'Mobility Ramps | Wheelchair Ramp Installation | Live In Place',
  description:
    'Custom wheelchair ramps and modular ramp systems for safe, step-free access. Exterior modular ramps, portable ramps, and interior ramp solutions in Northern Virginia.',
};

const rampTypes = [
  {
    title: 'Exterior Modular Ramps',
    description: 'Customized ramps with railings for use with canes, walkers, or wheelchairs.',
  },
  {
    title: 'Portable Ramps',
    description: 'Temporary, lightweight ramps for wheelchair use. Foldable and easy to store.',
  },
  {
    title: 'Interior Modular Ramps',
    description: 'Easily installed in garages, carports, or other interior spaces.',
  },
];

const considerations = [
  'Modular and portable ramps',
  'Step height and depth',
  'Walking or wheelchair usage',
  'Client\'s weight and strength',
  'Caregiver strength',
  'Length of ramp needed',
  'Railings and traction',
  'Ramp safety',
];

const faqItems = [
  {
    question: 'How quickly can you install a ramp in my home?',
    answer:
      'Installation can usually be within 48 hours of an evaluation. We recognize that there are situations where a loved one is coming home from a hospital or rehab facility and time is of the essence.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes! Live in Place offers a 1 year warranty on all parts and service.',
  },
  {
    question: 'What does a ramp cost?',
    answer:
      'Ramp costs vary based on the design and your personal needs. Live In Place ramps are an affordable option that allow you to live independently at home, especially when you consider the cost of moving to a more accessible home.',
  },
  {
    question: 'Why Live In Place?',
    answer:
      'Live In Place has Certified Aging-In-Place Specialists that will do an entire home assessment to ensure safety throughout the home. We can create a plan specific to your current and progressing needs including custom railings, grips, and grab bars to assist in using your new ramp safely.',
  },
];

export default function RampsPage() {
  return (
    <>
      <PageHero
        label="Safety Solutions"
        title="Mobility Ramps"
        description="Safety, independence, and renewed confidence. Custom wheelchair ramps and modular ramp systems for safe, step-free access to your home's entrances."
        ctaText="Schedule an Assessment"
        ctaHref="/contact"
      />

      {/* Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Safety, independence, and renewed confidence are the pillars of comfort that characterize every home we touch. At Live In Place, we understand that home is a haven, and every corner should be accessible to all — irrespective of mobility constraints.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Our mobility ramps are a practical solution to enhance accessibility within your loved one&apos;s home. Features like non-slip surfaces, adequate widths for easy maneuverability, and gentle inclines make our solutions the best.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Whether you require wheelchair ramp installation for more permanent needs or seek temporary solutions for rehabilitation, we&apos;re here to help. From the initial assessment to the installation, our team works diligently to ensure a smooth and stress-free experience.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Live in Place goes above and beyond other medical equipment companies by providing a medically based assessment of a patient and their home. This ensures that the ramp services you receive are tailored to you and your loved ones, addressing both long-term and short-term needs.
            </p>
          </div>
        </div>
      </section>

      {/* Ramp Types */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Types of Ramps
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {rampTypes.map((ramp) => (
              <div key={ramp.title} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16M4 20l16-8M4 20v-4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3">{ramp.title}</h3>
                <p className="text-text-medium leading-relaxed">{ramp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-8">
              What We Consider
            </h2>
            <p className="text-lg text-text-medium text-center leading-relaxed mb-8">
              With home ramp installations, we take all of these considerations into account when forming our recommendations.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {considerations.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-primary-light rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-serif text-2xl text-text-dark leading-relaxed mb-6">
              &ldquo;My dad needed a longer ramp with a low incline so that he could wheel himself up and down without risk. Live in Place had it installed within two days.&rdquo;
            </blockquote>
            <p className="font-semibold text-text-dark">— Erin</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Ramp Frequently Asked Questions
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
