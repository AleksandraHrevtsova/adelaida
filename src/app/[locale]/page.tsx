import HeroSection from '@/components/sections/HeroSection';
import StatesSection from '@/components/sections/StatesSection';
import StickySplitHero from '@/components/sections/StickySplitHero';
import FashionPromoSection from '@/components/sections/FashionPromoSection';

import Footer from '@/components/layout/Footer';
import NavigationMenu from '@/components/layout/NavigationMenu';

export default function HomePage() {
  return (
    <>
      <NavigationMenu />
      <main>
        <HeroSection />
        <StatesSection />
        <div className='relative'>
          <div className="sticky top-0 h-screen">
            <StickySplitHero />
          </div>
          <div className="h-[200vh]" />
          <div className="relative z-10 -mt-screen">
            <FashionPromoSection />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}