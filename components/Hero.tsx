import React, { useRef } from 'react';
import { Play, ArrowRight, CheckCircle2, Phone, Mic, User, Calendar, Database, Signal, Wifi, Battery } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-coral/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px]" />
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-coral/30 bg-brand-coral/5 backdrop-blur-sm">
             <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral"></span>
             </span>
             <span className="text-[10px] md:text-xs font-bold text-brand-coral uppercase tracking-wider">Metarix AI Engine v2.0</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.1] text-white tracking-tight">
            Automate Conversations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-[#FFB088] to-white">
              Accelerate Growth.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
            Deploy hyper-realistic AI Voice Agents that handle your calls 24/7. 
            We engineer the perfect blend of voice automation and business intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 w-full max-w-md mx-auto lg:mx-0">
            <a 
              href="#voice"
              onClick={(e) => handleSmoothScroll(e, '#voice')}
              className="group flex items-center justify-center gap-3 bg-brand-coral text-white px-8 py-4 rounded-full font-bold hover:bg-brand-coralHover hover:shadow-[0_0_20px_rgba(255,127,80,0.4)] transition-all active:scale-95 w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Play size={14} fill="currentColor" />
              </div>
              Hear AI Samples
            </a>
            <a 
              href="#consulting"
              onClick={(e) => handleSmoothScroll(e, '#consulting')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-brand-coral/50 transition-all backdrop-blur-sm active:scale-95 w-full sm:w-auto"
            >
              Get Strategy
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-widest">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-coral" />
                <span>300ms Latency</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-coral" />
                <span>24/7 Uptime</span>
             </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive iPhone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center perspective-1000 mt-4 lg:mt-0"
        >
           <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              // Responsive width/height for iPhone
              className="relative w-[270px] xs:w-[300px] md:w-[320px] h-[550px] xs:h-[600px] md:h-[660px]"
           >
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-[#2d2d2d] rounded-[45px] md:rounded-[55px] shadow-[0_0_0_8px_#1f1f1f,0_20px_50px_-10px_rgba(0,0,0,0.5)] border-[6px] md:border-[8px] border-[#3f3f3f] overflow-hidden">
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-[#000000] rounded-[38px] md:rounded-[45px] relative overflow-hidden flex flex-col">
                      
                      {/* Dynamic Island / Status Bar */}
                      <div className="pt-4 px-6 md:px-8 flex justify-between items-center text-white/90 text-xs font-semibold z-20">
                          <span>9:41</span>
                          <div className="w-20 md:w-24 h-6 md:h-7 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-3 z-30 flex items-center justify-end px-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-1"></div>
                          </div>
                          <div className="flex gap-1.5 items-center">
                              <Signal size={12} />
                              <Wifi size={12} />
                              <Battery size={14} />
                          </div>
                      </div>

                      {/* Main Call UI */}
                      <div className="flex-1 flex flex-col items-center pt-8 md:pt-12 pb-8 px-6 relative">
                          
                          {/* Background Glow */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-brand-coral/20 blur-[60px] md:blur-[80px] rounded-full"></div>

                          {/* Contact Info */}
                          <div className="flex flex-col items-center gap-3 z-10">
                              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center shadow-lg relative">
                                  <User size={32} className="text-gray-400 md:w-[40px] md:h-[40px]" />
                                  <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-brand-coral rounded-full flex items-center justify-center border-4 border-black">
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-ping"></div>
                                  </div>
                              </div>
                              <div className="text-center mt-2">
                                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Metarix AI</h3>
                                  <p className="text-brand-coral text-xs md:text-sm font-medium">Sales Agent • Active</p>
                              </div>
                          </div>

                          {/* Waveform Viz */}
                          <div className="flex-1 flex items-center justify-center gap-1.5 w-full my-4 md:my-6">
                             {[...Array(7)].map((_, i) => (
                                <motion.div
                                   key={i}
                                   className="w-1.5 md:w-2 bg-gradient-to-t from-brand-coral to-white rounded-full"
                                   animate={{ height: [15, Math.random() * 60 + 20, 15] }}
                                   transition={{ repeat: Infinity, duration: 0.8 + Math.random() * 0.5, ease: "easeInOut" }}
                                />
                             ))}
                          </div>

                          {/* Timer */}
                          <div className="text-gray-400 font-mono text-sm mb-8 md:mb-12">02:14</div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-3 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 w-full max-w-[240px] md:max-w-[260px]">
                              {[
                                  { icon: <Mic size={20} className="md:w-6 md:h-6" />, label: "Mute" },
                                  { icon: <div className="grid grid-cols-3 gap-1 w-4 h-4 md:w-5 md:h-5">{[...Array(9)].map((_,i) => <div key={i} className="bg-white rounded-full w-0.5 h-0.5 md:w-1 md:h-1"></div>)}</div>, label: "Keypad" },
                                  { icon: <Phone size={20} className="md:w-6 md:h-6" />, label: "Speaker", active: true },
                              ].map((btn, i) => (
                                  <div key={i} className="flex flex-col items-center gap-2">
                                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${btn.active ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                          {btn.icon}
                                      </div>
                                      <span className="text-[10px] text-white/50">{btn.label}</span>
                                  </div>
                              ))}
                          </div>
                          
                          {/* End Call */}
                          <div className="mt-6 md:mt-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:bg-red-600 transition-colors cursor-pointer active:scale-95">
                               <Phone size={24} className="text-white fill-white rotate-[135deg] md:w-7 md:h-7" />
                          </div>

                      </div>
                  </div>
              </div>

              {/* 3D Floating Elements (Parallax) - Optimized positions for mobile */}
              <motion.div 
                 style={{ translateZ: 40 }}
                 className="absolute top-20 -left-6 md:top-1/4 md:-left-12 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-2xl flex items-center gap-3 w-40 md:w-48 pointer-events-none scale-90 md:scale-100"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Database size={14} className="md:w-[18px] md:h-[18px]" />
                 </div>
                 <div>
                    <div className="text-[8px] md:text-[10px] text-gray-400 uppercase font-bold tracking-wider">Integration</div>
                    <div className="text-[10px] md:text-xs font-bold text-white">CRM Updated</div>
                 </div>
              </motion.div>

              <motion.div 
                 style={{ translateZ: 60 }}
                 className="absolute bottom-32 -right-6 md:bottom-1/3 md:-right-16 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-2xl flex items-center gap-3 w-44 md:w-52 pointer-events-none scale-90 md:scale-100"
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Calendar size={14} className="md:w-[18px] md:h-[18px]" />
                 </div>
                 <div>
                    <div className="text-[8px] md:text-[10px] text-gray-400 uppercase font-bold tracking-wider">Google Calendar</div>
                    <div className="text-[10px] md:text-xs font-bold text-white">Appt Set: 2:00 PM</div>
                 </div>
              </motion.div>

           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;