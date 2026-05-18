import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#collections' },
    { name: 'Custom Tailoring', href: '#tailoring' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-black/95 backdrop-blur-lg py-4 border-b border-gold/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-serif font-bold tracking-tighter"
          >
            <span className={`${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-luxury-black'} transition-colors duration-300`}>PATHAN</span>
            <span className={` ${isScrolled ? 'text-gold' : 'text-luxury-black'} transition-colors duration-300`}>LIFE</span>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300 ${
                isScrolled ? 'text-white/80' : 'text-luxury-black/80'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className={`hover:text-gold transition-colors ${isScrolled ? 'text-white' : 'text-luxury-black'}`}>
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className={`hover:text-gold transition-colors relative ${isScrolled ? 'text-white' : 'text-luxury-black'}`}>
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button className="hidden sm:block hover:text-gold transition-colors">
            <User size={22} strokeWidth={1.5} className={isScrolled ? 'text-white' : 'text-luxury-black'} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-0 left-0 w-full bg-luxury-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-serif text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-8 border-t border-white/10 w-2/3 flex justify-center space-x-8 text-white/60"
            >
               <Search size={24} />
               <ShoppingBag size={24} />
               <User size={24} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
