import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Meet the Owner | Greg Sieb | Live In Place',
  description:
    'Meet Greg Sieb, CAPS certified Aging-in-Place Specialist with 15+ years of experience. Licensed Virginia contractor serving 5,000+ families.',
};

const trainingCourses = [
  'Medical model for home modifications',
  'Home modifications for complex disabilities',
  'Geriatric shoulder complex and medical implications of balance deficits for fall prevention',
  'Understanding progressive neurological disorders',
  'MS: Focusing on rehabilitation',
];

export default function MeetTheOwnerPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Meet the Owner"
        description="Get to know the team behind Live In Place and their dedication to making homes safe for families across Northern Virginia."
      />

      {/* Greg Bio */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-2">
              Greg Sieb
            </h2>
            <p className="text-primary font-semibold mb-6">
              Certified Aging-in-Place Specialist &amp; Licensed Virginia Contractor
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Greg is a Certified Aging-in-Place Specialist (CAPS) as designated by the National Association of Home Builders (NAHB).
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-8">
              In addition to his CAPS certification, Greg has over 15 years of experience and has worked with over 5,000 families to make their homes safer.
            </p>

            <div className="bg-primary-light rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="font-semibold text-text-dark mb-4">Medical Training Courses Include:</h3>
              <ul className="space-y-3">
                {trainingCourses.map((course) => (
                  <li key={course} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-dark">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-text-medium leading-relaxed mb-6">
              As a licensed Virginia home improvement contractor, Greg and his team are able to do a therapeutic assessment, and then install home modifications such as stair lifts, ramps, grab bars, railings, bathroom safety solutions, and barrier-free designs.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Greg and his team listen to their clients and their family members, share knowledge and experience, and provide recommendations based on their unique needs and situations.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Greg, with his quick wit and fast drill bit, lives in Sterling with his wife Suz and their family dog Dakota.
            </p>
          </div>
        </div>
      </section>

      {/* Suz */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-6">
              About Suz
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              His wife Suz has nearly 40 years in occupational therapy and home care. She uses her medical experience, often serving as Live In Place&apos;s home assessor while Greg assists with the installations and modifications.
            </p>
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Suz, along with their other in-house OT, can handle in-home medical evaluations, home remodeling design and more!
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Together, they pay close attention to all of the important details so that their clients can live safely and independently as long as possible in their own home. They take care of their clients as they would want someone to care for their parents or loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-text-medium leading-relaxed mb-4">
              At Live In Place, we&apos;re dedicated to keeping families together and people independent because we believe that every individual deserves a sanctuary that caters to their wellbeing.
            </p>
            <p className="text-lg text-text-medium leading-relaxed">
              Contact us today, and take the first step toward securing a safe, accessible, and loving home environment.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
