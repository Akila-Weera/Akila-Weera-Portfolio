import { motion } from 'motion/react';

export default function Marquee() {
  const items = [
    "WEMIXT", "✦", "LEARNOOZ", "✦", "VIWORN", "✦", 
    "WEERA AGRICULTURE", "✦", "AI PROJECTS", "✦", 
    "YOUTUBE CONTENT", "✦"
  ];

  return (
    <div className="w-full bg-dark-border/50 border-y border-white/10 py-6 overflow-hidden flex items-center relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex whitespace-nowrap w-fit"
      >
        {/* We double the items so it can seamlessly loop at 50% */}
        {[...items, ...items, ...items, ...items, ...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className={`px-4 text-xl md:text-2xl lg:text-3xl font-giant tracking-wider uppercase ${
              item === "✦" ? "text-primary" : "text-white/80"
            }`}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
