import PromoBanner from "./features/home/components/PromoBanner/PromoBanner";
import ProductSection from "./features/home/components/ProductSection/ProductSection";
import CategoryShowcase from "./features/home/components/CategoryShowcase/CategoryShowcase";
import ServicesSection from "./features/home/components/ServicesSection/ServicesSection";
import FeaturedPosts  from "./features/home/components/FeaturedPosts/FeaturedPosts";
import Testimonials from "./features/home/components/Testimonials/Testimonials";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    
   <main>
    <Header/>
  <CategoryShowcase />

  <ProductSection />

  <ServicesSection />

  <FeaturedPosts />

  <Testimonials />

  <PromoBanner />
  <Footer/>
</main>

  );
}

export default App;