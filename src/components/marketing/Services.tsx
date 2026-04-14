import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Stairlifts',
    href: '/stairlifts',
    description:
      'Regain access to every level of your home with safe, reliable stairlift installations for straight and curved staircases.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21l10-10M7 7v14M17 3v4m0 0h4m-4 0l-4 4" />
      </svg>
    ),
  },
  {
    title: 'Ramps',
    href: '/ramps',
    description:
      "Custom wheelchair ramps and modular ramp systems for safe, step-free access to your home's entrances.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16M4 20l16-8M4 20v-4" />
      </svg>
    ),
  },
  {
    title: 'Grab Bars',
    href: '/grips-grab-bars-railings',
    description:
      'Strategically placed grab bars in bathrooms, hallways, and high-risk areas to prevent slips and falls.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M12 4v16" />
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Bathroom Safety',
    href: '/bathroom-modifications',
    description:
      'Shower chairs, toilet adaptations, non-slip surfaces, and complete bathroom modifications for safe daily use.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 12a9 9 0 009 9m-9-9V5a2 2 0 012-2h1m15 9a9 9 0 01-9 9m0 0v-3" />
      </svg>
    ),
  },
  {
    title: 'Entrance Modifications',
    href: '/home-access',
    description:
      'Threshold adjustments, door widening, and accessibility upgrades to make every entrance safe and easy to navigate.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-4-4h8" />
      </svg>
    ),
  },
  {
    title: 'Railing Installation',
    href: '/grips-grab-bars-railings',
    description:
      'Custom interior and exterior railing systems that provide stability and support throughout your home.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M5 6v12M19 6v12M9 10v8M15 10v8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-3 mb-4">
              Home Accessibility Solutions
            </h2>
            <p className="text-lg text-text-medium leading-relaxed">
              From stairlifts to grab bars, we provide comprehensive home
              modifications tailored to your loved one&apos;s unique needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <Link href={service.href} className="block h-full">
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 hover:border-primary/20 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
