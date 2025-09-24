import { Camera, Film, Package, PenTool } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Film,
    title: "Filmmaking",
    description: "Professional video production, from concept to final cut. Bringing stories to life through cinematic excellence."
  },
  {
    id: 2,
    icon: Camera,
    title: "Photography",
    description: "Capturing moments that matter. Professional photography services for events, portraits, and artistic projects."
  },
  {
    id: 3,
    icon: Package,
    title: "Product Photography",
    description: "Showcase your products with stunning visuals. Commercial photography that drives sales and engagement."
  },
  {
    id: 4,
    icon: PenTool,
    title: "Script Writing",
    description: "Compelling narratives and screenplays. Crafting stories that resonate with audiences and drive emotional connection."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-3xl md:text-5xl font-bold mb-4 text-glow uppercase tracking-wider">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-glow to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Professional creative services tailored to bring your vision to life with precision and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <IconComponent className="w-8 h-8 text-glow group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="font-gaming text-xl font-bold mb-4 text-glow uppercase tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed text-center">
                  {service.description}
                </p>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-glow/50 rounded-lg transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;