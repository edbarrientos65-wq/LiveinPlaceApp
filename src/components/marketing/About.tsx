import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-text-medium font-medium">
                      Photo of the Live In Place team
                    </p>
                  </div>
                </div>
              </div>
              {/* Accent shape behind */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-3 mb-6">
                Keeping Families Together Since 2007
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg text-text-medium leading-relaxed mb-4">
                Caring for a loved one often means nurturing their independence
                and comfort in their own home. Live In Place&apos;s primary goal is
                to keep your loved one living safely in the family home for as
                long as possible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-lg text-text-medium leading-relaxed mb-4">
                We offer custom home modifications and mobility solutions across
                Northern Virginia. Trusted by families and medical professionals
                alike, our personalized approach addresses safety concerns while
                upholding the autonomy your loved ones cherish.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-text-medium leading-relaxed mb-8">
                Over 5,000 families have trusted us to make their homes more
                adaptable to medical needs and specific care goals — keeping
                loved ones out of rehab and nursing facilities by preventing
                injuries before they happen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-text-dark">
                    Experienced. Professional. Compassionate.
                  </p>
                  <p className="text-sm text-text-light">
                    Certified Aging-in-Place Specialists (CAPS) by the NAHB
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
