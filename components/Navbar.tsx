import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Voice Solutions', href: '#voice' },
    { name: 'AI Consulting', href: '#consulting' },
    { name: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Logic to determine active section based on scroll position
      let current = '';
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is currently active in the viewport
          // If the top of the section is near the top of the viewport (taking navbar height into account)
          // and the bottom is still visible.
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-wide text-white">
          METARIX
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors ${
                activeSection === link.href
                  ? 'text-brand-coral font-bold shadow-glow-sm'
                  : 'text-gray-300 hover:text-brand-coral'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-coral text-white px-6 py-2 rounded-full font-medium hover:bg-brand-coralHover hover:shadow-glow transition-all">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.href
                      ? 'text-brand-coral font-bold'
                      : 'text-gray-300 hover:text-brand-coral'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-coral text-white px-6 py-3 rounded-md w-full font-medium">
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;