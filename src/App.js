import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Herosection from './components/herosection/Herosection';
import AboutSection from './components/aboutme/About';
import SkillsSection from './components/skills/Skills';
import ProjectsSection from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
      </Routes>
    </Router>
  );
}

export default App;
