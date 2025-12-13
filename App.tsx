import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import VoiceFeature from './components/VoiceFeature';
import Consulting from './components/Consulting';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-coral selection:text-white">
      <Navbar />
      <Hero />
      <Partners />
      <VoiceFeature />
      <Consulting />
      <Comparison />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;