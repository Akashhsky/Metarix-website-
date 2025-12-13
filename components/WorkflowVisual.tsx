import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Cpu, Database } from 'lucide-react';

const WorkflowVisual: React.FC = () => {
  return (
    <div className="py-12 bg-black/20 rounded-2xl border border-white/5 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 px-4">
        
        {/* Node 1 */}
        <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-brand-card border border-white/10 flex items-center justify-center text-white shadow-lg z-10">
                <Phone size={24} />
            </div>
            <span className="text-xs text-gray-500 font-mono">Customer Call</span>
        </div>

        {/* Connector 1 */}
        <div className="relative flex-none">
             {/* Desktop Horizontal Line */}
             <div className="hidden md:block h-1 w-24 bg-gray-800 rounded-full overflow-hidden relative">
                 <motion.div 
                    className="absolute inset-0 bg-brand-coral"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 />
             </div>
             {/* Mobile Vertical Line */}
             <div className="md:hidden w-1 h-12 bg-gray-800 rounded-full overflow-hidden relative">
                 <motion.div 
                    className="absolute inset-0 bg-brand-coral"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 />
             </div>
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center gap-3">
             <div className="w-20 h-20 rounded-2xl bg-brand-dark border-2 border-brand-coral flex items-center justify-center text-brand-coral shadow-glow z-10 relative">
                <div className="absolute inset-0 bg-brand-coral/10 animate-pulse rounded-2xl"></div>
                <Cpu size={32} />
            </div>
            <span className="text-xs text-brand-coral font-mono">AI Processing</span>
        </div>

        {/* Connector 2 */}
        <div className="relative flex-none">
             {/* Desktop Horizontal Line */}
             <div className="hidden md:block h-1 w-24 bg-gray-800 rounded-full overflow-hidden relative">
                 <motion.div 
                    className="absolute inset-0 bg-brand-coral"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
                 />
             </div>
             {/* Mobile Vertical Line */}
             <div className="md:hidden w-1 h-12 bg-gray-800 rounded-full overflow-hidden relative">
                 <motion.div 
                    className="absolute inset-0 bg-brand-coral"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
                 />
             </div>
        </div>

        {/* Node 3 */}
         <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-brand-card border border-white/10 flex items-center justify-center text-white shadow-lg z-10">
                <Database size={24} />
            </div>
            <span className="text-xs text-gray-500 font-mono">CRM Update</span>
        </div>

      </div>
      <div className="text-center mt-8">
          <p className="font-mono text-xs text-gray-600">Real-time Data Integration Pipeline v2.4.0</p>
      </div>
    </div>
  );
};

export default WorkflowVisual;