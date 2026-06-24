import { Rocket, Share2, MessageCircle, Camera, Briefcase, Video, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-transparent pt-20 pb-10 border-t border-gray-100 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-secondary)] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                <Rocket className="w-6 h-6 text-[var(--color-text-main)]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                Nexora
              </span>
            </a>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              Empowering organizations worldwide with innovative digital solutions, strategic consulting, and data-driven transformation.
            </p>
            <div className="flex gap-4">
              {[Share2, MessageCircle, Camera, Briefcase, Video].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-main)]">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Industries', 'Solutions', 'Projects', 'Team', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-main)]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>245 Business Avenue<br />Innovation District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>contact@nexorasolutions.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-main)]">Newsletter</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">
              Subscribe to receive industry insights and technology updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-gray-100 rounded-lg px-4 py-3 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-highlight)] text-black font-semibold rounded-lg px-4 py-3 text-sm transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © 2026 Nexora Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
