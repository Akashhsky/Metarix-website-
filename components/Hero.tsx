import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Fixed header height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-coral/10 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-brand-coral/30 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-wider uppercase mb-2">
            AI-First Enterprise
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Automate Conversations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-white">
              Accelerate Growth.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Deploy human-like AI Voice Agents to handle your calls 24/7, and let our expert consultants engineer your complete AI business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a 
              href="#voice"
              onClick={(e) => handleSmoothScroll(e, '#voice')}
              className="group flex items-center justify-center gap-2 bg-brand-coral text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-coralHover hover:shadow-glow transition-all w-full sm:w-auto active:scale-95"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Play size={14} fill="currentColor" />
              </span>
              Hear Our AI Agents
            </a>
            <a 
              href="#consulting"
              onClick={(e) => handleSmoothScroll(e, '#consulting')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-white font-medium hover:border-brand-coral hover:text-brand-coral transition-colors w-full sm:w-auto active:scale-95"
            >
              Get a Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Visual: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end mt-4 lg:mt-0"
        >
          {/* Wrapper to scale down on mobile */}
          <div className="transform scale-90 md:scale-100 origin-top">
            <div className="relative w-[280px] md:w-[300px] h-[560px] md:h-[600px] bg-brand-dark border-4 border-gray-700 rounded-[40px] shadow-2xl p-4 overflow-hidden backdrop-blur-sm bg-opacity-80 mx-auto">
              {/* Screen Content */}
              <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-[32px] flex flex-col items-center pt-12 relative overflow-hidden">
                
                {/* Dynamic Islandish thing */}
                <div className="absolute top-4 w-24 h-6 bg-black rounded-full z-20"></div>

                {/* Caller Info */}
                <div className="flex flex-col items-center space-y-2 z-10 mt-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-coral to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-2xl font-bold text-white">
                          AI
                      </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold">Metarix Alive</h3>
                  <p className="text-brand-coral text-sm">00:24 • AI Voice Active</p>
                </div>

                {/* Waveform Visualization */}
                <div className="flex-1 w-full flex items-center justify-center gap-1">
                  {[...Array(15)].map((_, i) => (
                      <motion.div
                          key={i}
                          className="w-1.5 md:w-2 bg-brand-coral rounded-full"
                          animate={{
                              height: [20, Math.random() * 80 + 20, 20],
                              opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                              repeat: Infinity,
                              duration: 1.5,
                              ease: "easeInOut",
                              delay: i * 0.1
                          }}
                      />
                  ))}
                </div>

                {/* Call Controls */}
                <div className="w-full px-8 pb-12 flex justify-between items-end">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <div className="w-6 h-6 border-b-2 border-l-2 border-white rotate-45 mb-1"></div>
                    </div>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
                      <div className="w-6 h-1 bg-white rounded-full rotate-45 absolute"></div>
                      <div className="w-6 h-1 bg-white rounded-full -rotate-45 absolute"></div>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <div className="w-1 h-6 bg-white rounded-full"></div>
                    </div>
                </div>
              </div>
              
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-brand-coral/20 blur-3xl -z-10 rounded-[40px]" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;