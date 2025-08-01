import React from 'react';
import './App.css';

// Import all the components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;