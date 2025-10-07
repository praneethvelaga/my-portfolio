import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (location.pathname === '/' && activeSection === item.id) return true;
    return false;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              Praneeth
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                location.pathname === '/' && item.id !== 'home' && item.id !== 'about' ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                      isActive(item) ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                      isActive(item) ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-blue-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                location.pathname === '/' && item.id !== 'home' && item.id !== 'about' ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md ${
                      isActive(item) ? 'text-blue-400 bg-gray-800/50' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md ${
                      isActive(item) ? 'text-blue-400 bg-gray-800/50' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;