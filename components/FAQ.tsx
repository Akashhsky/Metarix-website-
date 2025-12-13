import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="mb-4">
      <button
        onClick={toggle}
        className={`w-full p-6 rounded-2xl flex items-center justify-between text-left transition-all duration-300 ${
          isOpen 
            ? 'bg-brand-card border-brand-coral/30 shadow-[0_0_20px_rgba(255,127,80,0.05)]' 
            : 'bg-white/5 hover:bg-white/10 border-transparent'
        } border group`}
      >
        <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-brand-coral text-white' : 'bg-white/10 text-gray-400 group-hover:bg-white/20'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-gray-400 leading-relaxed border-l-2 border-brand-coral/20 ml-6 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How human-sounding are the AI Voice Agents?",
      a: "Our agents utilize advanced neural voice technology with sub-second latency. They can handle interruptions, pause naturally, and detect emotion, making them nearly indistinguishable from human callers."
    },
    {
      q: "Can I customize the voice and tone of the AI agent?",
      a: "Yes. You can customize voices, tones, personalities, and even the logic behind the conversation flow using your preferred LLM prompts."
    },
    {
      q: "Do you offer AI solutions beyond voice calling?",
      a: "Absolutely. While Voice is our specialty, we build chatbots, automate back-office workflows, and create custom AI strategies for business growth using AI."
    },
    {
      q: "Can Metarix integrate AI into my existing CRM?",
      a: "Yes. As part of our implementation services, we integrate our voice agents directly with your CRM to log calls, update leads, and trigger workflows automatically."
    },
    {
      q: "Is my data secure?",
      a: "We take data security seriously. Metarix uses encryption protocols and secure API practices to ensure your data is protected at all times."
    },
    {
      q: "How does the pricing work?",
      a: "We offer flexible models. For Voice Agents, it's typically usage-based. For Consulting and Implementation, we provide project-based quotes tailored to your specific business needs."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
        // Adjust for header offset
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-coral/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Header Section */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
            >
                <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="text-brand-coral" size={24} />
                    <span className="text-brand-coral font-bold uppercase tracking-wider text-sm">Support</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Intelligent <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-white">FAQ</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    Everything you need to know about implementing Metarix AI agents in your business.
                </p>
                <a 
                    href="#consulting" 
                    onClick={(e) => handleSmoothScroll(e, '#consulting')}
                    className="inline-flex items-center gap-2 text-white font-medium border-b border-brand-coral pb-1 hover:text-brand-coral hover:gap-3 transition-all"
                >
                    Have more questions? Contact us
                    <ArrowRight size={16} />
                </a>
            </motion.div>

            {/* Right Accordion Section */}
            <div className="lg:w-2/3">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <FAQItem 
                            question={faq.q} 
                            answer={faq.a} 
                            isOpen={openIndex === index}
                            toggle={() => handleToggle(index)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;