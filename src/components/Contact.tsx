import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 px-6 border-b border-white/5 relative bg-dark">
      <div className="absolute inset-0 bg-stars z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-2 text-primary font-medium border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
            <span>✦</span>
            <span className="text-white/80 tracking-wide uppercase text-sm">Let's Connect</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight">
            Start A Conversation
          </h2>
          
          <p className="text-xl text-white/60 max-w-md leading-relaxed">
            Whether it's a business idea, collaboration, AI project, startup opportunity or creative venture, I'd love to hear about it.
          </p>

          <a href="mailto:akilaweerastudent@gmail.com" className="inline-flex items-center gap-4 text-xl font-medium text-white hover:text-primary transition-colors mt-8">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <Mail size={20} />
            </div>
            akilaweerastudent@gmail.com
          </a>
        </div>

        {/* Right Side - Form */}
        <div className="glass-panel p-8 md:p-12">
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/60">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors text-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/60">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors text-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/60">Project Type</label>
              <select className="bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-primary transition-colors text-lg appearance-none cursor-pointer">
                <option value="" disabled selected className="text-dark bg-white">Select an option...</option>
                <option value="AI" className="text-dark bg-white">AI / Technology</option>
                <option value="Marketing" className="text-dark bg-white">Digital Marketing</option>
                <option value="Startup" className="text-dark bg-white">Startup / Business</option>
                <option value="Other" className="text-dark bg-white">Other Collaboration</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-medium text-white/60">Message</label>
              <textarea 
                rows={3}
                placeholder="Tell me about your idea..."
                className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
              ></textarea>
            </div>

            <button type="submit" className="mt-4 accent-btn w-full items-center justify-center flex gap-3 text-lg">
              Let's Build Together <ArrowRight size={20} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
