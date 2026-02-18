import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bot, Video, Lightbulb, ArrowUpRight, Target, Layers, Cpu } from 'lucide-react';

const HighlightCard = ({ item, index }: { item: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 127, 80, 0.08), transparent 40%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className="group relative h-full rounded-[2.5rem] bg-[#141414] border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-coral/20"
    >
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: spotlightBg }} 
      />

      <div className="relative z-10 p-10 h-full flex flex-col">
        {/* Header Icon & Badge */}
        <div className="flex justify-between items-start mb-12">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-2xl flex items-center justify-center text-white transform-gpu group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
            {item.icon}
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-brand-coral/10 text-brand-coral text-[10px] font-bold px-4 py-2 rounded-full border border-brand-coral/20 uppercase tracking-widest">
              {item.feature}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
             <div className="h-px w-6 bg-brand-coral/40"></div>
             <span className="text-brand-coral text-[10px] font-bold uppercase tracking-[0.3em]">
               {item.subtitle}
             </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-coral transition-all duration-500">
            {item.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-base mb-8 group-hover:text-gray-300 transition-colors">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest hover:text-brand-coral transition-colors group/btn">
              Explore Tech 
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
            </button>
            <item.secondaryIcon size={24} className="text-white/5 group-hover:text-brand-coral/20 transition-colors duration-700" />
          </div>
        </div>
      </div>
      
      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-coral/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </motion.div>
  );
};

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "AI Automations",
      subtitle: "NEURAL FLOW",
      description: "Engineered neural ecosystems that bridge the gap between your data and delivery. We don't just automate; we evolve your operations.",
      icon: <Bot size={32} />,
      feature: "AUTOPILOT",
      color: "from-brand-coral/80 to-orange-600",
      secondaryIcon: Cpu
    },
    {
      title: "AI Video Creative",
      subtitle: "VISUAL GENIUS",
      description: "Harness Gen-AI to create cinema-grade ad creatives at scale. High-fidelity motion graphics that command attention and drive conversions.",
      icon: <Video size={32} />,
      feature: "4K RENDER",
      color: "from-blue-600/80 to-indigo-700",
      secondaryIcon: Target
    },
    {
      title: "AI Consultations",
      subtitle: "INTEL CORE",
      description: "Strategic roadmaps designed for market dominance. We align your business goals with cutting-edge AI architecture for maximum ROI.",
      icon: <Lightbulb size={32} />,
      feature: "STRATEGY",
      color: "from-emerald-600/80 to-teal-700",
      secondaryIcon: Layers
    }
  ];

  return (
    <section className="py-32 relative bg-brand-dark overflow-hidden">
      {/* Deep Space Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,127,80,0.03)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[1px] bg-brand-coral"></span>
               <span className="text-brand-coral font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Proprietary Engine</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              The Pillars of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-[#FFB088] to-white">
                Digital Dominance
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg max-w-sm lg:text-right font-medium leading-relaxed"
          >
            Architecting the future of enterprise with autonomous intelligence and generative scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {highlights.map((item, idx) => (
            <HighlightCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;