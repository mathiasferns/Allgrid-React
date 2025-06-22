import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Gallery from './sections/Gallery';
import Projects from './sections/Projects';
import HowItWorks from './sections/HowItWorks';
import VideoSection from './sections/VideoSection';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import StickyBuyBar from './components/FloatingBuyBar.jsx';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Problem />
              <Solution />
              <Gallery />
              <Projects />
              <HowItWorks />
              <VideoSection />
              <Testimonials />
              <FAQ />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
}

export default App;