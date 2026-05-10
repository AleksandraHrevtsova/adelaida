import HeroSection from '@/components/sections/HeroSection';
import StatesSection from '@/components/sections/StatesSection';
import StickySplitHero from '@/components/sections/StickySplitHero';
import FashionPromoSection from '@/components/sections/FashionPromoSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatesSection />
      <StickySplitHero />
      <FashionPromoSection />
    </main>
  );
}