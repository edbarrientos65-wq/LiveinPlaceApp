import Hero from '@/components/marketing/Hero';
import TrustBar from '@/components/marketing/TrustBar';
import Services from '@/components/marketing/Services';
import About from '@/components/marketing/About';
import Process from '@/components/marketing/Process';
import Testimonials from '@/components/marketing/Testimonials';
import WhyChooseUs from '@/components/marketing/WhyChooseUs';
import Contact from '@/components/marketing/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
