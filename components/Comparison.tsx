import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-coral/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Leading Brands Choose Metarix</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] md:w-5/6 mx-auto border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-left text-gray-500 font-medium w-1/4 pl-4">Feature</th>
                <th className="py-6 text-center text-gray-500 font-medium w-1/4">Traditional Call Center</th>
                <th className="py-6 text-center text-gray-500 font-medium w-1/4">Other AI Agents</th>
                <th className="py-6 text-center text-brand-coral font-bold text-xl w-1/4 bg-white/5 rounded-t-xl border-t border-x border-white/5">Metarix Alive</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { label: "Availability", trad: "9-5 or Shift based", other: "24/7 Always On", meta: "24/7 Always On" },
                { label: "Response Latency", trad: "Instant", other: "High (~1000ms)", meta: "Ultra-low (~300ms)" },
                { label: "Cost Per Minute", trad: "₹10.00", other: "₹8.00+", meta: "₹5.90" },
                { label: "Scalability", trad: "Slow (Hiring)", other: "Instant", meta: "Instant" },
                { label: "Conversation Quality", trad: "Inconsistent", other: "Robotic / Stiff", meta: "Human-like & Fluid" }
              ].map((row, idx) => (
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