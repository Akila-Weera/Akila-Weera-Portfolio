import { motion } from 'motion/react';
import { User, Briefcase, Zap, Globe, Cpu, Layout, PlayCircle } from 'lucide-react';

const logos = [
  { name: 'WEMIXT', icon: <Zap size={24} /> },
  { name: 'LEARNOOZ', icon: <PlayCircle size={24} /> },
  { name: 'VIWORN', icon: <Layout size={24} /> },
  { name: 'AGRICULTURE', icon: <Globe size={24} /> },
  { name: 'TECH LABS', icon: <Cpu size={24} /> },
  { name: 'VENTURES', icon: <Briefcase size={24} /> },
];

const floatingAvatars = [
  { top: '40%', left: '5%', size: 'w-16 h-16' },
  { top: '20%', left: '20%', size: 'w-20 h-20' },
  { top: '10%', left: '35%', size: 'w-24 h-24' },
  { top: '5%', left: '50%', size: 'w-28 h-28', transform: '-translate-x-1/2' },
  { top: '10%', left: '65%', size: 'w-24 h-24' },
  { top: '20%', left: '80%', size: 'w-20 h-20' },
  { top: '40%', left: '95%', size: 'w-16 h-16', transform: '-translate-x-full' }
];

export default function Collaborators() {
  return (
    <section className="py-12 md:py-20 px-6 border-b border-white/5 relative overflow-hidden bg-dark-surface/40">
      <div className="absolute inset-0 bg-stars z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center pt-20">
        
        {/* Floating Avatars Background */}
        <div className="absolute top-0 left-0 w-full h-[300px] pointer-events-none hidden md:block">
          {floatingAvatars.map((avatar, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              className={`absolute rounded-full border-2 border-white/10 bg-dark-surface flex items-center justify-center overflow-hidden ${avatar.size}`}
              style={{ 
                top: avatar.top, 
                left: avatar.left,
                transform: avatar.transform || 'none'
              }}
            >
               <User className="text-white/20 w-1/2 h-1/2" />
               <div className="absolute inset-0 bg-primary/20 opacity-0 mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-12 mt-16">
           <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            Trusted by & <span className="text-primary">Collaborating With</span>
          </h2>
        </div>

        {/* Logos Panel */}
        <div className="w-full max-w-5xl glass-panel p-8 md:p-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 place-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-default">
                <span className="text-primary/80">{logo.icon}</span>
                <span className="font-display font-medium text-lg md:text-xl tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
