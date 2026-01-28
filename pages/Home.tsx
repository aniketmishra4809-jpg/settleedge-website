
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import AiImage from '../components/AiImage';

const TiltCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });
  
  const innerX = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });
  const innerY = useSpring(useTransform(y, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  function onMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-lg aspect-[4/3] bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-visible border border-slate-100 flex items-center justify-center p-1 group transition-shadow hover:shadow-[0_70px_120px_-20px_rgba(79,70,229,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <motion.div 
        style={{ x: innerX, y: innerY, translateZ: 50 }}
        className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-inner"
      >
        <AiImage prompt="Minimalist luxury architectural detail, glass and steel, deep indigo tones" className="w-full h-full" />
        <div className="absolute inset-0 bg-indigo-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
           <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 border border-white/20">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
           </div>
           <h3 className="text-xl font-bold uppercase tracking-[0.3em]">Integrity First</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-[120px]"
        />
      </div>

      <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              style={{ opacity, scale, y: textY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block py-1 px-4 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.3em]">Premium Resolution Consultancy</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[1] mb-12">
                Resolution with <br/>
                <span className="text-indigo-600 font-light italic">Edge and Precision.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-14 leading-relaxed max-w-xl font-light">
                Professional consultancy for loan resolution, property documentation, and IPR. We deliver structured strategies focused on transparency and legal integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 mb-20">
                <Link
                  to="/contact"
                  className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.25em] hover:bg-indigo-950 transition-all shadow-2xl shadow-indigo-200/50 active:scale-95"
                >
                  Start Evaluation
                </Link>
                <Link
                  to="/services"
                  className="group flex items-center gap-4 text-slate-700 px-6 py-5 font-bold text-[12px] uppercase tracking-[0.25em] hover:text-indigo-600 transition-colors"
                >
                  Explore Services
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>→</motion.span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center perspective-[1500px]"
            >
              <TiltCard />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-52 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { 
                num: "01", 
                title: "Advocacy", 
                text: "We advocate for borrowers through professional dialogue and document-backed planning." 
              },
              { 
                num: "02", 
                title: "Compliance", 
                text: "Property and IPR documentation handled with strict adherence to statutory Indian laws." 
              },
              { 
                num: "03", 
                title: "Vision", 
                text: "Resolution is the first step toward rebuilding financial health and commercial stability." 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-2xl bg-white border border-transparent hover:border-indigo-100 hover:shadow-xl transition-all duration-500"
              >
                <span className="text-indigo-600 font-black text-7xl opacity-10 mb-8 block tracking-tighter group-hover:opacity-20 transition-opacity">{item.num}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-[0.15em] uppercase">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
