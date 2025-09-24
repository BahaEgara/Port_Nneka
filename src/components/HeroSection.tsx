import { Button } from "@/components/ui/button";
import AnimatedTitle from "./AnimatedTitle";
import heroPortrait from "@/assets/Mainimage.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 pt-32 pb-20 scan-lines relative overflow-hidden gap-12 lg:gap-0">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Left Side - Name and Title */}
      <div className="flex-1 space-y-8 z-10">
        <div className="space-y-4">
          <h1 
            className="glitch font-gaming text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider"
            data-text="Nneka Egara"
          >
            Nneka Egara
          </h1>
          <div className="border-l-4 border-glow pl-6">
            <AnimatedTitle />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-body leading-relaxed">
            Capturing moments and crafting stories through the lens of creativity and innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
          <Button 
            className="btn-glow"
            onClick={() => window.location.href = 'mailto:contact@yourportfolio.com'}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="flex-1 flex justify-center lg:justify-end items-center z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glow/20 to-transparent animate-pulse" />
          <img 
            src={heroPortrait}
            alt="Professional Portrait"
            className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg border border-glow/30 shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)] transition-all duration-500"
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-glow/30 to-transparent rounded-lg blur-sm -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;