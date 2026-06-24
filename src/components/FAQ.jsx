import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does a project typically take?",
    answer: "Most projects are completed within 4–12 weeks depending on complexity and scope. We ensure a rapid yet thorough development cycle."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support services post-launch to ensure everything runs smoothly."
  },
  {
    question: "Can startups work with your company?",
    answer: "Absolutely. We work with startups, SMEs, and large enterprises, tailoring our approach to your specific scale and needs."
  },
  {
    question: "Do you provide custom solutions?",
    answer: "Yes, all solutions are customized specifically to meet your unique business requirements."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "Healthcare, Finance, Retail, Education, Manufacturing, Real Estate, Logistics, and Government sectors."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-32 bg-transparent border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)] bg-[rgba(0,229,255,0.05)]"
          >
            <span className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)]"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-[var(--color-text-main)]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[var(--color-text-muted)] border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
