import { motion } from 'framer-motion';
import { Stethoscope, Landmark, GraduationCap, ShoppingCart, Factory, Building, Truck, Shield } from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Finance', icon: Landmark },
  { name: 'Education', icon: GraduationCap },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Real Estate', icon: Building },
  { name: 'Logistics', icon: Truck },
  { name: 'Government', icon: Shield },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-transparent border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-secondary)] bg-[rgba(139,92,246,0.05)]"
          >
            <span className="text-sm font-semibold text-[var(--color-secondary)] tracking-wide uppercase">
              Industries We Serve
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-main)]"
          >
            Transforming Every <span className="text-gradient drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Sector</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: 'spring' }}
                className="group flex flex-col items-center justify-center p-8 glass rounded-2xl border border-gray-100 hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-primary)] transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                  <Icon className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
