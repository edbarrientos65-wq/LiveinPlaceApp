import type { Metadata } from 'next';
import PageHero from '@/components/marketing/PageHero';
import Contact from '@/components/marketing/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Your Home Safety Assessment | Live In Place',
  description:
    'Schedule your home modification safety assessment with Live In Place. Serving Fairfax, Loudoun, Arlington, Prince William Counties and the City of Alexandria.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get Started"
        title="Book Your Expert Home Assessment Today"
        description="Keep your loved ones in the family home. We can help you modify the family home to ensure it is safe and help your loved one thrive again."
      />
      <Contact />
    </>
  );
}
