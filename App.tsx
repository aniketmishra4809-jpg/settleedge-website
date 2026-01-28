
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import IPR from './pages/IPR';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-indigo-100">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link to="/" className="text-xl font-bold tracking-[0.15em] text-slate-900 uppercase">
                SETTLE<span className="text-indigo-600">EDGE</span> <span className="font-light text-slate-400">LEGAL</span>
              </Link>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'The Process', path: '/process' },
                { name: 'FAQ', path: '/faq' },
              ].map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`nav-link text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors hover:text-indigo-600 ${
                      location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block"
            >
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-indigo-950 transition-all duration-300 shadow-lg shadow-slate-200"
              >
                Free Evaluation
              </Link>
            </motion.div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-indigo-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-100 px-8 pb-12 overflow-hidden"
            >
              <div className="flex flex-col space-y-6 pt-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'The Process', path: '/process' },
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-[13px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            {children}
          </div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-950 text-slate-300 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1">
              <h3 className="text-white text-lg font-bold mb-6 tracking-[0.2em] uppercase">SETTLEEDGE <span className="font-light text-slate-500">LEGAL</span></h3>
              <p className="text-[13px] leading-relaxed text-slate-400 font-light">
                A structured, transparent consultancy for financial resolution. Empowering individuals and businesses through informed decision-making and professional documentation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Primary Solutions</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link to="/services" className="hover:text-white transition-colors">Loan Settlement & Resolution</Link></li>
                <li><Link to="/ipr" className="hover:text-white transition-colors">IPR Documentation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Business Compliance Filing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Quick Access</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/process" className="hover:text-white transition-colors">Our Methodology</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">Common Queries</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Free Evaluation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Legal & Compliance</h4>
              <div className="space-y-4 text-[12px] text-slate-500 leading-relaxed italic">
                <p>Disclaimer: SettleEdge Legal operates strictly as a consultancy. We are not a lender, recovery agency, or a substitute for professional legal advice in litigation matters.</p>
                <p>For legal representation and compliance matters, SettleEdge Legal works with experienced advocates on panel.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-slate-600">
            <p>&copy; {new Date().getFullYear()} SettleEdge Legal Services Pvt Ltd.</p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
          <Route path="/ipr" element={<PageWrapper><IPR /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
