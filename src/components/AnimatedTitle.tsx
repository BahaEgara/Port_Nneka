import { useState, useEffect } from 'react';

const titles = ['Photographer', 'Filmmaker'];

const AnimatedTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden">
      <span 
        className={`font-gaming text-2xl md:text-4xl font-bold text-glow transition-all duration-300 absolute ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
      >
        {titles[currentIndex]}
      </span>
    </div>
  );
};

export default AnimatedTitle;