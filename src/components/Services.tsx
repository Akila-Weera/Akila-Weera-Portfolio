import { motion } from 'motion/react';

const services = [
  {
    num: '01',
    title: 'Artificial Intelligence',
    desc: 'Building AI-powered systems, automations, tools and business solutions.',
    tags: ['AI Automation', 'Prompt Engineering', 'LLMs', 'Workflows', 'Machine Learning']
  },
  {
    num: '02',
    title: 'Digital Marketing',
    desc: 'Growth-focused marketing strategies, content systems and performance campaigns.',
    tags: ['Meta Ads', 'Content Marketing', 'Brand Strategy', 'Analytics', 'Funnels']
  },
  {
    num: '03',
    title: 'Data Science',
    desc: 'Turning data into actionable insights through analytics, visualization and predictive thinking.',
    tags: ['Python', 'Statistics', 'Data Analysis', 'Visualization', 'Research']
  },
  {
    num: '04',
    title: 'Entrepreneurship',
    desc: 'Creating businesses, products and scalable systems around meaningful opportunities.',
    tags: ['Startups', 'Strategy', 'Operations', 'Business Models', 'Growth']
  },
  {
    num: '05',
    title: 'Content Creation',
    desc: 'Educational and storytelling content across YouTube, podcasts and social media.',
    tags: ['YouTube', 'Podcasting', 'Video Production', 'Personal Branding', 'Education']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 px-6 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-2 text-primary font-medium border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
              <span>✦</span>
              <span className="text-white/80 tracking-wide uppercase text-sm">What I Do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
              Areas Where I Create Value
            </h2>
          </div>

          {/* List */}
          <div className="lg:col-span-8 flex flex-col">
            {services.map((svc, i) => (
              <div 
                key={i} 
                className="group py-10 border-t border-white/10 first:border-0 lg:first:border-t flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="text-primary font-giant text-4xl opacity-50 font-bold w-12 shrink-0">
                  {svc.num}
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-xl">
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-[2px] border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 shrink-0 items-center justify-center rounded-full border border-white/10 opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:border-primary transition-all">
                  <span className="text-white rotate-45">&#x2192;</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
