import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import useScrollSpy from './hooks/useScrollSpy';
import Header from './components/Navbar/Header';
import HomePage from './pages/Home/HomePage';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import { Contact } from 'lucide-react';


function App() {

  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <Router>
      <div className="min-h-screen bg-black" >
        <Header activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
