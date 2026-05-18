/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Tailoring from './components/Tailoring';
import MeasurementForm from './components/MeasurementForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-luxury-black text-beige selection:bg-gold selection:text-white min-h-screen overflow-x-hidden">
      {/* Universal Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <section className="relative z-20">
          <Featured />
        </section>
        
        <Tailoring />
        
        <MeasurementForm />
        
        <Gallery />
        
        <Testimonials />
        
        <Newsletter />
      </main>
      
      <Footer />
      
      {/* Floating Action Button for Support/Consultation */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gold text-white rounded-full shadow-2xl z-40 flex items-center justify-center hover:bg-gold-dark transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </motion.button>
    </div>
  );
}

// npx plugins add vercel/vercel-plugin