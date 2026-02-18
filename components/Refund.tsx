import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, RefreshCcw, DollarSign } from 'lucide-react';

interface RefundProps {
  onBack: () => void;
}

const Refund: React.FC<RefundProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Refund Eligibility",
      content: "Metarix provides AI consultation, AI automation services, AI marketing systems, custom AI agents, and Metarix Alive (AI Voice Agent) solutions. We offer a 30-Day Refund Guarantee if the request is made within 30 days of purchase, and the service has not been substantially completed or delivered, with no significant development milestones executed."
    },
    {
      title: "2. Services Covered",
      content: "The 30-day refund eligibility may apply to: Subscription-based AI services, AI automation tools, AI consultation services, AI workflow setup, Voice agent setup (Metarix Alive), and One-time digital services."
    },
    {
      title: "3. Non-Refundable Services",
      content: "Refunds will not be provided for requests after 30 days, fully completed custom development projects, deployed systems, or completed consulting sessions. Third-party charges (API credits, telephony, hosting) and GST taxes already remitted are strictly non-refundable."
    },
    {
      title: "4. Custom AI & Voice Agent Projects",
      content: "For custom-built agents and Metarix Alive: Refund eligibility applies only before major development milestones are completed. Once integration or deployment begins, refunds may be limited or unavailable. Third-party platform costs remain non-refundable."
    },
    {
      title: "5. How to Request a Refund",
      content: "To request a refund, email connect@metarix.in with your Name, Invoice Number, and Payment Date. Eligible refunds will be processed within 5–10 business days after approval via the original payment method."
    },
    {
      title: "6. Subscription Cancellations",
      content: "For recurring services, you may cancel at any time to stop future billing. No refunds will be issued for the current billing cycle once it has started."
    },
    {
      title: "7. Dispute Resolution",
      content: "If you believe there has been a billing error, please contact us immediately. We encourage resolution through direct communication before initiating payment disputes or chargebacks."
    },
    {
      title: "8. Contact Information",
      content: "Metarix (Operated by Aer Hearing Essentials), Coimbatore, Tamil Nadu, India.\n📧 Email: connect@metarix.in\n📞 Phone: +91 9363735061"
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-brand-coral hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <RefreshCcw className="text-brand-coral" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Refund Policy</h1>
          </div>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Effective Date: January 17, 2026</p>
          
          <div className="mt-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
             <p className="text-gray-300 leading-relaxed text-lg italic">
                This Refund Policy applies to services provided by Metarix, operated under Aer Hearing Essentials (“Metarix”, “we”, “our”, or “us”), based in Coimbatore, Tamil Nadu, India.
             </p>
             <p className="mt-6 text-gray-400">
                Please read this policy carefully before purchasing or subscribing to our Services to ensure you understand our guarantee.
             </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative pl-8 border-l border-brand-coral/20 hover:border-brand-coral transition-colors"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line font-sans">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 pt-12 border-t border-white/10 text-center"
        >
           <DollarSign className="mx-auto text-brand-coral/50 mb-4" size={48} />
           <p className="text-gray-500 text-sm">
             We stand behind the quality of our AI solutions and aim for total client satisfaction.
           </p>
           <button 
              onClick={onBack}
              className="mt-8 px-10 py-4 bg-brand-coral text-white rounded-full font-bold hover:bg-brand-coralHover transition-all shadow-glow"
           >
              Return Home
           </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;