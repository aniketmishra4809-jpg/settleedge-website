
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    loanType: 'Credit Card',
    lender: '',
    city: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-slate-100 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[11px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Consultation</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
              Request a Confidential <span className="text-indigo-600 font-light italic">Evaluation.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-16 leading-relaxed max-w-xl font-light">
              Every resolution journey begins with understanding. Share your details in confidence, and one of our advisors will reach out to understand your options.
            </p>
            
            <div className="space-y-12">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
                  title: "Confidentiality Assured",
                  desc: "Your financial information is treated with the highest degree of privacy and professional ethics."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  title: "Professional Response",
                  desc: "Expect a call from us within 24-48 working hours for a preliminary discussion."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover="hover"
                  initial="initial"
                  className="flex items-start gap-6 group cursor-default"
                >
                  <motion.div 
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 10 }
                    }}
                    className="flex items-start gap-6 w-full"
                  >
                    <motion.div 
                      variants={{
                        initial: { scale: 1, rotate: 0 },
                        hover: { 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { type: "spring", stiffness: 300, damping: 10 }
                        }
                      }}
                      className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-sm transition-colors group-hover:text-indigo-600">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[2.5rem] blur-3xl -z-10 translate-y-12 scale-90" />
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Inquiry Received</h2>
                  <p className="text-slate-500 font-light mb-12">Your case details are safe with us. An advisor will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold text-[11px] uppercase tracking-[0.3em] border-b-2 border-indigo-100 pb-1 hover:border-indigo-600 transition-all"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b border-slate-200 py-3 bg-transparent focus:border-indigo-600 outline-none transition-all text-slate-900 font-light placeholder-slate-300"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full border-b border-slate-200 py-3 bg-transparent focus:border-indigo-600 outline-none transition-all text-slate-900 font-light placeholder-slate-300"
                        placeholder="+91 00000 00000"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">Loan Type</label>
                      <select 
                        className="w-full border-b border-slate-200 py-3 bg-transparent focus:border-indigo-600 outline-none transition-all text-slate-900 font-light"
                        value={formState.loanType}
                        onChange={(e) => setFormState({...formState, loanType: e.target.value})}
                      >
                        <option>Credit Card</option>
                        <option>Personal Loan</option>
                        <option>MSME Business Loan</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">Lender Bank</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b border-slate-200 py-3 bg-transparent focus:border-indigo-600 outline-none transition-all text-slate-900 font-light placeholder-slate-300"
                        placeholder="e.g. HDFC, ICICI"
                        value={formState.lender}
                        onChange={(e) => setFormState({...formState, lender: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">City</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border-b border-slate-200 py-3 bg-transparent focus:border-indigo-600 outline-none transition-all text-slate-900 font-light placeholder-slate-300"
                      placeholder="e.g. Mumbai"
                      value={formState.city}
                      onChange={(e) => setFormState({...formState, city: e.target.value})}
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-indigo-600 transition-colors">Context (Optional)</label>
                    <textarea 
                      className="w-full border border-slate-100 bg-slate-50/50 rounded-2xl p-6 h-32 outline-none focus:border-indigo-200 focus:bg-white transition-all text-slate-900 font-light text-sm"
                      placeholder="Briefly describe your current situation..."
                      value={formState.details}
                      onChange={(e) => setFormState({...formState, details: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 text-white py-5 rounded-full font-bold tracking-[0.3em] text-[11px] hover:bg-indigo-950 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
                  >
                    SUBMIT EVALUATION
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
