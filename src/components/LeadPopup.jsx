import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, User, Phone, Building, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const loanTypes = ["Home Loan", "Balance Transfer", "Plot Loan", "Construction Loan", "Loan Against Property"];

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", loan_type: "" });

  useEffect(() => {
    if (sessionStorage.getItem("lead_popup_shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("lead_popup_shown", "true");
    }, 10000);

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("lead_popup_shown")) {
        setIsOpen(true);
        sessionStorage.setItem("lead_popup_shown", "true");
        clearTimeout(timer);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const message = `Hello Apna Ghar Loans, I request a Free Consultation:\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Mobile:* ${formData.mobile}` +
        (formData.loan_type ? `\n🏦 *Loan Type:* ${formData.loan_type}` : "");

      const whatsappUrl = `https://wa.me/917019373679?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      try {
        await base44.entities.Lead.create({
          ...formData,
          source: "popup"
        });
      } catch (err) {
        console.warn("Base44 lead log skipped", err);
      }

      setSubmitted(true);
      setSubmitting(false);
      setTimeout(() => setIsOpen(false), 2500);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden">
              <div className="bg-navy-900 px-6 py-5 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Free Consultation</p>
                <h2 className="font-heading text-2xl text-white">Speak to a Home Loan Expert</h2>
                <p className="text-white/70 text-sm mt-1">Get personalised guidance in under 24 hours at no cost.</p>
              </div>

              <div className="px-6 py-6">
                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="font-heading text-xl text-navy-900 mb-1">Thank You!</h3>
                    <p className="text-sm text-navy-500">Our expert will call you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 w-4 h-4 text-navy-400 pointer-events-none z-10" />
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        style={{ paddingLeft: '2.5rem' }}
                        className="w-full pr-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none"
                      />
                    </div>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-navy-400 pointer-events-none z-10" />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                        style={{ paddingLeft: '2.5rem' }}
                        className="w-full pr-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none"
                      />
                    </div>
                    <div className="relative flex items-center">
                      <Building className="absolute left-3.5 w-4 h-4 text-navy-400 pointer-events-none z-10" />
                      <select
                        value={formData.loan_type}
                        onChange={(e) => setFormData(prev => ({ ...prev, loan_type: e.target.value }))}
                        style={{ paddingLeft: '2.5rem' }}
                        className="w-full pr-4 py-3 rounded-xl border border-navy-200 text-sm focus:ring-2 focus:ring-navy-600 focus:border-navy-600 outline-none bg-white text-navy-700"
                      >
                        <option value="">Select Loan Type (Optional)</option>
                        {loanTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all disabled:opacity-60"
                    >
                      {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                      {submitting ? "Submitting..." : "Get Free Consultation"}
                    </button>
                    <p className="text-xs text-center text-navy-400">No spam. We respect your privacy.</p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
