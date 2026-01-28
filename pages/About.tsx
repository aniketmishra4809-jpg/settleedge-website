
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-[12px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Our Identity</motion.h2>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            A Professional Bridge to <br/>
            <span className="text-indigo-600 font-light italic">Financial Clarity.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-12 text-2xl text-slate-500 font-light leading-relaxed max-w-3xl">
            SettleEdge Legal was established to bring corporate-grade consultancy and professional documentation standards to the individual and SME loan resolution space in India.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-start mb-48">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-10 text-slate-600 leading-relaxed font-light text-lg"
          >
            <motion.p variants={fadeInUp} className="text-xl font-medium text-slate-900 border-l-4 border-indigo-600 pl-8">
              We operate on the foundation of transparency. In an environment often clouded by aggressive tactics, SettleEdge Legal stands for calm, analytical, and professional resolution.
            </motion.p>
            <motion.p variants={fadeInUp} className="pl-8">
              Our consultancy helps you navigate the intricacies of banking protocols and documentation requirements. By organizing your case with precision, we help you present a professional resolution proposal to your lenders.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-10 border border-slate-100 rounded-2xl shadow-sm"
            >
              <h3 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-600" />
                Legal & Advocacy Panel
              </h3>
              <p className="text-[15px] leading-relaxed">
                While SettleEdge Legal operates as a consultancy specializing in financial documentation and resolution strategy, we maintain a panel of experienced advocates. For legal representation and formal compliance matters, we work exclusively with these qualified professionals.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-950 aspect-square rounded-3xl relative overflow-hidden flex items-center justify-center group shadow-2xl"
          >
             <div className="text-center p-12 relative z-10">
                <motion.span 
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-white text-[280px] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none tracking-tighter"
                >
                  SE
                </motion.span>
                <div className="relative">
                  <motion.p 
                    initial={{ letterSpacing: "0.1em" }}
                    whileInView={{ letterSpacing: "0.2em" }}
                    className="text-white font-light text-2xl uppercase"
                  >
                    Integrity • Resolve • Edge
                  </motion.p>
                  <div className="w-20 h-px bg-indigo-500 mx-auto mt-8" />
                </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white border border-slate-100 rounded-3xl p-16 md:p-24 shadow-2xl shadow-slate-100"
        >
          <motion.h2 variants={fadeInUp} className="text-[11px] font-bold tracking-[0.5em] text-slate-400 uppercase mb-20 text-center">Strict Operational Boundaries</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Consultancy Only",
                text: "We are not a bank, NBFC, or lender. We do not provide credit or financial advances under any circumstances."
              },
              {
                title: "Zero Recovery",
                text: "We do not collect debts for lenders or act as recovery agents. Our allegiance is strictly to the borrower's resolution path."
              },
              {
                title: "Advocacy Support",
                text: "Formal litigation is handled via our panel of advocates. SettleEdge Legal focuses on the strategy and documentation."
              }
            ].map((bound, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-widest">{bound.title}</h3>
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed pl-6">
                  {bound.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
