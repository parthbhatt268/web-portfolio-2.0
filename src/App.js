import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Education from './components/Education/Education';
import RecentWork from './components/RecentWork/RecentWork';
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
      <Certificate />
      <Education />
      <RecentWork />
      <About />
      <Footer />
    </div>
  );
}

export default App;