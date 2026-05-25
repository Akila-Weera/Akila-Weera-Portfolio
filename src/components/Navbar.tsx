import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Content', href: '#content' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 transition-all duration-300 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-giant text-3xl tracking-wide uppercase">
          Akila Weera
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-3 rounded-full border border-white/10">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleTheme} className="text-white hover:text-primary transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a 
            href="#contact"
            className="inline-flex items-center justify-center outline-btn"
          >
            Start a Project &#x2197;
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-white hover:text-primary transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-dark-surface border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center accent-btn w-full"
          >
            Start a Project &#x2197;
          </a>
        </motion.div>
      )}
    </nav>
  );
}
