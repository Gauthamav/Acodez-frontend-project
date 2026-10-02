import { Hero } from '../components/Hero';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrecisionDeliversSection from '../components/PrecisionDeliversSection';
import HelPYouToBuildSection from '../components/HelpYouToBuildSection';
import WeCanShapeItSection from '../components/WeCanShapeItSection';
import RubberCompany from '../components/RubberCompanySection';
import SolutionSection from '../components/SolutionSection';
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
      </main>
      <Footer />
    </>
  );
}
