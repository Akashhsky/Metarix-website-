import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">METARIX</h3>
            <p className="text-gray-500 text-sm">Smart AI Solutions for the Future of Business.</p>
          </div>
          
          <div className="flex gap-6 justify-center md:justify-start">
             <a href="#" className="text-gray-500 hover:text-brand-coral transition-colors"><Twitter size={20} /></a>
             <a href="#" className="text-gray-500 hover:text-brand-coral transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-gray-500 hover:text-brand-coral transition-colors"><Github size={20} /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 md:gap-0">
            <p className="text-center md:text-left">&copy; 2025 Metarix AI Agency. All rights reserved.</p>
            <div className="flex gap-4 justify-center md:justify-end">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;