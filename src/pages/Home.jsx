import HeroSection from '../components/home/HeroSection.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import CategorySection from '../components/home/CategorySection.jsx'
import BestSellersSection from '../components/home/BestSellersSection.jsx'
import IngredientStorytelling from '../components/home/IngredientStorytelling.jsx'
import WellnessBanner from '../components/home/WellnessBanner.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import CatalogueCtaSection from '../components/home/CatalogueCtaSection.jsx'

export default function Home({ onViewDetails }) {
  return (
    <main className="w-full">
      {/* 3. Premium Botanical Hero Section */}
      <HeroSection />

      {/* 4. Brand Quality and Trust Highlights */}
      <TrustBar />

      {/* 5. Product Categories */}
      <CategorySection />

      {/* 6. Featured Herbal Product Catalogue */}
      <BestSellersSection onViewDetails={onViewDetails} />

      {/* 7. Key Botanical Ingredients */}
      <IngredientStorytelling onViewDetails={onViewDetails} />

      {/* 8. Brand Story and Philosophy */}
      <WellnessBanner />

      {/* 9. Quality and Sourcing Information */}
      <WhyChooseUs />

      {/* 10. Catalogue Exploration CTA */}
      <CatalogueCtaSection />
    </main>
  )
}
