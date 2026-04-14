import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';
import FAQ from '@/components/marketing/FAQ';

export const metadata: Metadata = {
  title: 'Mobility Stairlifts | Stairlift Services | Live In Place',
  description:
    'Expert stairlift installation in Northern Virginia. Our Certified Aging-In-Place specialists have installed hundreds of residential stairlifts. 48-hour installation available.',
};

const faqItems = [
  {
    question: 'How quickly can you install a stairlift in my home?',
    answer:
      'Installation can usually be within 48 hours of an evaluation. We recognize that there are situations where a loved one is coming home from a hospital or rehab facility and time is of the essence.',
  },
  {
    question: 'Is there a warranty?',
    answer:
      'Yes! Live in Place offers a 2 year warranty on parts and a 1 year warranty on service.',
  },
  {
    question: 'Will a stairlift damage my home?',
    answer:
      'Stairlifts are installed directly into the staircase and do not damage walls. We can also uninstall stairlifts when they are no longer needed. All stairlifts can be folded while not in use to ensure access to the staircase for other residents.',
  },
  {
    question: 'What if there is a power outage?',
    answer:
      'All our stairlifts operate on long-term batteries and automatically charge. This ensures they are always ready, so a power outage will not affect your safety and mobility!',
  },
  {
    question: 'What does a stairlift cost?',
    answer:
      'Stairlift costs vary based on the design of the staircase and your personal needs. Live In Place stairlifts are an affordable option that allow you to live independently at home, especially when you consider the cost of moving to a more accessible home.',
  },
  {
    question: 'Why Live In Place?',
    answer:
      'Live In Place has Certified Aging-In-Place Specialists that will do an entire home assessment to ensure safety throughout the home. We can create a plan specific to your current and progressing needs including custom railings, grips, and grab bars to assist in using your new stairlift safely.',
  },
];

export default function StairliftsPage() {
  return (
    <>
      <PageHero
        label="Safety Solutions"
        title="Mobility Stairlifts"
        description="Regain access to every level of your home with safe, reliable stairlift installations for straight and curved staircases."
        ctaText="Schedule an Assessment"
        ctaHref="/contact"
      />

      {/* Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              At Live In Place, we believe that navigating your home should never be a source of distress for your loved ones. Unfortunately, facing reduced mobility can be frustrating and dangerous in a multi-level home. Luckily, mobility stairlifts can make your home accessible and Make Home Safe!
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Our Certified Aging-In-Place specialists have installed hundreds of residential stairlifts and can create stairway solutions to meet current and progressing needs. Whether this is an immediate need or a preventative one, we will work with you to ensure your loved one can maintain their stair mobility and live in their home safely.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Installing a stairlift is not just about overcoming the physical barriers of a multi-level home; it&apos;s about rekindling the joy and independence that come with effortless movement. Our stairlift services can restore freedom, allowing your loved one to navigate their home with ease and confidence.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Live in Place is able to go above and beyond regular stairlift companies to medically assess the whole home to ensure integrated solutions for safety and mobility throughout the entire home. We believe that everyone deserves to have a comfortable, safe, and accessible living environment.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Don&apos;t let mobility challenges limit your loved one&apos;s ability to fully live their life. Choose Live In Place for top-notch services and comprehensive accessibility solutions. Contact us today about our stairlift services to provide your loved one the comfort and safety they need.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Stairlift Frequently Asked Questions
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
