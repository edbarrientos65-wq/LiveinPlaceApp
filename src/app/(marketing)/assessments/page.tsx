import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Home Safety Assessments | Northern Virginia | Live In Place',
  description:
    'Expert home safety assessments in Northern Virginia. Three tiers: Basic ($100), Full ($175), and Full + OT Evaluation ($225). Customized to your medical needs.',
};

const benefits = [
  { title: 'Age In Place', icon: '🏠' },
  { title: 'Home Safety', icon: '🛡️' },
  { title: 'Fall Prevention', icon: '⚡' },
  { title: 'Increased Independence', icon: '💪' },
  { title: 'Renewed Confidence', icon: '✨' },
];

const testimonials = [
  {
    name: 'Lauren',
    text: 'Live in Place allowed me to safely transition from in-patient rehabilitation center to my home with ease and confidence. Extra railings on two staircases, grab bars and other adaptive items were promptly installed by Greg. A lift was later added. All was customized to my unique needs at a fair price. I don\'t usually write reviews and rarely award 5 stars but Live in Place deserves high praise.',
  },
  {
    name: 'Elizabeth',
    text: 'Getting an in-home assessment by an expert and then follow-up service and installation is convenient and reassuring. This is a unique and much-needed service for anyone with a disabled or elderly loved one at home. Suzi and Greg take the worry and guesswork out of determining what aids will make a difference in care and quality of life.',
  },
  {
    name: 'Paul',
    text: 'These folks are really good at what they do. We were in a situation where we needed the house evaluated and modified before my father came home from rehab. They came almost immediately and quickly assessed our needs and ordered the appropriate equipment. They are very easy to talk to, follow up with all of your questions and calls, and are thoughtful and competent.',
  },
  {
    name: 'Jim',
    text: 'After making a frantic call to Live In Place to help us install a stairlift and a ramp, Greg showed up within a few hours to help us determine a strategy that was best for us. He listened to our needs and then carefully plotted a plan that allowed our family to "live in place." His suggestions were so insightful and helpful.',
  },
  {
    name: 'DeAnna',
    text: 'I received less than a week of notice that my home needed to be modified for an elderly family member moving in. Greg with Live in Place was knowledgeable, professional and so helpful. Greg had my home ready within days. I am very pleased with the service and the product.',
  },
  {
    name: 'Gail',
    text: 'Our need for household modifications was urgent after my husband\'s hospitalization. All of the materials you installed were of top quality. We could not have imagined it could be done so quickly. The fun of "driving" the stair lift gave my husband\'s spirits a lift after a very hard time.',
  },
];

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        label="Expert Assessments"
        title="Expert Home Safety Assessments in Virginia"
        description="Live In Place provides home assessments in Northern Virginia based on you or your loved one's unique medical needs. Our team will make recommendations for home modifications around the property to ensure the lowest risk and maximize safety."
      />

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Benefits of a Home Assessment
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-stone-100">
                <div className="text-3xl mb-3">{b.icon}</div>
                <p className="font-semibold text-text-dark">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Tiers */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-4">
            Our Assessment Options
          </h2>
          <p className="text-lg text-text-medium text-center max-w-2xl mx-auto mb-12">
            Choose the assessment level that best fits your needs. All assessments are conducted by Certified Aging-in-Place Specialists.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <div className="text-center mb-6">
                <span className="inline-block rounded-full bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent mb-3">
                  Basic
                </span>
                <p className="font-serif text-4xl font-bold text-text-dark">$100</p>
                <p className="text-text-light mt-1">Investment</p>
              </div>
              <p className="text-text-medium leading-relaxed mb-6">
                This home safety evaluation is designed to focus on only 1 or 2 specific areas around the house when the rest of your home does not present a challenge.
              </p>
              <p className="font-semibold text-text-dark mb-3">Ideal if you can answer &quot;yes&quot; to:</p>
              <ul className="space-y-2 text-text-medium">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Is this a temporary living situation?
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Moving in an elderly family member temporarily?
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Just looking for a few grab bars?
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Difficulty getting in or out the front entrance?
                </li>
              </ul>
            </div>

            {/* Full */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary mb-3">
                  Full Home Safety
                </span>
                <p className="font-serif text-4xl font-bold text-text-dark">$175</p>
                <p className="text-text-light mt-1">Investment</p>
              </div>
              <p className="text-text-medium leading-relaxed mb-6">
                This assessment focuses on all areas of the home for safety. Our team will address immediate needs and goals as well as intermediate and long-term concerns.
              </p>
              <p className="font-semibold text-text-dark mb-3">Areas covered:</p>
              <ul className="space-y-2 text-text-medium">
                {['Bathrooms', 'Living Room', 'Bedroom', 'Staircases', 'Interior Entrances', 'Exterior Entrances'].map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full + OT */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <div className="text-center mb-6">
                <span className="inline-block rounded-full bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent mb-3">
                  Full + OT Evaluation
                </span>
                <p className="font-serif text-4xl font-bold text-text-dark">$225</p>
                <p className="text-text-light mt-1">Investment</p>
              </div>
              <p className="text-text-medium leading-relaxed mb-6">
                Everything from the Full Assessment PLUS a Medical Evaluation from a licensed Occupational Therapist who is also a Certified Live-in-Place Specialist.
              </p>
              <p className="font-semibold text-text-dark mb-3">Additional evaluations include:</p>
              <ul className="space-y-2 text-text-medium">
                {[
                  'Custom exercises & breathing techniques',
                  'Ergonomic body mechanics guidance',
                  'Safety with daily living activities',
                  'Cognitive status & sensory awareness',
                  'Advanced medical equipment referrals',
                  'Detailed report for contractors',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Who Benefits? Everyone!
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Home modifications can ease everyone&apos;s mind by making the home safer for your loved one and keeping them out of an assisted living or nursing home.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Seniors', 'Children of Seniors', 'Veterans', 'Parents of Children with Special Needs', 'Anyone with a Debilitating Condition', 'Caregivers & Family Members'].map((who) => (
                <div key={who} className="bg-primary-light rounded-xl px-5 py-4 text-primary font-medium">
                  {who}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-medium leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-text-dark">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Solutions as Unique as Your Loved One
          </h2>
          <p className="text-lg text-text-medium leading-relaxed mb-8">
            Our Certified Aging-In-Place Specialists take into account physical abilities, limitations, known medical conditions, and independence goals when making home modification recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
          >
            Schedule Your Assessment
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
