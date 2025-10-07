import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">Praneeth</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
            Full Stack Developer
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with modern technologies. 
            I build scalable web applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              View My Work
            </button>
            <a
            href="/assets/pdf/FullStackDeveloper(SaiPraneeth).pdf"
            download="FullStackDeveloper(SaiPraneeth).pdf"
            >
              
              <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:praneethvelaga1016@gmail.com" 
               className="p-3 text-gray-400 hover:text-purple-400 hover:bg-gray-800 rounded-lg hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;