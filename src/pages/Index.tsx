import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import FilmSection from "@/components/FilmSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="films">
        <FilmSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
