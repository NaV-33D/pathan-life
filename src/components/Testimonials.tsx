import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Fahad',
    role: 'Business Consultant',
    content: 'The attention to detail in my bespoke Pathani suit was beyond expectations. The silk blend fabric feels incredibly premium.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Omar Khayyam',
    role: 'Creative Director',
    content: 'Finally, a brand that understands modern Islamic fashion. The White Jubba I ordered fits perfectly and looks stunning at events.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Zayed Malik',
    role: 'Tech Entrepreneur',
    content: 'PathanLife has redefined luxury ethnic wear for me. Their digital measurement process is seamless and accurate.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-beige"
          >
            Voice of <span className="italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl relative shadow-sm border border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-8 left-8 text-gold/10 w-16 h-16 pointer-events-none" />
              
              <div className="mb-6 relative">
                 <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold p-1">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                 </div>
                 <div className="absolute -bottom-2 -right-2 bg-gold text-white p-2 rounded-full">
                    <Star size={12} fill="currentColor" />
                 </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold" fill="currentColor" />
                ))}
              </div>

              <p className="text-beige/70 mb-8 italic leading-relaxed font-sans font-light">
                "{t.content}"
              </p>

              <div>
                <h4 className="font-bold text-beige uppercase tracking-widest text-sm">{t.name}</h4>
                <p className="text-gold text-xs font-medium mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
