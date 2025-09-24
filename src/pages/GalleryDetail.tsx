import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import flour1 from "@/assets/flour1.png";
import flour2 from "@/assets/flour2.png";
import flour3 from "@/assets/flour3.png";
import flour4 from "@/assets/flour4.png";

import together1 from "@/assets/together1.png";
import together2 from "@/assets/together2.png";
import together3 from "@/assets/together3.png";
import together4 from "@/assets/together4.png";
import together5 from "@/assets/together5.png";

import ndege1 from "@/assets/ndege1.png";
import ndege2 from "@/assets/ndege2.png";
import ndege3 from "@/assets/ndege3.png";
import ndege4 from "@/assets/ndege4.png";
import ndege5 from "@/assets/ndege5.png";

import unknown1 from "@/assets/unknown1.png";
import unknown2 from "@/assets/unknown2.png";
import unknown3 from "@/assets/unknown3.png";
import unknown4 from "@/assets/unknown4.png";

const galleryItems = [
  {
    id: 1,
    image: flour1,
    title: "Flour Photography",
    description: "A high-energy series capturing dramatic motion and emotion through airborne flour and movement.",
    fullDescription: "Flour Photography is a powerful visual series that explores the dynamic interaction between motion, light, and texture using flour as the medium. Each shot captures explosive movement — whether it's a dancer's leap or a sudden gesture — with flour suspended mid-air, emphasizing the raw energy, elegance, and expression in motion. This collection plays with light and shadow to highlight the intensity and emotion behind every movement, turning simple gestures into visually stunning, ethereal moments frozen in time.",
    images: [flour1, flour2, flour3, flour4]
  },
  {
    id: 2,
    image: ndege2,
    title: "NDEGE",
    description: "Finding art in the architectural rhythm of city life.",
    fullDescription: "Urban environments offer a unique canvas for photographic exploration. This image examines the geometric patterns created by modern architecture and how they interact with natural light throughout the day. The stark lines and repetitive forms create a meditation on order and chaos in metropolitan spaces. Captured using a wide-angle lens to emphasize the converging lines and create a sense of depth that draws the viewer into the urban maze.",
    images: [ndege1, ndege2, ndege3, ndege4, ndege5]
  },
  {
    id: 3,
    image: together3,
    title: "Together Positiveness",
    description: "Revealing the soul through intimate portraiture.",
    fullDescription: "Together Positiveness is a series that radiates warmth, optimism, and the beauty of human connection. These photos document shared smiles, small acts of kindness, and moments of togetherness that uplift the spirit. Whether it’s friends laughing, communities supporting one another, or strangers sharing a moment, the series emphasizes that positivity is amplified when shared. It serves as a visual reminder that in unity and compassion, we find strength, hope, and true joy.",
    images: [together1, together2, together3, together4, together5]
  },
  {
    id: 4,
    image: unknown1,
    title: "Project Unknown",
    description: "An abstract visual journey exploring mystery, imagination, and artistic experimentation.",
    fullDescription: "Project Unknown invites viewers into a world where visuals are untethered from conventional meaning. This series is rooted in creative exploration and abstraction, featuring experimental photography and visual narratives that defy categorization. Each piece encourages curiosity and open interpretation, blending elements of surrealism, distortion, and emotion to provoke thought and evoke a sense of the unknown. It’s a gallery of untold stories, where ambiguity is the theme and imagination completes the picture.",
    images: [unknown1, unknown2, unknown3, unknown4]
  }
];

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryItem = galleryItems.find(item => item.id === parseInt(id || ''));
  
  if (!galleryItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-pixel text-2xl text-glow mb-4">Gallery Item Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline" className="border-glow text-glow hover:bg-glow hover:text-background">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="text-glow hover:text-glow-intense hover:bg-glow/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 lg:px-16 pb-16">
        {/* Left Side - Text Description */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <h1 className="font-pixel text-2xl md:text-3xl text-glow mb-4 leading-relaxed">
              {galleryItem.title}
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              {galleryItem.description}
            </p>
          </div>
          
          <div className="bg-card/30 border border-glow/20 rounded-lg p-6">
            <h3 className="font-pixel text-lg text-glow mb-4">About This Work</h3>
            <p className="text-foreground font-body leading-relaxed text-sm">
              {galleryItem.fullDescription}
            </p>
          </div>
        </div>

        {/* Middle - Main Image */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative max-w-4xl w-full">
            <img 
              src={galleryItem.images[currentImageIndex]}
              alt={`${galleryItem.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg border border-glow/30 shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-background/80 px-3 py-1 rounded border border-glow/30">
              <span className="font-pixel text-xs text-glow">
                {currentImageIndex + 1} / {galleryItem.images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <h3 className="font-pixel text-lg text-glow mb-6 text-center">
            Related Images
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            orientation="vertical"
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent className="-mt-1 h-[400px]">
              {galleryItem.images.map((image, index) => (
                <CarouselItem key={index} className="pt-1 basis-1/3">
                  <div 
                    className={`cursor-pointer transition-all duration-300 ${
                      currentImageIndex === index ? 'ring-2 ring-glow' : 'hover:ring-1 hover:ring-glow/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover rounded border border-glow/20"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-glow/30 text-glow hover:bg-glow hover:text-background" />
            <CarouselNext className="border-glow/30 text-glow hover:bg-glow hover:text-background" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;