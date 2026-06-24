import React from 'react';
import { ThemeProvider } from './ThemeContext';
import OrigamiWorld from './components/OrigamiWorld/OrigamiWorld';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import RecentWork from './components/RecentWork/RecentWork';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OrigamiWorld />
        <Navbar />
        <main>
          <Home />
          <About />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <RecentWork />
          <Certificate />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
