import { useEffect, useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/Mainimage.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* About Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 scan-lines">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-gaming text-4xl md:text-6xl font-bold mb-4 text-glow uppercase tracking-wider">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-glow to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Text */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h2 className="font-gaming text-2xl font-bold text-glow uppercase tracking-wide">
                  The Vision
                </h2>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Every frame tells a story. Every story deserves to be told with passion, precision, and purpose. 
                  My approach combines technical excellence with artistic vision to create visuals that resonate 
                  on both emotional and aesthetic levels.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-gaming text-xl font-bold text-glow uppercase tracking-wide">
                  Creative Process
                </h3>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  From concept to completion, I believe in collaborative storytelling. Whether capturing a fleeting 
                  moment or crafting a complete narrative, the goal is always to create something that moves people.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src={aboutPortrait}
                  alt="About Portrait"
                  className="w-full max-w-sm h-auto object-cover rounded-lg border border-glow/30 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-glow/30 to-transparent rounded-lg blur-sm -z-10" />
                
                {/* Gaming-style border effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-glow/50 via-transparent to-glow/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }} />
              </div>
            </div>

            {/* Right Text */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h2 className="font-gaming text-2xl font-bold text-glow uppercase tracking-wide">
                  The Journey
                </h2>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Over a decade of experience in visual storytelling has taught me that the best work comes from 
                  understanding not just the technical aspects, but the human element behind every project.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-gaming text-xl font-bold text-glow uppercase tracking-wide">
                  Innovation
                </h3>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Constantly pushing boundaries with cutting-edge techniques while honoring timeless storytelling 
                  principles. Technology serves the story, never the other way around.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-glow/50 transition-colors">
              <div className="font-gaming text-3xl font-bold text-glow mb-2">500+</div>
              <div className="font-body text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-glow/50 transition-colors">
              <div className="font-gaming text-3xl font-bold text-glow mb-2">10+</div>
              <div className="font-body text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-glow/50 transition-colors">
              <div className="font-gaming text-3xl font-bold text-glow mb-2">50+</div>
              <div className="font-body text-muted-foreground">Award Nominations</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-glow/50 transition-colors">
              <div className="font-gaming text-3xl font-bold text-glow mb-2">100%</div>
              <div className="font-body text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;