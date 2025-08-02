import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WorkExperience />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App; 