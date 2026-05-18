import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-gold/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-gold/10 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl text-white">
            Join the <span className="italic text-gold italic">Inner Circle</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
            Subscribe to receive exclusive collection drops, seasonal style guides, 
            and private event invitations.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-gold transition-colors font-medium"
            />
            <button className="px-10 py-5 bg-gold text-luxury-black font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2">
              Subscribe <Send size={18} />
            </button>
          </form>
          
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            Privacy policy applied. No spam, only luxury.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
