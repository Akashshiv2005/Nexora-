import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-6 md:p-8 lg:p-12 relative z-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 text-left relative z-10 w-full lg:max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase mb-6 border border-purple-100 shadow-sm"
          >
            Nexora Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[var(--color-text-main)] mb-6 leading-[1.1] tracking-tight"
          >
            Transforming Businesses Through <br className="hidden lg:block"/>
            <span className="text-gradient">Technology & Innovation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 md:mb-10 leading-relaxed font-medium max-w-lg"
          >
            Empowering organizations worldwide with innovative digital solutions, strategic consulting, cloud technologies, and data-driven transformation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-105 transition-all shadow-[0_8px_20px_rgba(168,85,247,0.3)]">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-200 bg-white text-[var(--color-text-main)] font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 hover:shadow-md transition-all shadow-sm">
              <Play className="w-5 h-5 text-[var(--color-primary)] fill-current" />
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Right Illustration Area */}
        <div className="flex-1 w-full relative flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-lg">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border-8 border-white shadow-2xl overflow-hidden bg-white z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" 
                alt="Technology Consulting Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent mix-blend-overlay" />
            </motion.div>

            {/* Floating Card 1: Growth (Moved to Top Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-8 -left-4 md:top-12 md:-left-10 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[var(--color-text-main)]">Business Growth</p>
                <p className="text-xs text-emerald-600 font-bold">+45% this year</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Rating (Moved to Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute bottom-8 -right-4 md:bottom-12 md:-right-8 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col gap-2 z-20"
            >
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[var(--color-text-main)]">4.9/5 Rating</p>
                <p className="text-xs text-[var(--color-text-muted)] font-medium">From 200+ clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
