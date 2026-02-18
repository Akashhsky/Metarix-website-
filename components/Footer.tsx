import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Our Office */}
          <div>
            <h3 className="text-brand-coral font-bold text-sm uppercase tracking-[0.2em] mb-8">Our Office</h3>
            <div className="flex gap-4">
              <MapPin className="text-brand-coral shrink-0" size={20} />
              <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                626-1, Saravanampatti–Thudiyalur Road,<br />
                Chinnavedampatti Post,<br />
                Near Ramanis Mayuri, Coimbatore,<br />
                Tamil Nadu, 641049.
              </p>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-brand-coral font-bold text-sm uppercase tracking-[0.2em] mb-8">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:akash@metarix.in" className="text-white hover:text-brand-coral transition-colors mb-1">akash@metarix.in</a>
                  <a href="mailto:selva@metarix.in" className="text-white hover:text-brand-coral transition-colors">selva@metarix.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-brand-coral font-bold text-sm uppercase tracking-[0.2em] mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-coral transition-all flex items-center gap-2 group text-sm">
                  <span className="text-brand-coral opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-brand-coral transition-all flex items-center gap-2 group text-sm">
                  <span className="text-brand-coral opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-coral transition-all flex items-center gap-2 group text-sm">
                  <span className="text-brand-coral opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons row */}
        <div className="flex gap-6 mb-10">
          <a 
            href="https://www.linkedin.com/company/111524897/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-brand-coral transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>AER Hearing Essentials - Metarix</p>
          <p>&copy; 2025 Metarix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;