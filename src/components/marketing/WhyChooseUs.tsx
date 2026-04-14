import ScrollReveal from './ScrollReveal';

const reasons = [
  'Assisted 5,000+ clients with avoiding assisted living facilities or nursing homes',
  'Recommended by doctors, geriatric care consultants, in-home aides and case managers',
  'Certified Aging-in-Place Specialists by the National Association of Home Builders',
  "Assessments and solutions unique to your loved one's medical needs",
  'Full home assessment is completed prior to installation',
  'Fast turnaround times for scheduling assessments and installations',
  'Post-installation accessibility equipment training for client and family members',
  'Home solutions for your immediate needs as well as long term goals',
  'Peace of mind knowing your loved one is safe and independent at home',
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-warm-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-3 mb-6">
                Why Choose Live In Place?
              </h2>
              <p className="text-lg text-text-medium leading-relaxed mb-8">
                We&apos;re dedicated to keeping families together and people
                independent because we believe every individual deserves a
                sanctuary that caters to their wellbeing.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-text-medium">{reason}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-text-medium font-medium">
                      Photo of accessible home
                      <br />
                      interior modifications
                    </p>
                  </div>
                </div>
              </div>
              {/* Accent shape */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-3xl bg-accent/10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
