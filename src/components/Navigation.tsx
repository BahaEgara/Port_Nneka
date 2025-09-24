import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/#gallery', label: 'Gallery' },
    // { path: '/#films', label: 'Films' },
    // { path: '/#services', label: 'Services' },
  ];

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const element = document.querySelector(path.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-gaming text-xl font-bold text-glow uppercase tracking-wider hover:text-glow-intense transition-colors">
            Nneka Kagai Egara
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`font-body font-medium transition-all duration-300 hover:text-glow relative ${
                  location.pathname === item.path ? 'text-glow' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-glow transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-glow hover:text-glow-intense transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block py-2 px-4 font-body font-medium transition-all duration-300 hover:text-glow hover:bg-secondary/30 rounded ${
                  location.pathname === item.path ? 'text-glow bg-secondary/20' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;