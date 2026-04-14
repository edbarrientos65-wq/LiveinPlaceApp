import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Medical Conditions Needing Home Modifications | Live In Place',
  description:
    "Home modifications for Parkinson's, MS, ALS, COPD, stroke, arthritis, and spine conditions. Expert aging-in-place solutions in Northern Virginia.",
};

const conditions = [
  {
    title: "Parkinson's Disease, MS and ALS",
    description:
      'Since these are progressive conditions, Live in Place can offer immediate, intermediate and long-term solutions as your needs change.',
    details:
      "Muscle tone and strength will change along with other neurological side effects. Eventually, even daily 'normal' tasks can become increasingly more challenging and take a lot of extra energy.",
    challenges: [
      'How do I get to different levels of my home safely?',
      'How can I continue to get off the toilet and use the shower safely?',
      'Will I be able to enter or exit the home safely?',
      'Will I have the energy to do the things I desire to do?',
      'Can I continue living in my home safely?',
    ],
    solutions: [
      'Mobility getting into, out of and around the home',
      'Energy conservation while doing daily activities',
      'Safety within the home',
    ],
  },
  {
    title: 'COPD and Cardiac Conditions',
    description:
      "After a cardiac or COPD episode, the most common question is: 'How can I get my life back to normal and preserve as much of my daily routine as possible?'",
    details:
      'Cardiac and respiratory issues can increase weakness and fatigue and the basic truth is when fatigue occurs, falls happen. This can impact the way someone interacts with their environment at home.',
    challenges: [],
    solutions: [
      'Energy conservation techniques',
      'Work simplification strategies',
      'Good body mechanics guidance',
      'Fall prevention measures',
    ],
  },
  {
    title: 'Stroke and Traumatic Brain Injury (TBI)',
    description:
      'Fall prevention and optimal rehabilitation are primary concerns after a brain-related incident. We support helping loved ones recuperate in the family home.',
    details: '',
    challenges: [
      'Difficulty breathing',
      'New cognitive challenges',
      'Paralysis or Paresis',
      'Safety concerns',
    ],
    solutions: [
      'Mobility and balance evaluation at entrances and within the home',
      'Safety factors for fall prevention at entryways, on stairs and in bathrooms',
      'Assist devices for greater independence and mobility',
    ],
  },
  {
    title: 'Arthritis',
    description:
      'Arthritis can be extremely painful and brings significant mobility and safety concerns since balance can be affected by tight joints.',
    details:
      'Tightness in joints can affect walking, standing up, sitting down, and general movement and daily activities.',
    challenges: [],
    solutions: [
      'Grab bars',
      'Shower seats or benches',
      'Raised toilet seats with rails',
      'Additional railings around the home',
      'Stability aid recommendations',
      'Education on joint protection and body mechanics',
    ],
  },
  {
    title: 'Spine Conditions',
    description:
      'Spine conditions often pose challenges in many areas of the home and many modifications may be needed to remain comfortable after back injuries.',
    details: '',
    challenges: [
      'Strength deficits affecting daily activities',
      'Pain causing mental fatigue',
      'Numbness affecting stability and safety',
      'Basic tasks becoming difficult and painful',
      'Spinal pain affecting sleep',
    ],
    solutions: [
      'Modifications for getting out of bed, using the bathroom, and kitchen',
      'Spinal education about staying independent at home',
      'Good body mechanics to prevent falls',
      'Support for balance',
      'Home arrangement to minimize lifting',
    ],
  },
];

export default function MedicalNeedsPage() {
  return (
    <>
      <PageHero
        label="Medical Needs"
        title="Home Modifications for Medical Conditions"
        description="Since 2007, Live in Place has served over 5,000 clients and their families, helping those with a wide range of medical conditions live safely at home."
      />

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Medical conditions and injuries bring life-altering physical and mental challenges you may not have anticipated. Combining these specific medical needs with normal aging issues creates multiple considerations that we can help you address to make home a safer place.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Many people are surprised to learn that those afflicted with significant neurological conditions can live their entire lives in the familiar, comforting surroundings of their own home.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Yet changes in muscle tone, balance deficits, and daily energy can greatly affect the ability to function in the home. Live in Place can improve the quality of life and help your loved one thrive again by improving the safety of their surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {conditions.map((condition, i) => (
              <div key={condition.title} className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-serif font-bold">
                    {i + 1}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">
                    {condition.title}
                  </h2>
                </div>
                <p className="text-lg text-text-medium leading-relaxed mb-4">
                  {condition.description}
                </p>
                {condition.details && (
                  <p className="text-text-medium leading-relaxed mb-6">
                    {condition.details}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-8">
                  {condition.challenges.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-text-dark mb-3">Challenges:</h3>
                      <ul className="space-y-2">
                        {condition.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <span className="text-text-medium">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-text-dark mb-3">How we help:</h3>
                    <ul className="space-y-2">
                      {condition.solutions.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-text-medium">{s}</span>
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

      {/* Closing */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Let Us Help Make Home Safe Again
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              Slips and falls complicate conditions, but we can prevent them from happening with custom home modifications to alleviate your safety and mobility concerns.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
