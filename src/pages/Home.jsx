import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import LeadPopup from '@/components/LeadPopup';

import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import AboutSection from '@/components/home/AboutSection';
import LoanProducts from '@/components/home/LoanProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import EMICalculatorSection from '@/components/home/EMICalculatorSection';
import BankingOptions from '@/components/home/BankingOptions';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <LoanProducts />
        <WhyChooseUs />
        <ProcessTimeline />
        <EMICalculatorSection />
        <BankingOptions />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyButtons />
      <LeadPopup />
    </div>
  );
}
