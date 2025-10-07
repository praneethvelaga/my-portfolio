import React from 'react';
import About from '../About/About.js';
import Skills from '../Skills/Skills.js';
import Projects from '../Projects/Projects.js';
import Experience from '../Experience/Experience.js';
import Contact from '../Contact/Contact.js';
import Hero from '../Hero/Hero.js';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;