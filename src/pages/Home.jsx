import HeroSection from '../components/home/HeroSection.jsx'
import TrustBar from '../components/home/TrustBar.jsx'
import CategorySection from '../components/home/CategorySection.jsx'
import BestSellersSection from '../components/home/BestSellersSection.jsx'
import ShopByConcern from '../components/home/ShopByConcern.jsx'
import IngredientStorytelling from '../components/home/IngredientStorytelling.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import WellnessBanner from '../components/home/WellnessBanner.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import NewsletterSection from '../components/home/NewsletterSection.jsx'

export default function Home({ onAddToCart, onToggleFavorite, onQuickView }) {
  return (
    <main className="w-full">
      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Trust Bar */}
      <TrustBar />

      {/* 5. Category Section */}
      <CategorySection />

      {/* 6. Best Sellers Section with Filter Tabs */}
      <BestSellersSection
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        onQuickView={onQuickView}
      />

      {/* 7. Shop by Concern Discovery */}
      <ShopByConcern
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
      />

      {/* 8. Sourced from the Earth - Ingredient Storytelling */}
      <IngredientStorytelling
        onQuickView={onQuickView}
      />

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Wellness Banner - Brand Heritage & Philosophy */}
      <WellnessBanner />

      {/* 11. Testimonials Section */}
      <TestimonialsSection />

      {/* 12. Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}
