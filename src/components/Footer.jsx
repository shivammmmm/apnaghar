import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { label: "Home Loan", path: "/loans#home-loan" },
    { label: "Balance Transfer", path: "/loans#balance-transfer" },
    { label: "Plot Loan", path: "/loans#plot-loan" },
    { label: "Construction Loan", path: "/loans#construction-loan" },
    { label: "Loan Against Property", path: "/loans#lap" }
  ],
  Resources: [
    { label: "EMI Calculator", path: "/emi-calculator" },
    { label: "Eligibility Calculator", path: "/emi-calculator#eligibility" },
    { label: "Blog", path: "/blog" },
    { label: "FAQs", path: "/about#faq" }
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" }
  ]
};

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] md:text-[18rem] font-heading font-bold text-white/[0.02] whitespace-nowrap">
          Apna Ghar
        </span>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-2.5 rounded-xl inline-block mb-4 shadow-sm">
              <img
                src="/logo.png"
                alt="Apna Ghar Loans"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner for home loan guidance. We help you compare multiple banking options and find the right solution for your dream home.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white/40" />
                +91 98765 43210
              </a>
              <a href="mailto:info@apnagharloans.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white/40" />
                info@apnagharloans.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span>123 Business Park, Main Street,<br />Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-white/40" />
                Mon - Sat: 9:30 AM - 6:30 PM
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Apna Ghar Loans. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4 text-white/50" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
