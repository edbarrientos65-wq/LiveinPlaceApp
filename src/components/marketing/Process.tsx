import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'In-Home Evaluation',
    description:
      'A Certified Aging-in-Place Specialist conducts a thorough in-home evaluation of your physical and therapeutic needs.',
  },
  {
    number: '02',
    title: 'Custom Solutions',
    description:
      'We customize accessibility solutions, taking your specific medical needs and care goals into account.',
  },
  {
    number: '03',
    title: 'Review Your Options',
    description:
      'We walk you through your wide range of options so you understand every solution available to you.',
  },
  {
    number: '04',
    title: 'Professional Installation',
    description:
      'Our expert team handles all home modification installations with precision and care.',
  },
  {
    number: '05',
    title: 'Live Independently',
    description:
      'You or your loved one lives the most independent, safe, and comfortable life possible — at home.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-3 mb-4">
              Thrive in 5 Easy Steps
            </h2>
            <p className="text-lg text-text-medium leading-relaxed">
              Eliminate the worry and emergency calls by modifying your home to
              make it safe — now and in the long run.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid — 3 on top row, 2 centered on bottom */}
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-serif text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl lg:max-w-[680px] mx-auto">
            {steps.slice(3).map((step, i) => (
              <ScrollReveal key={step.number} delay={(i + 3) * 100}>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-serif text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
