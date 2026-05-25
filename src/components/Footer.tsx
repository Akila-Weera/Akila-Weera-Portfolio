import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 px-6 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        
        {/* Left Side */}
        <div className="md:col-span-6 lg:col-span-8 flex flex-col items-start gap-4">
          <span className="font-giant text-4xl tracking-widest text-white uppercase">Akila Weera</span>
          <p className="text-primary font-medium tracking-wide">Builder • Entrepreneur • AI Creator</p>
          <p className="text-white/50 max-w-sm mt-4 leading-relaxed text-balance">
            Building products, businesses and ideas that move people forward. Focuses on Artificial Intelligence, Growth, and Creative Ventures.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-white font-medium mb-2">Quick Links</h4>
          {['About', 'Content', 'Services', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm">
              {link}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-white font-medium mb-2">Connect</h4>
          {['LinkedIn', 'YouTube', 'Instagram', 'GitHub', 'X'].map(social => (
            <a key={social} href="#" className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2">
              {social} <span className="text-[10px] opacity-50">&#x2197;</span>
            </a>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-xs text-center md:text-left gap-4">
        <p>© {new Date().getFullYear()} Akila Weera — Building the Future Through Technology & Creativity</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
