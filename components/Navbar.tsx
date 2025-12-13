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

      let current = '';
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-wide text-white z-50 relative">
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
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-3xl font-bold tracking-tight ${
                    activeSection === link.href
                      ? 'text-brand-coral'
                      : 'text-white/80'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <button 
                  className="w-full bg-brand-coral text-white py-4 rounded-xl text-lg font-bold shadow-glow"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </button>
                <p className="text-center text-gray-500 mt-6 text-sm">
                  Smart AI Solutions for the Future.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;