import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkflowVisual from './WorkflowVisual';

const Consulting: React.FC = () => {
  const points = [
    "Workflow Automation Audits",
    "Custom LLM Integration & Fine-tuning",
    "Operational Efficiency Strategy",
    "Seamless Tech Stack Migration"
  ];

  return (
    <section id="consulting" className="py-24 bg-gradient-to-b from-brand-dark to-[#151515]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="text-brand-coral font-semibold tracking-wider uppercase mb-2">
                Consulting Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond Voice: <br />
              Complete AI Implementation.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
              We don't just provide tools; we architect your future. Our expert consultants analyze your business workflows to inject AI exactly where it drives the most value.
            </p>
            
            <ul className="space-y-4 w-full mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                  <CheckCircle size={20} className="text-brand-coral flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/9363735061?text=Hi%20Metarix%2C%20I%27d%20like%20to%20schedule%20a%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,127,80,0.4)]"
            >
                <span>Schedule Your Strategy Call</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform text-brand-coral" size={20} />
            </a>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <WorkflowVisual />
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-coral/20 blur-[60px] rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Consulting;