import React from 'react';

const Comparison: React.FC = () => {
  const comparisonData = [
    { label: "Availability", trad: "9-5 or Shift based", other: "24/7 Always On", meta: "24/7 Always On" },
    { label: "Response Latency", trad: "Instant", other: "High (~1000ms)", meta: "Ultra-low (~300ms)" },
    { label: "Cost Per Minute", trad: "₹10.00", other: "₹8.00+", meta: "₹5.75" },
    { label: "Scalability", trad: "Slow (Hiring)", other: "Instant", meta: "Instant" },
    { label: "Conversation Quality", trad: "Inconsistent", other: "Robotic / Stiff", meta: "Human-like & Fluid" },
    { label: "Language Support", trad: "Limited / Hire Dependent", other: "Major Indian / Global Langs", meta: "22 Indian & Global Langs" },
    { label: "Analytics & Insights", trad: "Manual / Delayed Reporting", other: "Basic Call Logs", meta: "Live Dashboard & Sentiment" }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-coral/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Leading Brands Choose Metarix</h2>
          <p className="text-gray-500 mt-4 md:hidden text-sm">Compare us with the rest</p>
        </div>

        {/* Mobile View: Modern Card Stack */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-[#1F1F1F] border border-white/5 rounded-2xl p-5 relative overflow-hidden shadow-lg">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                {item.label}
              </h3>

              <div className="space-y-3">
                {/* Traditional */}
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-500 font-medium">Traditional Center</span>
                  <span className="text-gray-400">{item.trad}</span>
                </div>

                {/* Other AI */}
                <div className="flex justify-between items-center text-sm pb-1">
                  <span className="text-gray-500 font-medium">Other AI Agents</span>
                  <span className="text-gray-400">{item.other}</span>
                </div>

                {/* Metarix Highlight */}
                <div className="relative mt-2">
                  <div className="absolute inset-0 bg-brand-coral/10 rounded-xl blur-sm"></div>
                  <div className="relative bg-gradient-to-r from-brand-card to-[#2A2A2A] border border-brand-coral/30 rounded-xl p-3 flex justify-between items-center shadow-glow-sm">
                    <span className="text-brand-coral font-bold text-sm flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse"></div>
                      Metarix
                    </span>
                    <span className="text-white font-bold text-base">{item.meta}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-6 text-center">
             <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2 text-brand-coral text-sm font-bold">
                Best Value & Performance
             </div>
          </div>
        </div>

        {/* Desktop View: Classic Comparison Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-5/6 mx-auto border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-left text-gray-500 font-medium w-1/4 pl-4">Feature</th>
                <th className="py-6 text-center text-gray-500 font-medium w-1/4">Traditional Call Center</th>
                <th className="py-6 text-center text-gray-500 font-medium w-1/4">Other AI Agents</th>
                <th className="py-6 text-center text-brand-coral font-bold text-xl w-1/4 bg-white/5 rounded-t-xl border-t border-x border-white/5">Metarix Alive</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-center text-gray-500">{row.trad}</td>
                  <td className="py-4 px-4 text-center text-gray-500">{row.other}</td>
                  <td className="py-4 px-4 text-center font-semibold text-white bg-white/5 border-x border-white/5">
                    {row.meta}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-6"></td>
                <td className="py-6"></td>
                <td className="py-6"></td>
                <td className="py-6 text-center bg-white/5 rounded-b-xl border-x border-b border-white/5">
                    <span className="text-brand-coral font-bold">Best Value & Performance</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;