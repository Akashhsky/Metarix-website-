import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Building2, ShoppingBag, ShieldCheck, Phone, Clock, UserCheck, Calendar, DollarSign, Package, AlertCircle, TrendingUp, ChevronRight } from 'lucide-react';

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Streamline patient intake and support with empathetic, HIPAA-compliant voice agents.',
      icon: Activity,
      color: '#FF7F50', // Brand Coral
      stats: '98% Resolution Rate',
      voice: [
        { icon: Phone, title: 'Appointment Triage', desc: 'Route urgent calls instantly.' },
        { icon: Clock, title: '24/7 Patient Support', desc: 'Answer FAQs round the clock.' },
        { icon: Calendar, title: 'Scheduling Automation', desc: 'Book & reschedule autonomously.' }
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      description: 'Capture every lead instantly. Qualify buyers and schedule viewings without lifting a finger.',
      icon: Building2,
      color: '#60A5FA', // Blue
      stats: '3x More Viewings',
      voice: [
        { icon: Phone, title: 'Lead Qualification', desc: 'Filter serious buyers in seconds.' },
        { icon: Clock, title: 'Instant Follow-ups', desc: 'Call leads within 1 minute of inquiry.' },
        { icon: UserCheck, title: 'Tenant Screening', desc: 'Pre-screen applicants automatically.' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Turn support costs into revenue. Handle order tracking and returns while upselling.',
      icon: ShoppingBag,
      color: '#34D399', // Emerald
      stats: '60% Cost Reduction',
      voice: [
        { icon: Package, title: 'Order Status Updates', desc: 'Real-time logistics integration.' },
        { icon: Phone, title: 'Returns Handling', desc: 'Process RMAs without humans.' },
        { icon: DollarSign, title: 'Cart Recovery', desc: 'Call customers to recover lost sales.' }
      ]
    },
    {
      id: 'fintech',
      name: 'FinTech',
      description: 'Secure, banking-grade voice AI for identity verification and fraud prevention.',
      icon: ShieldCheck,
      color: '#A78BFA', // Purple
      stats: '0.2s Response Time',
      voice: [
        { icon: UserCheck, title: 'Identity Verification', desc: 'Voice biometrics & security Qs.' },
        { icon: AlertCircle, title: 'Fraud Alerts', desc: 'Instant confirmation calls.' },
        { icon: TrendingUp, title: 'Account Support', desc: 'Balance checks & transfers.' }
      ]
    }
  ];

  // Auto-rotate tabs
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % industries.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, industries.length]);

  const CurrentIcon = industries[activeTab].icon;

  return (
    <section className="py-10 md:py-12 bg-brand-dark relative overflow-hidden flex flex-col items-center">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-brand-coral/5 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-900/5 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">Tailored AI for Key Industries</h2>
           <p className="text-gray-400 font-sans text-base md:text-lg">
             Metarix Voice Agents are pre-trained on industry-specific datasets for maximum accuracy and impact.
           </p>
        </div>

        {/* Layout: Desktop (Split) / Mobile (Grid Tabs + Content) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-[380px]"
             onMouseEnter={() => setIsAutoPlaying(false)}
             onMouseLeave={() => setIsAutoPlaying(true)}
        >
            
            {/* Navigation (Left Panel on Desktop, 2x2 Grid on Mobile) */}
            <div className="lg:w-1/3 grid grid-cols-2 lg:flex lg:flex-col gap-2 lg:gap-2">
                {industries.map((ind, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(index)}
                            className={`group relative p-3 lg:p-3 rounded-xl lg:rounded-2xl text-left transition-all duration-300 border
                                ${isActive 
                                ? 'bg-white/10 border-brand-coral/50 shadow-glow-sm' 
                                : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                            }
                            w-full
                            `}
                        >
                            {/* Progress Bar for Auto-play (only if active) */}
                            {isActive && isAutoPlaying && (
                                <motion.div 
                                    layoutId="progress"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="absolute bottom-0 left-0 h-1 bg-brand-coral/50 rounded-b-xl lg:rounded-b-2xl"
                                />
                            )}
                            
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className={`p-1.5 lg:p-2 rounded-lg transition-colors ${isActive ? 'bg-brand-coral text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'}`}>
                                        <ind.icon size={18} className="lg:w-5 lg:h-5" />
                                    </div>
                                    <span className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {ind.name}
                                    </span>
                                </div>
                                {isActive && <ChevronRight className="hidden lg:block text-brand-coral animate-pulse" size={18} />}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Content Dashboard (Right Panel) */}
            <div className="lg:w-2/3 relative min-h-[400px] lg:h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={industries[activeTab].id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="h-full w-full bg-[#1F1F1F] border border-white/10 rounded-2xl lg:rounded-3xl p-5 md:p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between"
                    >
                        {/* Decorative Background Icon */}
                        <CurrentIcon 
                            className="absolute -bottom-10 -right-10 w-56 h-56 lg:w-72 lg:h-72 text-white/[0.03] rotate-12 pointer-events-none" 
                            strokeWidth={1}
                        />

                        {/* Card Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="p-1.5 bg-brand-coral/20 rounded-lg">
                                        <CurrentIcon size={20} className="lg:w-5 lg:h-5 text-brand-coral" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white">{industries[activeTab].name}</h3>
                                </div>
                                <p className="text-gray-400 max-w-md mt-1 leading-relaxed text-xs lg:text-sm">
                                    {industries[activeTab].description}
                                </p>
                            </div>
                            
                            {/* Stat Badge */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-2 lg:p-3 flex flex-col items-center min-w-[100px] lg:min-w-[120px] backdrop-blur-sm self-start md:self-center">
                                <span className="text-brand-coral font-bold text-base lg:text-xl">{industries[activeTab].stats}</span>
                                <span className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-wide">Key Metric</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-3"></div>

                        {/* Capabilities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 relative z-10 h-full">
                            {industries[activeTab].voice.map((feature, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/10 hover:border-brand-coral/20 transition-all group/card flex flex-col justify-center"
                                >
                                    <div className="mb-2 text-brand-coral/80 group-hover/card:text-brand-coral">
                                        <feature.icon size={18} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                    <p className="text-gray-500 text-xs leading-snug">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-4 flex justify-end relative z-10">
                            <button className="text-xs text-brand-coral hover:text-white flex items-center gap-1 transition-colors">
                                View Case Study <ChevronRight size={12} />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;