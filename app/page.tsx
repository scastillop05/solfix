import { ModalProvider } from '@/components/providers/ModalProvider';
import { Cursor } from '@/components/ui/Cursor';
import { WhatsFloatBtn } from '@/components/ui/WhatsFloatBtn';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { ForTechnicians } from '@/components/sections/ForTechnicians';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
  return (
    <>
      <Cursor />
      <WhatsFloatBtn />
      <ModalProvider>
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <HowItWorks />
          <Testimonials />
          <ForTechnicians />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </ModalProvider>
    </>
  );
}
