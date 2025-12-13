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
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = '';
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust detection zone for better UX
          if (rect.top <= 200 && rect.bottom >= 200) {
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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Fixed header height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <a 
          href="#" 
          className="text-2xl font-bold tracking-wide text-white" 
          onClick={handleLogoClick}
        >
          METARIX
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-sm transition-colors ${
                activeSection === link.href
                  ? 'text-brand-coral font-bold shadow-glow-sm'
                  : 'text-gray-300 hover:text-brand-coral'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#consulting"
            onClick={(e) => handleSmoothScroll(e, '#consulting')}
            className="bg-brand-coral text-white px-6 py-2 rounded-full font-medium hover:bg-brand-coralHover hover:shadow-glow transition-all cursor-pointer"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl flex flex-col justify-center items-center md:hidden h-[100dvh]"
          >
            <div className="flex flex-col items-center space-y-8 w-full max-w-sm px-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className={`text-3xl font-bold tracking-tight text-center w-full ${
                    activeSection === link.href
                      ? 'text-brand-coral'
                      : 'text-white/80'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 w-full flex flex-col items-center"
              >
                <a
                  href="#consulting"
                  onClick={(e) => handleSmoothScroll(e, '#consulting')}
                  className="block w-full text-center bg-brand-coral text-white py-4 rounded-xl text-lg font-bold shadow-glow active:scale-95 transition-transform"
                >
                  Book a Demo
                </a>
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