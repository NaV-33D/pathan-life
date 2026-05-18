import { motion } from 'motion/react';
import { Ruler, Palette, Scissors, Gift } from 'lucide-react';

const steps = [
  {
    icon: Palette,
    title: 'Choose Design',
    description: 'Select from our curated library of traditional patterns and modern silhouettes.',
    color: 'bg-gold/10'
  },
  {
    icon: Ruler,
    title: 'Precision Measurements',
    description: 'Provide your detailed measurements for a fit that feels like a second skin.',
    color: 'bg-emerald/10'
  },
  {
    icon: Scissors,
    title: 'Tailoring Process',
    description: 'Our master craftsmen meticulously cut and sew your garment with precision.',
    color: 'bg-gold/10'
  },
  {
    icon: Gift,
    title: 'Delivered to You',
    description: 'Received your bespoke garment, beautifully packaged and ready to wear.',
    color: 'bg-emerald/10'
  }
];

export default function Tailoring() {
  return (
    <section id="tailoring" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald rounded-full blur-[150px] translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">The Art of Bespoke</h4>
              <h2 className="text-4xl md:text-6xl mb-6">Expert <span className="italic text-gold">Custom Tailoring</span></h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                Every stitch tells a story of tradition. Our master tailors combine 
                centuries-old techniques with modern precision to create garments 
                perfectly suited for your unique frame.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <h5 className="text-xl font-serif text-white">Fabric Selection</h5>
                 <p className="text-white/40 text-sm">Choose from the finest silk, pima cotton, and premium blends sourced globally.</p>
               </div>
               <div className="space-y-2">
                 <h5 className="text-xl font-serif text-white">Hand Stitched</h5>
                 <p className="text-white/40 text-sm">Every detail from the collar to the cuffs is hand-finished for durability and elegance.</p>
               </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gold text-luxury-black font-extrabold text-sm uppercase tracking-[0.2em] transition-all"
            >
              Book a Consultation
            </motion.button>
          </div>

          {/* Visual Elements - Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark p-8 rounded-2xl hover:border-gold/50 transition-colors group"
              >
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform`}>
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                <div className="mt-4 flex items-center text-[10px] uppercase tracking-tighter text-gold/60 font-bold">
                  Step 0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
