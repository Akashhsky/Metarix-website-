import React from 'react';
import { CheckCircle } from 'lucide-react';
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
          >
            <div className="text-brand-coral font-semibold tracking-wider uppercase mb-2">
                Consulting Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond Voice: <br />
              Complete AI Implementation.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just provide tools; we architect your future. Our expert consultants analyze your business workflows to inject AI exactly where it drives the most value.
            </p>
            
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={20} className="text-brand-coral" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white hover:text-brand-dark transition-all">
                Explore Consulting
            </button>
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
