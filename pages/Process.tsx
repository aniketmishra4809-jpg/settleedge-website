
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Process: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      number: "01",
      title: "Case Discovery",
      desc: "Confidential consultation to understand your financial situation, debt structure, and genuine hardship."
    },
    {
      number: "02",
      title: "Document Audit",
      desc: "Analyzing loan agreements and statements to verify outstanding amounts and payment histories."
    },
    {
      number: "03",
      title: "Strategy",
      desc: "Mapping potential resolution paths, outlining pros, cons, and long-term credit impact."
    },
    {
      number: "04",
      title: "Mediation",
      desc: "Assisting in drafting professional correspondence and navigating lender resolution dialogues."
    },
    {
      number: "05",
      title: "Resolution",
      desc: "Guiding final payments and ensuring proper 'No Dues' certification is received."
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-indigo-600 uppercase mb-8"
          >
            Methodology
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Our Structured Approach
          </motion.h1>
          <p className="text-slate-500 font-light text-lg">A commitment to transparency, one step at a time.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline bar */}
          <motion.div 
            style={{ scaleY }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-indigo-100 origin-top -translate-x-1/2" 
          />
          
          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual indicator */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="hidden lg:flex absolute left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10" 
                />
                
                <div className="w-full lg:w-1/2 px-8">
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className={`group p-12 bg-slate-50 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-700 shadow-sm hover:shadow-xl ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                  >
                    <span className="text-7xl font-black text-slate-100 mb-4 block group-hover:text-indigo-50 transition-colors">{step.number}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="w-full lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-full mb-10">
            <div className="bg-white border border-slate-200 px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Integrity First
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to Resolve?</h2>
          <a href="#/contact" className="text-indigo-600 font-bold text-[12px] uppercase tracking-[0.3em] border-b-2 border-indigo-600 pb-1 hover:text-indigo-950 hover:border-indigo-950 transition-all">Start Step 01 Today &rarr;</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
