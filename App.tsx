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
import Privacy from './components/Privacy';
import Refund from './components/Refund';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy' | 'refund'>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'terms':
        return <Terms onBack={() => setCurrentPage('home')} />;
      case 'privacy':
        return <Privacy onBack={() => setCurrentPage('home')} />;
      case 'refund':
        return <Refund onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <Partners />
            <VoiceFeature />
            <Industries />
            <Consulting />
            <Comparison />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-coral selection:text-white">
      <Navbar onNavigateHome={() => setCurrentPage('home')} />
      
      {renderContent()}
      
      <Footer 
        onNavigateTerms={() => setCurrentPage('terms')} 
        onNavigatePrivacy={() => setCurrentPage('privacy')}
        onNavigateRefund={() => setCurrentPage('refund')}
        onNavigateHome={() => setCurrentPage('home')} 
      />
    </div>
  );
}

export default App;