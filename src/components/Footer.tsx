import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="text-2xl font-serif font-bold tracking-tighter">
              <span>PATHAN</span>
              <span className="text-gold font-bold">LIFE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Crafting premium ethnic wear for the modern gentleman. 
              Tradition reinvented with luxury aesthetics and bespoke precision.
            </p>
            <div className="flex space-x-6 text-gold">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold border-l-2 border-gold pl-4">Collections</h5>
            <ul className="space-y-4">
              {['Signature suits', 'Royal Kurta', 'Luxury Jubbas', 'Silk Series', 'Eid Edit'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold border-l-2 border-gold pl-4">Inquiry</h5>
            <ul className="space-y-4">
              {['Tailoring Process', 'Bespoke Guide', 'Size Chart', 'Shipping Info', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold border-l-2 border-gold pl-4">Flagship Store</h5>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-gold shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  128 Fashion Ave, Suite 500,<br />Downtown Design District
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-gold shrink-0" />
                <span className="text-sm text-white/60">+1 (800) PATHAN-LIFE</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-gold shrink-0" />
                <span className="text-sm text-white/60">atelier@pathanlife.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            &copy; {currentYear} PATHANLIFE ATELIER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-white/20 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">T&C</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
