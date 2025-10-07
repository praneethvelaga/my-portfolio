import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Check which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== sectionIds[i]) {
            setActiveSection(sectionIds[i]);
          }
          break;
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, activeSection]);

  return activeSection;
};

export default useScrollSpy;