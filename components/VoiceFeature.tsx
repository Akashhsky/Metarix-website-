import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Languages, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <PhoneIncoming size={32} />,
    title: "Inbound Support",
    description: "Zero wait times. Handle thousands of concurrent calls with human-like empathy and instant resolutions."
  },
  {
    icon: <PhoneOutgoing size={32} />,
    title: "Outbound Sales",
    description: "Automate lead qualification and appointment setting. Our agents dial, converse, and close with precision."
  },
  {
    icon: <Languages size={32} />,
    title: "Multilingual",
    description: "Speak to your customers in their native language. Real-time translation and native accent adaptation."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Live Dashboard & Analytics",
    description: "Track call performance, conversation quality, and agent responses in real-time with a clean, powerful dashboard."
  },
  {
    icon: <Database size={32} />,
    title: "Custom Knowledge Integration",
    description: "Feed your voice agents with custom documents, FAQs, or APIs so they can respond with accurate, business-specific answers."
  }
];

const VoiceFeature: React.FC = () => {
  return (
    <section id="voice" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Voice of Your Business, <span className="text-brand-coral">Always On.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <strong className="text-brand-coral">Metarix Alive</strong> achieves sub-300ms latency for conversations so natural, your customers won't know they're talking to AI.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-coral/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 flex flex-col items-center text-center w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
            >
              <div className="mb-6 text-brand-coral p-3 bg-brand-coral/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceFeature;