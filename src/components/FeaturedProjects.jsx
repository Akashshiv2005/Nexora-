import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise ERP Transformation',
    category: 'Business Consulting',
    description: 'Helped a multinational company improve operational efficiency by 45% through a comprehensive ERP overhaul.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500/20'
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Web Development',
    description: 'Built a highly scalable multi-vendor marketplace supporting hundreds of thousands of daily transactions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    color: 'from-[var(--color-primary)]/20'
  },
  {
    title: 'Healthcare Management Platform',
    category: 'Mobile App',
    description: 'Enhanced patient engagement and streamlined administrative workflows with a secure mobile ecosystem.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-500/20'
  },
  {
    title: 'Financial Analytics Dashboard',
    category: 'Data Analytics',
    description: 'Delivered advanced real-time reporting capabilities for strategic business planning and forecasting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-[var(--color-secondary)]/20'
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-transparent border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-100 bg-purple-50"
            >
              <span className="text-sm font-bold text-[var(--color-primary)] tracking-wide uppercase">
                Success Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-main)] leading-tight tracking-tight"
            >
              Our Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0 px-6 py-3 rounded-full border-2 border-gray-200 text-[var(--color-text-main)] font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center gap-2 group shadow-sm"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl border border-gray-100 aspect-square md:aspect-[4/3] lg:aspect-video cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />
              
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-wider mb-3 block drop-shadow-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 flex items-center justify-between leading-tight drop-shadow-lg">
                    {project.title}
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </h3>
                  <p className="text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
