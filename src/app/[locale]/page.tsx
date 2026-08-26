import FloatingNavigation from '@/components/layout/FloatingNavigation';
import HeroSection from '@/components/sections/HeroSection';
import StatesSection from '@/components/sections/StatesSection';
import SplitSection from '@/components/sections/SplitSection';
import FashionPromoSection from '@/components/sections/FashionPromoSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <FloatingNavigation />
      <main>
        <HeroSection />
        <StatesSection />
        <SplitSection />
        <FashionPromoSection />
        <Footer />
      </main>
    </>
  );
}
