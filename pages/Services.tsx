
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AiImage from '../components/AiImage';

interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  accent: string;
  imagePrompt: string;
}

const servicesList: ServiceDetail[] = [
  {
    id: "loan-settlement",
    title: "Loan Settlement",
    shortDesc: "Strategic resolution for individuals and SMEs facing documented debt stress.",
    longDesc: "Loan settlement is a structured negotiation process where we help you reach an agreement with your lender to pay off a debt for less than the total balance. This is typically pursued in cases of genuine financial hardship. We audit your case, draft hardship reports, and provide a professional framework for dialogue with the bank's resolution desk.",
    features: ["Credit Card Resolution", "Unsecured Personal Loans", "SME/MSME Debt Strategy", "Hardship Case Documentation"],
    accent: "bg-indigo-950 text-white",
    imagePrompt: "Professional financial negotiation, luxury office, documents on table, soft lighting"
  },
  {
    id: "ipr-registration",
    title: "IPR Registration",
    shortDesc: "Comprehensive protection for your brand, creative output, and innovations.",
    longDesc: "Our Intellectual Property Rights services ensure that your commercial and creative assets are legally safeguarded. From searching for trademark availability to filing copyright applications, we handle the complex documentation required to secure your competitive edge in the market.",
    features: ["Trademark Filing & Prosecution", "Copyright Registration", "Design & Patent Advisory", "Brand Protection Strategy"],
    accent: "bg-white border-slate-100",
    imagePrompt: "Abstract blue and silver digital shield concept, high-tech minimalism"
  },
  {
    id: "property-registration",
    title: "Property Registration",
    shortDesc: "Expert documentary support for real estate transactions and statutory compliance.",
    longDesc: "Navigating property laws in India requires extreme precision. We provide end-to-end consultancy for the registration of various property-related documents. This includes verifying title chains, calculating appropriate stamp duty, and ensuring all statutory requirements are met at the sub-registrar's office.",
    features: ["Sale & Conveyance Deeds", "Gift & Relinquishment Deeds", "Lease & Rent Agreements", "Stamp Duty Advisory", "Property Document Audits"],
    accent: "bg-white border-slate-100",
    imagePrompt: "Modern architectural lines, blue glass building detail, minimalist"
  },
  {
    id: "professional-documents",
    title: "Document Drafting",
    shortDesc: "Precision drafting for commercial contracts and banking correspondence.",
    longDesc: "Clear, document-backed communication is the cornerstone of professional resolution. We specialize in drafting formal letters to banks, commercial contracts for SMEs, and legal declarations that hold weight in administrative and banking protocols.",
    features: ["Bank Correspondence Drafting", "Commercial Service Agreements", "Hardship Reports", "Affidavits & Declarations"],
    accent: "bg-white border-slate-100",
    imagePrompt: "Fine fountain pen resting on premium paper, elegant stationery"
  },
  {
    id: "insurance-claims",
    title: "Insurance Claims",
    shortDesc: "Advisory for policy-related grievances and claim resolution support.",
    longDesc: "If your insurance claim has been unfairly rejected or delayed, we help you understand the policy fine print and draft formal representations to the insurance provider or the Ombudsman, ensuring your case is presented factually.",
    features: ["Claim Document Review", "Ombudsman Representations", "Rejected Claim Advisory"],
    accent: "bg-white border-slate-100",
    imagePrompt: "Blue safety shield icon, abstract glass textures"
  },
  {
    id: "credit-rebuilding",
    title: "Credit Rebuilding",
    shortDesc: "Strategic post-settlement guidance focused on financial recovery.",
    longDesc: "Resolution is the first step toward health. We provide actionable advisory on how to rebuild your CIBIL score and credit profile after a settlement, focusing on disciplined credit habits and secure financial products.",
    features: ["CIBIL Score Analysis", "Financial Recovery Roadmap", "Secured Credit Advisory"],
    accent: "bg-white border-slate-100",
    imagePrompt: "Abstract upward arrow growth chart, clean geometric style"
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-[11px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-8">Service Portfolio</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
            Strategic Solutions for <br/>
            <span className="text-indigo-600 font-light italic underline decoration-indigo-100 underline-offset-8">Complexity.</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            SettleEdge Legal provides corporate-grade consultancy. Click on any service to understand our professional approach and deliverables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={`${service.accent} p-10 rounded-2xl border cursor-pointer group hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col justify-between h-[450px] relative overflow-hidden`}
            >
              {service.accent.includes("bg-white") && (
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-slate-50 rounded-full group-hover:bg-indigo-50 transition-colors" />
              )}
              
              <div className="relative z-10">
                <h4 className={`text-2xl font-bold mb-6 tracking-tight ${service.accent.includes('text-white') ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h4>
                <p className={`text-sm font-light leading-relaxed mb-8 ${service.accent.includes('text-white') ? 'text-slate-400' : 'text-slate-500'}`}>
                  {service.shortDesc}
                </p>
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className={`text-[10px] uppercase tracking-widest font-bold ${service.accent.includes('text-white') ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      • {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[80vh] lg:h-auto"
              >
                <div className="w-full lg:w-2/5 h-64 lg:h-auto">
                  <AiImage prompt={selectedService.imagePrompt} className="h-full w-full" />
                </div>
                <div className="w-full lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center overflow-y-auto">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase mb-4">Detailed View</h2>
                  <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">{selectedService.title}</h3>
                  <p className="text-slate-500 font-light text-lg leading-relaxed mb-10">
                    {selectedService.longDesc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span className="text-sm font-medium text-slate-700 tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      window.location.hash = "#/contact";
                    }}
                    className="bg-slate-900 text-white py-5 px-10 rounded-full font-bold tracking-[0.3em] text-[10px] uppercase hover:bg-indigo-950 transition-all w-fit"
                  >
                    Discuss My Case
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
