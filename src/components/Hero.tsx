import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import hero from "../assets/Hero.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hero}
          alt="Luxury Pathani Fashion"
          className="w-full h-full object-cover grayscale-[10%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-luxury-black z-10" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
        >
          The Finest Handcrafted Ethnic Wear
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight"
        >
          Tradition Worn <br /> 
          <span className="italic font-normal">With Pride</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the intersection of cultural heritage and modern luxury. 
          Bespoke tailoring for the modern gentleman.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#collections"
            className="group relative px-10 py-5 bg-gold text-luxury-black font-semibold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a
            href="#tailoring"
            className="px-10 py-5 border border-white/30 text-white font-medium text-sm uppercase tracking-widest backdrop-blur-sm hover:bg-white hover:text-luxury-black transition-all duration-300"
          >
            Customize Outfit
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] rotate-90 origin-left ml-4">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/80 to-transparent" />
      </motion.div>
    </section>
  );
}
