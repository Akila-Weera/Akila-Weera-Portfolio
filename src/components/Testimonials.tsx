import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Akila consistently delivers creative solutions and takes ownership of every project.",
    author: "Client"
  },
  {
    quote: "Strong technical knowledge combined with excellent communication.",
    author: "Business Partner"
  },
  {
    quote: "Very proactive, professional and always focused on results.",
    author: "Collaborator"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-6 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <div className="flex items-center gap-2 text-primary font-medium border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
            <span>✦</span>
            <span className="text-white/80 tracking-wide uppercase text-sm">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            People I've Worked With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="glass-panel p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-primary mb-6 gap-1">
                  {[1,2,3,4,5].map(star => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded border border-white/20 bg-dark-surface flex items-center justify-center font-display font-medium text-white/50">
                  {test.author.charAt(0)}
                </div>
                <span className="text-white/60 font-medium">— {test.author}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
