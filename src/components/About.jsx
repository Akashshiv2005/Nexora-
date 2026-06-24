import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const values = [
  'Innovation', 'Excellence', 'Integrity',
  'Collaboration', 'Customer Success', 'Continuous Improvement'
];

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden border-b border-gray-100 bg-transparent">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            style={{ opacity }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-secondary)] bg-[rgba(139,92,246,0.05)]">
              <span className="text-sm font-semibold text-[var(--color-secondary)] tracking-wide uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-main)] leading-tight">
              Driving Digital <br />
              <span className="text-gradient">Transformation</span> Worldwide
            </h2>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Nexora Solutions is a leading technology and consulting company dedicated to helping businesses achieve sustainable growth through innovative digital solutions. We partner with startups, SMEs, and enterprises to solve complex challenges, streamline operations, and unlock new opportunities.
            </p>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Our team combines industry expertise, cutting-edge technology, and strategic thinking to deliver measurable business outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Our Mission</h3>
                <p className="text-sm text-[var(--color-text-muted)]">To empower businesses through innovative technology solutions that create long-term value.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Our Vision</h3>
                <p className="text-sm text-[var(--color-text-muted)]">To become the world's most trusted partner for digital transformation and business innovation.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Visual/Values Content */}
          <motion.div 
            style={{ y, opacity }}
            className="flex-1 w-full relative"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl bg-white shadow-xl border border-gray-100 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-emerald-50/50" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-[var(--color-text-main)] text-center">Our Core Values</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {values.map((value, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-[var(--color-primary)] hover:bg-white hover:shadow-md transition-all group"
                    >
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-10 -left-4 md:bottom-10 md:-left-10 bg-white p-6 rounded-2xl hidden sm:flex items-center gap-6 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-inner">
                <span className="text-2xl font-black text-white">10+</span>
              </div>
              <div>
                <p className="text-xl font-bold text-[var(--color-text-main)] mb-1">Years Experience</p>
                <p className="text-sm text-[var(--color-text-muted)]">In Digital Innovation</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
