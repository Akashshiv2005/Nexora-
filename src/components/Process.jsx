import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Map, PenTool, Code2, CheckSquare, Rocket, Wrench } from 'lucide-react';

const steps = [
  { title: 'Discovery', description: 'Understanding business objectives, requirements, and opportunities.', icon: Search },
  { title: 'Strategy', description: 'Developing a customized roadmap aligned with business goals.', icon: Map },
  { title: 'Design', description: 'Creating intuitive user experiences and modern interfaces.', icon: PenTool },
  { title: 'Development', description: 'Building scalable, secure, and high-performance solutions.', icon: Code2 },
  { title: 'Testing', description: 'Conducting rigorous quality assurance and performance optimization.', icon: CheckSquare },
  { title: 'Deployment', description: 'Launching solutions efficiently and securely.', icon: Rocket },
  { title: 'Support', description: 'Providing continuous maintenance and improvement services.', icon: Wrench },
];

export default function Process() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-transparent border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)] bg-[rgba(0,229,255,0.05)]"
          >
            <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase">
              Our Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)]"
          >
            How We Deliver <span className="text-gradient">Excellence</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative py-10">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full -translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full -translate-x-1/2 origin-top" 
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={step.title} className="relative flex items-center mb-16 last:mb-0 w-full">
                
                {/* Desktop Layout - Left Side */}
                <div className={`hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'opacity-0' : ''}`}>
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="glass p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)] transition-colors inline-block shadow-sm bg-white/80"
                    >
                      <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">{step.title}</h3>
                      <p className="text-[var(--color-text-muted)]">{step.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring" }}
                    className="w-12 h-12 rounded-full bg-white border-4 border-[var(--color-primary)] flex items-center justify-center z-10 shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </motion.div>
                </div>

                {/* Desktop Layout - Right Side & Mobile Layout */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-12 ${isEven ? 'md:opacity-0' : ''}`}>
                  {(!isEven || true) && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`glass p-6 rounded-2xl hover:border-[var(--color-primary)] transition-colors ${isEven ? 'md:hidden' : ''}`}
                    >
                      <div className="text-[var(--color-primary)] text-sm font-bold mb-1">0{index + 1}</div>
                      <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">{step.title}</h3>
                      <p className="text-[var(--color-text-muted)]">{step.description}</p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
