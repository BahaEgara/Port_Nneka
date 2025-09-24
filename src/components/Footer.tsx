import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:contact@yourportfolio.com";
  };

  return (
    <footer className="relative py-20 px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-glow/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="font-gaming text-3xl md:text-5xl font-bold text-glow uppercase tracking-wider">
            Let's Create Together
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's craft something extraordinary.
          </p>

          <Button 
            onClick={handleContactClick}
            className="btn-glow group relative overflow-hidden text-lg px-8 py-4"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Click Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-glow/0 via-glow/20 to-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <div className="pt-12 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-gaming text-sm text-muted-foreground uppercase tracking-wider">
                © 2024 Your Portfolio. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-glow transition-colors font-body">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-glow transition-colors font-body">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines pointer-events-none" />
    </footer>
  );
};

export default Footer;