import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Legal Entity Information",
      content: "Business Name (GST Registered): Aer Hearing Essentials\nTrading Name: Metarix\nLocation: Coimbatore, Tamil Nadu, India\nEmail: connect@metarix.in\nPhone: +91 9363735061\n\nMetarix is the AI automation and technology division of Aer Hearing Essentials."
    },
    {
      title: "2. Information We Collect",
      content: "a) Information You Provide\nWe may collect: Business name and company details, Name, email address, and phone number, Billing and payment details, Content or data submitted to our AI systems, Voice data processed through Metarix Alive.\n\nb) Automatically Collected Information\nIP address, Browser type and device information, Usage data and interaction logs, Call metadata (for AI voice systems), System performance logs."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your information to: Provide AI consultation and automation services, Develop and improve AI systems, Operate Metarix Alive, Customize your experience, Process payments, Provide customer support, Ensure platform security, and Analyze usage patterns. We do not use your data for unauthorized purposes."
    },
    {
      title: "4. AI Voice Agent (Metarix Alive) Data Usage",
      content: "If you use Metarix Alive, please note: Calls may be processed and stored for system improvement and quality purposes. Voice recordings may be analyzed by AI systems. Clients are responsible for informing their customers if call recording disclosures are required under applicable laws. Metarix is not responsible for legal non-compliance by clients using the voice agent."
    },
    {
      title: "5. Data Sharing & Disclosure",
      content: "We do not sell or rent your personal information. We may share data only with: Trusted service providers (cloud hosting, APIs, telephony providers, payment gateways), Legal authorities when required by law, Affiliates or successors in case of business restructuring. All third-party providers are expected to maintain appropriate data protection standards."
    },
    {
      title: "6. Data Storage & Security",
      content: "We implement industry-standard security practices to protect your data. However: No online system is 100% secure. We cannot guarantee absolute security of transmitted data. You are responsible for safeguarding your login credentials."
    },
    {
      title: "7. Cookies & Tracking Technologies",
      content: "We may use cookies and tracking technologies to: Remember user preferences, Analyze traffic and usage behavior, Improve website performance, and Enhance user experience. You may control cookie preferences through your browser settings."
    },
    {
      title: "8. Your Rights",
      content: "You may have the right to: Request access to your personal data, Correct inaccurate information, Request deletion of your data, Withdraw consent (where applicable), and Opt out of marketing communications.\n\nTo exercise your rights, contact us at: connect@metarix.in or +91 9363735061."
    },
    {
      title: "9. Children's Privacy",
      content: "Our Services are available to businesses and individuals. If a user is under 18 years of age, parental or legal guardian consent is required. We do not knowingly collect personal information from minors without proper consent."
    },
    {
      title: "10. International Users",
      content: "Metarix operates from Coimbatore, Tamil Nadu, India. If you access our Services from outside India: You acknowledge that your data may be processed and stored in India or other countries where our service providers operate. You consent to cross-border data transfers as necessary to provide our Services."
    },
    {
      title: "11. Data Retention",
      content: "We retain data only for as long as: Necessary to provide Services, Required for legal or compliance purposes, Needed to resolve disputes or enforce agreements. After that, data may be securely deleted."
    },
    {
      title: "12. Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. When updates occur: The “Effective Date” will be revised. Significant changes may be communicated via website or email. Continued use of our Services after updates constitutes acceptance of the revised policy."
    },
    {
      title: "13. Contact Us",
      content: "If you have any questions about this Privacy Policy or your data, please contact:\n\nMetarix\nOperated by Aer Hearing Essentials\nCoimbatore, Tamil Nadu, India\n📧 Email: connect@metarix.in\n📞 Phone: +91 9363735061"
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
            <Lock className="text-brand-coral" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Effective Date: January 17, 2026</p>
          
          <div className="mt-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
             <p className="text-gray-300 leading-relaxed text-lg italic">
                This Privacy Policy describes how Metarix, operated under Aer Hearing Essentials (“Metarix”, “we”, “our”, or “us”), collects, uses, and protects your information when you use our website, AI systems, automation services, and AI voice agent solutions, including Metarix Alive (collectively, the “Services”).
             </p>
             <p className="mt-6 text-gray-400">
                By accessing or using our Services, you agree to the practices described in this Privacy Policy.
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
           <Eye className="mx-auto text-brand-coral/50 mb-4" size={48} />
           <p className="text-gray-500 text-sm">
             Your privacy is our priority. We are committed to transparency in our AI implementations.
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

export default Privacy;