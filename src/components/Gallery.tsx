import { motion } from 'motion/react';

const galleryItems = [
  { id: 1, url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000', size: 'large' },
  { id: 2, url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 3, url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 4, url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000', size: 'medium' },
  { id: 5, url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { id: 6, url: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=1000', size: 'large' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
           <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Editorial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-beige"
          >
            Fashion <span className="italic">Moments</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${item.size === 'medium' ? 'md:col-span-2' : ''}`}
            >
              <img
                src={item.url}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest font-bold border-b border-white pb-1">View Story</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
