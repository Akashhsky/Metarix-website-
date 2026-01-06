import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import VoiceFeature from './components/VoiceFeature';
import Industries from './components/Industries';
import Consulting from './components/Consulting';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-coral selection:text-white">
      <Navbar />
      <Hero />
      <Partners />
      <VoiceFeature />
      <Industries />
      <Consulting />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;