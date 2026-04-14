import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'In Home Care Resources | Live In Place',
  description:
    'Helpful resources for aging in place, home care, and senior services in Virginia. Area agencies on aging, podcasts, condition-specific information, and more.',
};

const generalResources = [
  {
    title: 'Fairfax Senior Navigator',
    url: 'https://fairfax.seniornavigator.org/',
    description: 'Your trusted guide to healthy aging and senior living in Virginia.',
  },
  {
    title: 'Leading Age Virginia',
    url: 'https://leadingagevirginia.org/',
    description: 'Information for the full continuum of elder care services and support in Virginia.',
  },
  {
    title: 'Positive Aging Sourcebook',
    url: 'https://www.retirementlivingsourcebook.com/united-states/sterling/aging-in-place/live-in-place',
    description: 'The leading resource for senior housing and positive aging in place.',
  },
];

const agencyResources = [
  { title: 'Fairfax County Family Services', url: 'https://www.fairfaxcounty.gov/familyservices/' },
  { title: 'City of Alexandria Aging Services', url: 'https://www.alexandriava.gov/Aging' },
  { title: 'Virginia Office for Aging Services', url: 'https://www.vda.virginia.gov/index.htm' },
  { title: 'Prince William County Area Agency on Aging', url: 'https://www.pwcva.gov/department/area-agency-aging' },
  { title: 'Loudoun County Caregiver Training', url: 'https://www.loudoun.gov/2470/Caregiver-Training-Educational-Seminars-' },
  { title: 'Virginia Medical Assistance Programs', url: 'https://www.dss.virginia.gov/benefit/medical_assistance/' },
];

const podcastResources = [
  { title: 'Aging Matters Radio', url: 'https://www.agingmattersonline.com/radio-show' },
  { title: 'The Senior Zone', url: 'http://www.theseniorzone.com/radio-show/' },
  { title: 'Move Or Improve Podcast', url: 'https://podcasts.apple.com/us/podcast/move-or-improve-with-debbie/id1413272305' },
  { title: 'Fairfax County Caregiver Videos', url: 'https://www.youtube.com/playlist?list=PLE2AE183051380F82' },
];

const conditionResources = [
  { title: 'Fall Prevention (Caring.com)', url: 'https://www.caring.com/caregivers/fall-prevention/' },
  { title: "Parkinson's Foundation", url: 'https://www.parkinson.org/living-with-parkinsons' },
  { title: 'Mesothelioma Information', url: 'https://www.asbestos.com/mesothelioma/' },
  { title: 'National MS Society', url: 'https://www.nationalmssociety.org/What-is-MS' },
  { title: 'ALS Association', url: 'https://www.als.org/' },
  { title: 'Arthritis Foundation', url: 'https://www.arthritis.org/health-wellness/detail?content=healthyliving' },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="In-Home Care Resources"
        description="Helpful resources for aging in place, home care, and senior services in Virginia and beyond."
      />

      {/* General Resources */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            General Resources
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {generalResources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-text-medium leading-relaxed mb-4">{r.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Visit site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Area Agencies */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Area Agencies on Aging
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {agencyResources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-text-dark font-medium group-hover:text-primary transition-colors">{r.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Videos */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Podcasts &amp; Videos
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {podcastResources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                </svg>
                <span className="text-text-dark font-medium group-hover:text-primary transition-colors">{r.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Condition-Specific */}
      <section className="py-16 lg:py-24 bg-warm-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
            Condition-Specific Information
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {conditionResources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-stone-100 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-dark font-medium group-hover:text-primary transition-colors">{r.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
