import { motion } from 'motion/react';
import { Play, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Media() {
  return (
    <section id="content" className="py-12 md:py-20 px-6 border-b border-white/5 relative bg-dark-surface/30">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-2 text-primary font-medium border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
            <span>✦</span>
            <span className="text-white/80 tracking-wide uppercase text-sm font-sans">Introduction & Content</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white max-w-2xl mb-4">
            Hear From Me
          </h2>
          <p className="text-white/60 font-sans max-w-2xl text-lg">
            A deeper dive into my vision, projects, and the knowledge I share with the world. Watch my introduction and explore my content.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="w-full max-w-4xl mx-auto glass-panel p-2 md:p-4 mb-20 group cursor-pointer relative overflow-hidden">
          <div className="aspect-video bg-dark border border-white/10 rounded-lg relative overflow-hidden flex items-center justify-center group-hover:border-primary/50 transition-colors">
            
            {/* Dark gradient overlay for sleekness */}
            <div className="absolute inset-0 bg-gradient-to-tr from-dark via-dark/80 to-transparent z-0"></div>
            
            {/* Play Button */}
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center relative z-10 group-hover:scale-110 shadow-[0_0_40px_rgba(242,125,38,0.4)] transition-all">
              <Play fill="currentColor" size={32} className="ml-2" />
            </div>

            {/* Video Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white z-10">
              <div className="flex flex-col">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">Introduction</span>
                <span className="font-sans font-medium text-xl md:text-2xl drop-shadow-md">The Vision of Akila Weera</span>
              </div>
              <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded backdrop-blur-md">Play Video</span>
            </div>
          </div>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="glass-panel p-8 flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 rounded border border-white/20 bg-white/5 flex items-center justify-center mb-2 group-hover:border-primary/50 transition-colors">
              <Youtube className="text-white/80 group-hover:text-primary transition-colors" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">YouTube</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-4 flex-1">
              Deep dives into AI, entrepreneurship, and digital marketing. Long-form content breaking down complex concepts.
            </p>
            <a href="#" className="text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              Subscribe <span>&#x2192;</span>
            </a>
          </div>

          <div className="glass-panel p-8 flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 rounded border border-white/20 bg-white/5 flex items-center justify-center mb-2 group-hover:border-primary/50 transition-colors">
              <Instagram className="text-white/80 group-hover:text-primary transition-colors" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Instagram</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-4 flex-1">
              Short-form insights, daily updates, and behind-the-scenes building multiple ventures.
            </p>
            <a href="#" className="text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              Follow <span>&#x2192;</span>
            </a>
          </div>

          <div className="glass-panel p-8 flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 rounded border border-white/20 bg-white/5 flex items-center justify-center mb-2 group-hover:border-primary/50 transition-colors">
              <Twitter className="text-white/80 group-hover:text-primary transition-colors" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">X / Twitter</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-4 flex-1">
              Quick thoughts on Data Science, AI trends, and startup ecosystem. Public building updates.
            </p>
            <a href="#" className="text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              Follow <span>&#x2192;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
