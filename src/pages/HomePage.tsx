import { Hero } from '../components/Hero';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrecisionDeliversSection from '../components/PrecisionDeliversSection';
import HelPYouToBuildSection from '../components/HelpYouToBuildSection';
import WeCanShapeItSection from '../components/WeCanShapeItSection';
import RubberCompany from '../components/RubberCompanySection';
import SolutionSection from '../components/SolutionSection';
import ConceptToDeliverySection from '../components/ConceptToDeliverySection';
import PrecisionIsNeeded from '../components/PrecisionIsNeeded';
import FaqSection from '../components/FaqSection';
import IndustryInsightSection from '../components/IndustryInsightSection';
import QualityInOurIndustrySection from '../components/QualityInOurIndustrySection';
export default function HomePage() {
  return (
    <>
      <main className="relative">
        <WhatsAppButton />
        <Hero />
        <PrecisionDeliversSection />
        <HelPYouToBuildSection />
        <WeCanShapeItSection />
        <RubberCompany />
        <SolutionSection />
        <ConceptToDeliverySection />
        <PrecisionIsNeeded />
        <hr className="w-full  wrapper border-0 border-t border-dashed border-[#221F1F] opacity-20" />
        <FaqSection />
        <IndustryInsightSection />
        <QualityInOurIndustrySection />
      </main>
      <Footer />
    </>
  );
}
