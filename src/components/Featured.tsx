import { motion } from 'motion/react';
import { ShoppingCart, Eye } from 'lucide-react';

const collections = [
{
  id: 1,
  name: 'Silk-Cotton Jubba',
  category: 'Jubba Collection',
  price: '$249',
  image: 'https://images.unsplash.com/photo-1721807994340-5d4d8d29df31?auto=format&fit=crop&q=80&w=800',
  color: 'Snow White'
},
{
  id: 2,
  name: 'Royal Pathani Suit',
  category: 'Signature Suits',
  price: '$389',
  image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  color: 'Midnight Black'
},
{
  id: 3,
  name: 'Embroidered Kurta',
  category: 'Casual Luxury',
  price: '$189',
  image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  color: 'Deep Emerald'
},
  {
    id: 4,
    name: 'Eid Special Edition',
    category: 'Occasion Wear',
    price: '$459',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    color: 'Desert Gold'
  }
];

export default function Featured() {
  return (
    <section id="collections" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Exquisite Craftsmanship
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl text-beige mb-0"
            >
              Featured <span className="italic">Collections</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest border-b border-gold pb-2 text-beige hover:text-gold transition-colors"
          >
            View All Series
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Image Card */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6 rounded-sm border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="p-3 bg-beige text-luxury-black rounded-full hover:bg-gold hover:text-white transition-colors">
                    <ShoppingCart size={20} strokeWidth={1.5} />
                  </button>
                  <button className="px-6 py-3 bg-luxury-black text-beige text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold transition-colors border border-white/10">
                    Quick View
                  </button>
                  <button className="p-3 bg-beige text-luxury-black rounded-full hover:bg-gold hover:text-white transition-colors">
                    <Eye size={20} strokeWidth={1.5} />
                  </button>
                </div>
                
                <div className="absolute top-4 left-4">
                   <div className="bg-luxury-black/90 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-gold border border-gold/30">
                      {item.color}
                   </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  {item.category}
                </p>
                <h3 className="text-xl text-beige font-medium leading-tight">
                  {item.name}
                </h3>
                <p className="text-beige/60 font-serif italic text-lg pt-1">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
