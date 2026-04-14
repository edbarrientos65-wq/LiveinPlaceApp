import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      "During my husband's hospital stay, you assessed our need for grab bars, toilet adaptations, shower chair and a stair lift. By the time he came home from rehab, our home was ready; all of the materials you installed were top quality. I never imagined it could be done so quickly. The fun of 'driving' the stair lift gave my husband's spirits a lift after a very hard time.",
    author: 'Dierdre',
    context: 'Fairfax County',
  },
  {
    quote:
      "After she was diagnosed with Parkinson's, my mother was so afraid we were going to put her in 'one of those places.' She couldn't use the upstairs or get in and out of the shower safely, so it was a real problem. Instead we called Live In Place and made some affordable modifications. It was a lot cheaper than the nursing home and she's thriving in her home.",
    author: 'Bobbie',
    context: 'Arlington County',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Stories from Our Families
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 150}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-serif font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-white/60">{t.context}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
