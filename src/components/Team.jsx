import { motion } from 'framer-motion';
import { Briefcase, MessageCircle, Mail } from 'lucide-react';

const team = [
  {
    name: 'David Anderson',
    role: 'Chief Executive Officer',
    description: 'Visionary leader with over 15 years of experience in business strategy and technology innovation.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sophia Williams',
    role: 'Chief Technology Officer',
    description: 'Leading technology initiatives and driving innovation across all projects.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Michael Brown',
    role: 'Chief Operations Officer',
    description: 'Ensuring operational excellence and project delivery success.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Emma Johnson',
    role: 'Marketing Director',
    description: 'Building strong brands and creating impactful customer experiences.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-transparent border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-secondary)] bg-[rgba(139,92,246,0.05)]"
          >
            <span className="text-sm font-semibold text-[var(--color-secondary)] tracking-wide uppercase">
              Leadership Team
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-main)]"
          >
            Meet the <span className="text-gradient">Innovators</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[var(--color-primary)] transition-colors duration-500">
                <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                    <Briefcase className="w-4 h-4 text-black" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                    <MessageCircle className="w-4 h-4 text-black" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                    <Mail className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                {member.name}
              </h3>
              <p className="text-[var(--color-secondary)] text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed px-4">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
