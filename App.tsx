import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import VoiceFeature from './components/VoiceFeature';
import Industries from './components/Industries';
import Consulting from './components/Consulting';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './components/Terms';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms'>('home');

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-coral selection:text-white">
      <Navbar onNavigateHome={() => setCurrentPage('home')} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Partners />
          <VoiceFeature />
          <Industries />
          <Consulting />
          <Comparison />
          <FAQ />
        </>
      ) : (
        <Terms onBack={() => setCurrentPage('home')} />
      )}
      
      <Footer onNavigateTerms={() => setCurrentPage('terms')} onNavigateHome={() => setCurrentPage('home')} />
    </div>
  );
}

export default App;