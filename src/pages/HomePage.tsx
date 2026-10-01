import { Hero } from '../components/Hero';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrecisionDeliversSection from '../components/PrecisionDeliversSection';
export default function HomePage() {
  return (
    <>
      <main className="relative">
        <WhatsAppButton />
        <Hero />
        <PrecisionDeliversSection />
      </main>
      <Footer />
    </>
  );
}
