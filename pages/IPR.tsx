
import React from 'react';
import { motion } from 'framer-motion';
import AiImage from '../components/AiImage';

const IPR: React.FC = () => {
  const services = [
    {
      title: "Trademark Registration",
      desc: "Protecting your brand identity and logos through comprehensive filing support and documentary precision."
    },
    {
      title: "Copyright Filing",
      desc: "Documentary assistance for literary, musical, and artistic works, ensuring creators' rights are established."
    },
    {
      title: "Design & Patents",
      desc: "Specialized support for technical innovations and unique industrial designs, specifically tailored for SMEs."
    },
    {
      title: "Documentation Support",
      desc: "Drafting formal commercial agreements and protecting business interests through expert filing advisory."
    }
  ];

  return (
    <div className="py-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[12px] font-bold tracking-[0.3em] text-indigo-600 uppercase mb-6">IPR Services</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Protecting <span className="text-indigo-600 font-light italic">Intellectual Value.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
              SettleEdge Legal provides specialized documentation support for SMEs and individuals to safeguard their intellectual and commercial assets across India.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <AiImage prompt="Abstract blueprint of a technical design, indigo and white colors, architectural style" aspectRatio="16:9" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-12 bg-slate-50 rounded-[2rem] border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-8">{item.desc}</p>
              <a href="#/contact" className="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.2em] border-b border-indigo-100 pb-1 hover:text-indigo-800 transition-colors">Inquire Now</a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-[2.5rem] p-16 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Need Specialized Documentation?</h2>
            <p className="text-slate-400 mb-10 font-light leading-relaxed">Let our consultants manage the procedural documentation so you can focus on innovation and growth.</p>
            <a href="#/contact" className="bg-white text-slate-950 px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-indigo-50 transition-all inline-block shadow-2xl">Request a Quote</a>
          </div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default IPR;
