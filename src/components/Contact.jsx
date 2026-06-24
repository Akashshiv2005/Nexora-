import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--color-secondary)] opacity-10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-main)]"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--color-text-muted)]"
          >
            Partner with Nexora Solutions and unlock new opportunities through technology, innovation, and strategic expertise.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text-main)] font-semibold mb-1">Headquarters</h4>
                    <p className="text-[var(--color-text-muted)]">245 Business Avenue<br />Innovation District<br />New York, NY 10001<br />United States</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text-main)] font-semibold mb-1">Phone</h4>
                    <p className="text-[var(--color-text-muted)]">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text-main)] font-semibold mb-1">Email</h4>
                    <p className="text-[var(--color-text-muted)]">contact@nexorasolutions.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5]"
          >
            <form className="glass p-8 rounded-2xl border border-gray-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-text-muted)]">First Name</label>
                  <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-gray-100 rounded-lg px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-text-muted)]">Last Name</label>
                  <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-gray-100 rounded-lg px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-muted)]">Email Address</label>
                <input type="email" className="w-full bg-[rgba(255,255,255,0.03)] border border-gray-100 rounded-lg px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-muted)]">Message</label>
                <textarea rows="4" className="w-full bg-[rgba(255,255,255,0.03)] border border-gray-100 rounded-lg px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-highlight)] text-black font-bold py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
