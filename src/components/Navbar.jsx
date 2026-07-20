import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Loan Products",
    path: "/loans",
    children: [
      { label: "Home Loan", path: "/loans#home-loan" },
      { label: "Balance Transfer", path: "/loans#balance-transfer" },
      { label: "Plot Loan", path: "/loans#plot-loan" },
      { label: "Construction Loan", path: "/loans#construction-loan" },
      { label: "Loan Against Property", path: "/loans#lap" }
    ]
  },
  { label: "EMI Calculator", path: "/emi-calculator" },
  { label: "Blog", path: "/blog" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-navy-100" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Apna Ghar Loans"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 text-navy-700 hover:text-navy-900 hover:bg-navy-50 ${location.pathname === link.path ? "text-navy-900 bg-navy-50" : ""}`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-navy-100 py-2 z-50"
                  >
                    {link.children.map((sublink) => (
                      <Link
                        key={sublink.label}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+917019373679" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all text-navy-700 hover:text-navy-900">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <Link to="/apply" className="px-6 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-all shadow-md hover:shadow-lg">
              Get Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-navy-900 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-1">
                      {link.children.map((sublink) => (
                        <Link
                          key={sublink.label}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-navy-600 rounded-lg hover:bg-navy-50"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-navy-100">
                <Link
                  to="/apply"
                  className="block w-full text-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
