
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is loan settlement legal in India?",
      a: "Yes, loan settlement is a valid commercial resolution between a borrower and a lender. It is an internal policy decision taken by banks/NBFCs to resolve bad debt. SettleEdge Legal provides consultancy to ensure your case is presented professionally within these frameworks."
    },
    {
      q: "Does settlement suit everyone?",
      a: "No. Settlement is a resolution path typically recommended for those in documented financial hardship. It has a significant impact on your credit history (marking it as 'Settled'), which may affect future credit eligibility for a period of time."
    },
    {
      q: "What is your role as a consultant?",
      a: "SettleEdge Legal provides strategic advisory, document auditing, and drafted communication support. We help you structure your case professionally so lenders can evaluate your resolution proposal clearly. For litigation, we utilize an advocate panel."
    },
    {
      q: "Are resolution outcomes guaranteed?",
      a: "No professional firm can guarantee a settlement. Final approval is always at the discretion of the lender's policy. We focus on maximizing the professional presentation and factual backing of your case to achieve the best possible structured outcome."
    },
    {
      q: "How do you handle privacy?",
      a: "At SettleEdge Legal, client confidentiality is paramount. Your financial data and case history are handled with strict professional ethics and stored within secure systems."
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[12px] font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">Knowledge Base</h2>
          <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Clarity on Resolution</h1>
          <p className="text-slate-500 font-light">Honest, factual answers for informed decision-making.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-sm border border-slate-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-10 py-7 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 tracking-tight">{faq.q}</span>
                <span className={`transform transition-all duration-300 ${openIndex === idx ? 'rotate-180 text-indigo-600' : 'text-slate-300'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-10 pb-10 text-slate-500 font-light text-sm leading-relaxed animate-in fade-in duration-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white border border-slate-100 text-center">
          <p className="text-slate-500 mb-8 font-light italic text-sm">Need a more detailed discussion for your specific case?</p>
          <a href="#/contact" className="bg-slate-900 text-white px-10 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-indigo-950 transition-colors inline-block">Consult an Advisor</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
