import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gallery1 from "@/assets/flour1.png";
import gallery2 from "@/assets/ndege1.png";
import gallery3 from "@/assets/together1.png";
import gallery4 from "@/assets/unknown1.png";

const galleryItems = [
  {
    id: 1,
    image: gallery1,
    title: "Flour Photography",
    description: "A captivating visual exploration using flour to create dramatic, high-contrast motion shots that evoke energy and emotion."
  },
  {
    id: 2,
    image: gallery2,
    title: "Ndege",
    description: "Finding art in the architectural rhythm of city life."
  },
  {
    id: 3,
    image: gallery3,
    title: "Together Positiveness",
    description: "Revealing the soul through intimate portraiture."
  },
  {
    id: 4,
    image: gallery4,
    title: "Project Unknown",
    description: "A mysterious and experimental series showcasing abstract visuals and unconventional storytelling through imagery."
  }
];

const GallerySection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-3xl md:text-5xl font-bold mb-4 text-glow uppercase tracking-wider">
            Featured Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-glow to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => navigate(`/gallery/${item.id}`)}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="relative overflow-hidden h-64 md:h-80">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-500 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Text Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                  hoveredItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <h3 className="font-gaming text-xl md:text-2xl font-bold mb-2 text-glow">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Scan Line Effect */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-glow/20 to-transparent h-1 transition-all duration-1000 ${
                  hoveredItem === item.id ? 'animate-pulse' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;