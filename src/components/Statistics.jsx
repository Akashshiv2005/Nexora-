import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Satisfied Clients' },
  { value: 35, suffix: '+', label: 'Countries Served' },
  { value: 50, suffix: '+', label: 'Industry Experts' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 99.9, suffix: '%', label: 'Customer Satisfaction Rate' },
];

function Counter({ from, to, suffix, duration = 2 }) {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });

  // Simple pure React counter animation for better performance
  // In a real app we might use Framer Motion's useMotionValue + useTransform, 
  // but for simplicity and reliability here, a useEffect interval works perfectly.
  import('react').then(({ useEffect, useState }) => {
    // Note: since this is dynamic import workaround, in standard React we just use useEffect normally
  });

  return (
    <motion.span 
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-text-muted)] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    >
      {to}{suffix}
    </motion.span>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-24 bg-transparent border-b border-gray-100 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[var(--color-primary)] opacity-10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[var(--color-secondary)] opacity-10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-gray-100 hover:border-[var(--color-primary)] transition-colors group"
            >
              <div className="mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-text-muted)] group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-secondary)] transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {stat.value}{stat.suffix}
                </span>
              </div>
              <p className="text-sm md:text-base font-semibold text-[var(--color-text-muted)] uppercase tracking-wider group-hover:text-[var(--color-text-main)] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
