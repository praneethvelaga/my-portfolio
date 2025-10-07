import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentSection = sectionIds[0];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionIds[i];
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;