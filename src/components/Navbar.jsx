import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-md"
          >
            <Rocket className="w-6 h-6 text-[var(--color-text-main)]" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
            Nexora
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-text-main)] hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--color-text-main)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 py-4 flex flex-col px-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] border-b border-gray-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-6 py-3 text-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-main)] font-semibold">
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
