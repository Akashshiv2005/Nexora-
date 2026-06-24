import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Smartphone, 
  Cloud, 
  BarChart, 
  Database, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';

const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic planning and business transformation services that help organizations improve efficiency and accelerate growth.',
    icon: Briefcase,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Web Development',
    description: 'Custom websites, web applications, e-commerce platforms, and enterprise portals designed for performance and scalability.',
    icon: Code,
    color: 'from-[var(--color-primary)] to-[var(--color-secondary)]'
  },
  {
    title: 'Mobile App Development',
    description: 'Feature-rich Android and iOS applications built for seamless user experiences.',
    icon: Smartphone,
    color: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud migration, infrastructure management, and scalable hosting solutions.',
    icon: Cloud,
    color: 'from-sky-400 to-indigo-600'
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, social media marketing, paid advertising, content marketing, and brand development.',
    icon: BarChart,
    color: 'from-orange-400 to-pink-600'
  },
  {
    title: 'Data Analytics',
    description: 'Business intelligence dashboards, predictive analytics, reporting systems, and actionable insights.',
    icon: Database,
    color: 'from-purple-400 to-purple-700'
  },
  {
    title: 'Cybersecurity',
    description: 'Security assessments, threat monitoring, compliance solutions, and data protection.',
    icon: ShieldCheck,
    color: 'from-red-400 to-rose-600'
  },
  {
    title: 'AI & Automation',
    description: 'Artificial intelligence solutions, machine learning applications, and process automation systems.',
    icon: Cpu,
    color: 'from-teal-400 to-[var(--color-primary)]'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="services" className="relative py-32 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-secondary)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)] bg-[rgba(0,229,255,0.05)]"
          >
            <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase">
              Our Services
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-main)]"
          >
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--color-text-muted)]"
          >
            We provide end-to-end technology services designed to optimize your operations and drive sustainable business growth.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative glass p-8 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-[var(--color-text-main)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated border line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
