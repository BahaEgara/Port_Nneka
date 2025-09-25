import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Example image imports (replace with your own in /public or assets folder)
import img1 from "@/assets/flour1.png";
import img2 from "@/assets/flour2.png";
import img3 from "@/assets/flour3.png";
import img4 from "@/assets/flour4.png";
import img5 from "@/assets/flour5.png";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Gallery Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr_150px] gap-8 items-start">
          {/* Left Label */}
          <div className="text-left lg:text-right font-body text-lg text-muted-foreground">
            <p className="uppercase tracking-wide">Category</p>
            <p className="font-bold text-foreground">Landscape</p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center">
            <img
              src={images[currentIndex].src}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full max-w-3xl h-auto object-cover rounded-lg border border-border shadow-md"
            />
          </div>

          {/* Thumbnail Carousel (right side on desktop, bottom on mobile) */}
          <div className="flex lg:flex-col flex-row gap-4 lg:overflow-y-auto overflow-x-auto scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 border-2 rounded-lg overflow-hidden ${
                  currentIndex === index
                    ? "border-glow shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
