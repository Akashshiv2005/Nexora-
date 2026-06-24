import { motion } from 'framer-motion';
import { Award, HeartHandshake, Lightbulb, HeadphonesIcon, Globe2, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Proven Expertise',
    description: 'Over a decade of experience delivering successful technology projects across multiple industries.',
    icon: Award,
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Every solution is customized to meet unique business requirements and ensure maximum value.',
    icon: HeartHandshake,
  },
  {
    title: 'Innovative Technology',
    description: 'Utilizing modern frameworks, cloud platforms, and emerging technologies like AI.',
    icon: Lightbulb,
  },
  {
    title: 'Reliable Support',
    description: 'Dedicated support teams available to ensure smooth operations and continuous improvement.',
    icon: HeadphonesIcon,
  },
  {
    title: 'Global Reach',
    description: 'Serving businesses across North America, Europe, Asia-Pacific, the Middle East, and Africa.',
    icon: Globe2,
  },
  {
    title: 'Security & Compliance',
    description: 'Implementing enterprise-grade security practices and compliance standards.',
    icon: ShieldCheck,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="solutions" className="relative py-32 bg-transparent overflow-hidden border-b border-gray-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)] bg-[rgba(0,229,255,0.05)]">
              <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase">
                Why Choose Nexora
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-main)] leading-tight">
              Your Trusted Partner in <br />
              <span className="text-gradient">Digital Excellence</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-lg text-[var(--color-text-muted)]"
          >
            We don't just build software; we build solutions that solve real business problems. Our commitment to quality, innovation, and client success sets us apart in a crowded digital landscape.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass p-8 rounded-2xl border border-gray-100 hover:bg-[rgba(255,255,255,0.02)] transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
