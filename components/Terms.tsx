import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, FileText, Gavel } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Services Offered",
      content: "Metarix provides AI-powered business solutions, including but not limited to: Custom AI Agents & Voice Agents, AI Workflow Automation, AI Marketing & Content Systems, Business Process Automation, AI Consulting & Strategy, AI Video Creation & Brand Automation, CRM & Third-party Integrations. All services may be customized based on client requirements."
    },
    {
      title: "2. Legal Entity & GST Clarification",
      content: "Metarix operates under the GST-registered entity: Legal Name: Aer Hearing Essentials. Trading Names: Aer Hearing Essentials & Metarix. Location: Coimbatore, Tamil Nadu, India. All invoices, contracts, and tax documentation will be issued under Aer Hearing Essentials (GST Registered Name)."
    },
    {
      title: "3. Eligibility",
      content: "Our Services are available to individuals, businesses, and organizations. If you are under the age of 18, you must have consent from a parent or legal guardian. By using our Services, you confirm that: You are legally capable of entering into binding contracts. You have authority to represent your business (if applicable)."
    },
    {
      title: "4. User Responsibilities",
      content: "You agree to: Use the Services only for lawful purposes. Not misuse, reverse-engineer, copy, or exploit our AI systems. Provide accurate and complete information. Ensure that all data, content, and materials shared with us are lawful and non-infringing. Comply with all applicable laws including data protection regulations. You are solely responsible for how you use AI-generated outputs."
    },
    {
      title: "5. Intellectual Property",
      content: "All AI systems, workflows, automations, software architecture, prompts, dashboards, documentation, and proprietary methods developed by Metarix remain the intellectual property of Aer Hearing Essentials unless otherwise agreed in writing. Clients receive: A limited, non-exclusive, non-transferable license to use the delivered solution. Ownership of custom deliverables only if explicitly stated in the agreement. We reserve the right to reuse non-confidential frameworks and methodologies for future projects."
    },
    {
      title: "6. Confidentiality & Data Protection",
      content: "We treat client data and business information as confidential. By using our Services, you grant us a non-exclusive right to: Process your data for service delivery. Improve system performance. Integrate with third-party platforms as required. We do not sell client data. Clients are responsible for ensuring compliance with applicable data protection laws when sharing customer or sensitive information."
    },
    {
      title: "7. Payments, Pricing & Refunds",
      content: "All pricing will be communicated via proposal, onboarding document, or official quotation. Payments must be made as per agreed milestones. GST and applicable taxes will be charged as per Indian tax regulations. All payments are non-refundable unless otherwise agreed in writing. Late payments may result in suspension of services. Subscription-based services must be renewed before expiration to avoid disruption."
    },
    {
      title: "8. Third-Party Services",
      content: "Our solutions may integrate with third-party platforms (e.g., cloud providers, CRM systems, APIs, telephony platforms). We are not responsible for: Downtime or errors caused by third-party providers. Pricing changes made by external platforms. Policy changes of third-party services. Clients are responsible for maintaining active subscriptions with such providers."
    },
    {
      title: "9. Limitation of Liability",
      content: "To the maximum extent permitted by law: Metarix (Aer Hearing Essentials) shall not be liable for: Indirect, incidental, special, or consequential damages. Loss of revenue, profits, data, or business opportunities. Decisions made based on AI-generated outputs. Total liability shall not exceed the amount paid by the client in the previous 12 months."
    },
    {
      title: "10. AI Output Disclaimer",
      content: "AI-generated outputs may contain inaccuracies or limitations. Clients acknowledge that: AI systems do not guarantee 100% accuracy. Final decisions should involve human review. We are not responsible for business losses resulting from reliance solely on AI outputs."
    },
    {
      title: "11. Termination",
      content: "We reserve the right to suspend or terminate services if: Terms are violated. Payments are not made. Services are used for unlawful activities. Upon termination: Access to systems may be revoked. Outstanding payments remain payable."
    },
    {
      title: "12. Modifications to Terms",
      content: "We may update these Terms at any time. Significant changes will be notified via: Website update, Email communication. Continued use of Services constitutes acceptance of revised Terms."
    },
    {
      title: "13. Governing Law & Jurisdiction",
      content: "These Terms shall be governed by the laws of India. Jurisdiction shall lie exclusively with the courts of: Coimbatore, Tamil Nadu, India."
    },
    {
      title: "14. Contact Information",
      content: "Metarix (Operated by Aer Hearing Essentials) Coimbatore, Tamil Nadu, India. For inquiries, contact: Connect@metarix.in, 9363735061"
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
            <Gavel className="text-brand-coral" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Terms & Conditions</h1>
          </div>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Effective Date: Jan 17, 2026</p>
          
          <div className="mt-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
             <p className="text-gray-300 leading-relaxed text-lg italic">
                Welcome to Metarix, an AI automation and digital transformation business operated under Aer Hearing Essentials (Primary Legal Entity), Coimbatore, Tamil Nadu, India.
             </p>
             <div className="mt-6 space-y-2 text-gray-400">
                <p>Aer Hearing Essentials operates under two registered trade names:</p>
                <ul className="list-disc pl-6 space-y-1">
                   <li>Aer Hearing Essentials (Primary GST Registered Name)</li>
                   <li>Metarix (AI Business & Technology Division)</li>
                </ul>
                <p className="pt-4">
                   Throughout these Terms and Conditions (“Terms”), references to “Metarix”, “we”, “our”, or “us” refer to Aer Hearing Essentials operating under the trade name Metarix.
                </p>
                <p>
                   By accessing or using our website, services, AI agents, automation systems, consulting services, or digital solutions (collectively, the “Services”), you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
                </p>
             </div>
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
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 pt-12 border-t border-white/10 text-center"
        >
           <ShieldCheck className="mx-auto text-brand-coral/50 mb-4" size={48} />
           <p className="text-gray-500 text-sm">
             Thank you for choosing Metarix for your digital transformation journey.
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

export default Terms;