import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-dark">
      {/* Background glow resembling the referenced image */}
      <div className="absolute inset-0 bg-stars z-0 opacity-20 pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-[#F27D26]/20 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[90vw] max-w-[1200px] h-[600px] bg-[#F27D26] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto w-full z-10 relative flex flex-col justify-center min-h-[75vh]">
        
        {/* Giant Name Background Layer */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 select-none">
           <motion.span 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="block text-white font-sans text-xl md:text-3xl mb-4 text-left ml-[5%] md:ml-[15%]"
           >
             Hi, I am
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="font-giant text-[13vw] md:text-[14vw] tracking-tighter leading-[0.8] uppercase text-white drop-shadow-2xl"
             style={{ textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
           >
             AKILA WEERA
           </motion.h1>
        </div>

        {/* Center Portrait Image Placement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[500px] md:h-[700px] z-20 pointer-events-none flex items-end justify-center overflow-hidden"
        >
            {/* The actual image goes here. We use an overlay gradient to blend the bottom */}
            {/* <img src="/portrait.png" alt="Akila Weera" className="w-full h-full object-cover object-top mask-image-bottom" /> */}
            <div className="w-full h-full border-b max-w-[300px] md:max-w-[450px] border-white/5 bg-gradient-to-t from-dark via-dark/40 to-transparent flex items-end justify-center pb-8 opacity-60">
                {/* Silhouette placeholder if no image exists */}
                <span className="text-white/20 font-sans text-sm tracking-widest uppercase">Portrait Placeholder</span>
            </div>
            
            <div className="w-[120%] h-[30%] bg-gradient-to-t from-dark to-transparent absolute bottom-0 left-1/2 -translate-x-1/2 z-30"></div>
        </motion.div>

        {/* Lower Content Container */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mt-auto z-30 pt-[50vh] md:pt-[55vh]">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full md:w-[45%] flex flex-col items-start text-left mb-12 md:mb-0 relative pl-4 md:pl-10"
          >
             <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="#contact" className="accent-btn !rounded-full flex items-center justify-center gap-4 !py-3 !pr-2 !pl-6 font-sans text-base tracking-wide bg-[#F27D26] text-white hover:bg-white hover:text-black transition-colors">
                  Start a Project 
                  <span className="bg-white text-black p-2 rounded-full flex items-center justify-center -rotate-45 transition-transform group-hover:rotate-0">
                    &#x2192;
                  </span>
                </a>
                <a href="#content" className="text-white hover:text-[#F27D26] transition-colors font-medium flex items-center gap-2 font-sans tracking-wide group">
                  View My Work <span className="rotate-45 group-hover:rotate-0 transition-transform">&#x2192;</span>
                </a>
             </div>
          </motion.div>

          {/* Right Content - Floating Card */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8 }}
             className="w-full md:w-auto mt-12 md:mt-0 relative pr-4 md:pr-10 pb-8"
          >
            <div className="glass-panel p-6 flex flex-col gap-4 max-w-[340px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/20 bg-dark/40 backdrop-blur-xl rounded-2xl relative overflow-hidden">
               {/* Inner glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#F27D26]/20 to-transparent pointer-events-none"></div>

               <div className="flex items-center justify-between mb-2 relative z-10">
                 <div className="flex -space-x-3">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-[3px] border-dark bg-white overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover" alt="Client" />
                     </div>
                   ))}
                 </div>
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F27D26] shadow-sm border border-white -rotate-45 cursor-pointer hover:rotate-0 transition-transform">
                   <span className="font-bold text-xl">&#x2192;</span>
                 </div>
               </div>
               
               <p className="font-sans text-sm text-white/90 leading-relaxed font-semibold relative z-10 pr-4">
                 99.6% Of My Clients Are Satisfied — Be One Of Them Today.
               </p>
               
               <div className="flex gap-2 relative z-10 pt-2">
                 <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-medium text-white/80 whitespace-nowrap">Free Consultation</span>
                 <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-medium text-white/80 whitespace-nowrap">24h Response</span>
               </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
