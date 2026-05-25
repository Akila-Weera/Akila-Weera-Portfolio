import { motion } from 'motion/react';

export default function About() {
  const logos = ['WEMIXT', 'Learnooz', 'Viworn', 'Weera Ag.', 'JAK W EE', 'Akila Weera'];

  return (
    <section id="about" className="py-12 md:py-20 px-6 border-b border-white/5 relative">
      <div className="absolute inset-0 bg-stars z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column Label */}
        <div className="md:col-span-4 flex items-start">
          <div className="flex items-center gap-2 text-primary font-medium border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
            <span>✦</span>
            <span className="text-white/80 tracking-wide uppercase text-sm">About Me</span>
          </div>
        </div>

        {/* Right Column Content */}
        <div className="md:col-span-8 flex flex-col items-start">
          <h3 className="font-display text-2xl md:text-3xl lg:text-5xl leading-tight md:leading-tight mb-8 text-white/90 text-balance">
            Hey there, I'm Akila Weerathunga — a technology enthusiast, entrepreneur and creator from Sri Lanka.
          </h3>
          
          <div className="flex flex-col gap-6 text-white/60 text-lg leading-relaxed max-w-3xl mb-12">
            <p>
              My journey started with curiosity about computers and evolved into building brands, launching ventures, creating content and developing technology-driven solutions.
            </p>
            <p>
              Today I'm focused on Artificial Intelligence, Data Science, Digital Marketing and business development while building projects that create real-world impact.
            </p>
            <p>
              I believe technology is most powerful when it solves practical problems, empowers people and creates opportunities for growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a href="#contact" className="accent-btn inline-flex items-center gap-2">
              Work With Me <span className="rotate-45">&#x2192;</span>
            </a>
            <a href="#projects" className="outline-btn flex items-center gap-2">
              View Projects <span>&#x2193;</span>
            </a>
          </div>

          {/* Logos Row */}
          <div className="w-full pt-12 border-t border-white/10">
            <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-8 text-center md:text-left">Ecosystem of Ventures</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {logos.map((logo, i) => (
                <div key={i} className="font-giant text-2xl tracking-wider text-white">
                  {logo}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
