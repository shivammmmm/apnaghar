import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, Wallet, CheckCircle, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, label: "Personal", icon: User },
  { id: 2, label: "Requirements", icon: FileText },
  { id: 3, label: "Financials", icon: Wallet },
  { id: 4, label: "Review", icon: CheckCircle }
];

const loanTypes = ["Home Loan", "Balance Transfer", "Resale Property Loan", "Plot Loan", "Construction Loan", "Loan Against Property"];
const employmentTypes = ["Salaried", "Self-Employed", "Professional", "Business Owner"];
const propertyStatuses = ["Property Identified", "Searching for Property", "Ready to Move / Resale", "Under Construction"];

export default function Apply() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    loan_type: "",
    required_amount: "",
    monthly_income: "",
    employment_type: "",
    property_status: "",
    consent: false
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    if (step === 1) return formData.name && formData.mobile && formData.city;
    if (step === 2) return formData.loan_type && formData.required_amount;
    if (step === 3) return formData.monthly_income && formData.employment_type && formData.property_status && formData.consent;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const message = `Hello Apna Ghar Loans, I request a Free Home Loan Consultation:\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Mobile:* ${formData.mobile}\n` +
        `📍 *City:* ${formData.city}\n` +
        `🏦 *Loan Type:* ${formData.loan_type}\n` +
        `💰 *Required Amount:* ₹${Number(formData.required_amount).toLocaleString("en-IN")}\n` +
        `💵 *Monthly Income:* ₹${Number(formData.monthly_income).toLocaleString("en-IN")}\n` +
        `💼 *Employment:* ${formData.employment_type}\n` +
        `🏠 *Property Status:* ${formData.property_status}`;

      const whatsappUrl = `https://wa.me/917019373679?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      try {
        await base44.entities.Lead.create({
          ...formData,
          source: "application_form"
        });
      } catch (err) {
        console.warn("Base44 lead log skipped", err);
      }

      setSubmitted(true);
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {submitted ? (
        <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
          <div className="max-w-md w-full px-4 text-center">
            <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-8 shadow-sm">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-heading text-3xl text-navy-900 mb-3">Application Submitted!</h1>
              <p className="text-navy-500 mb-8 leading-relaxed">
                Thank you for choosing Apna Ghar Loans. Our home loan expert will call you within 24 hours to guide you forward.
              </p>
              <Link to="/" className="group inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all">
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main className="pt-24 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-navy-600 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-navy-700">Apply</span>
            </nav>

            <div className="text-center mb-10">
              <h1 className="font-heading text-3xl sm:text-4xl text-navy-900 mb-3">Get Free Consultation</h1>
              <p className="text-navy-500">Fill in your details and our expert will reach out to you.</p>
            </div>

            <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
              {steps.map((s, idx) => (
                <div key={s.id} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center gap-1.5 relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s.id ? "bg-navy-900 text-white" : "bg-slate-100 text-navy-400"}`}>
                      {step > s.id ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-4 h-4" />}
                    </div>
                    <span className="text-[10px] font-medium text-navy-400 hidden sm:block">{s.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`flex-1 h-px mx-2 transition-colors ${step > s.id ? "bg-navy-900" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="font-heading text-xl text-navy-900 mb-4">Personal Details</h2>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => handleChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={e => handleChange("mobile", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={e => handleChange("city", e.target.value)}
                          placeholder="e.g. Mumbai"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="font-heading text-xl text-navy-900 mb-4">Loan Requirements</h2>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Loan Type *</label>
                        <select
                          value={formData.loan_type}
                          onChange={e => handleChange("loan_type", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        >
                          <option value="">Select loan type</option>
                          {loanTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Required Loan Amount (₹) *</label>
                        <input
                          type="number"
                          required
                          value={formData.required_amount}
                          onChange={e => handleChange("required_amount", e.target.value)}
                          placeholder="e.g. 3000000"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="font-heading text-xl text-navy-900 mb-4">Financial Details</h2>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Monthly Income (₹) *</label>
                        <input
                          type="number"
                          required
                          value={formData.monthly_income}
                          onChange={e => handleChange("monthly_income", e.target.value)}
                          placeholder="e.g. 80000"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Employment Type *</label>
                        <select
                          value={formData.employment_type}
                          onChange={e => handleChange("employment_type", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        >
                          <option value="">Select employment type</option>
                          {employmentTypes.map(emp => (
                            <option key={emp} value={emp}>{emp}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy-700 mb-1.5 block">Property Status *</label>
                        <select
                          value={formData.property_status}
                          onChange={e => handleChange("property_status", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                        >
                          <option value="">Select property status</option>
                          {propertyStatuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                      <label className="flex items-start gap-3 pt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={e => handleChange("consent", e.target.checked)}
                          className="mt-1 w-4 h-4 rounded border-navy-300 text-navy-900 focus:ring-navy-900"
                        />
                        <span className="text-xs text-navy-500 leading-relaxed">
                          I agree to be contacted by Apna Ghar Loans regarding my home loan inquiry. I understand that my information will be handled as per the privacy policy.
                        </span>
                      </label>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="font-heading text-xl text-navy-900 mb-6">Review Your Details</h2>
                      <div className="space-y-3">
                        {[
                          ["Name", formData.name],
                          ["Mobile", formData.mobile],
                          ["City", formData.city],
                          ["Loan Type", formData.loan_type],
                          ["Required Amount", `₹${Number(formData.required_amount).toLocaleString("en-IN")}`],
                          ["Monthly Income", `₹${Number(formData.monthly_income).toLocaleString("en-IN")}`],
                          ["Employment", formData.employment_type],
                          ["Property Status", formData.property_status]
                        ].map(([key, val]) => (
                          <div key={key} className="flex justify-between py-2.5 px-4 bg-white rounded-lg">
                            <span className="text-sm text-navy-500">{key}</span>
                            <span className="text-sm font-semibold text-navy-900">{val}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(prev => prev - 1)}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={() => setStep(prev => prev + 1)}
                        disabled={!isStepValid()}
                        className="flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex items-center justify-center gap-2 px-8 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all disabled:opacity-60"
                      >
                        {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                        {submitting ? "Submitting..." : "Get Free Consultation"}
                      </button>
                    )}
                  </div>
                </form>
              </AnimatePresence>
            </div>
          </div>
        </main>
      )}
      <Footer />
      <StickyButtons />
    </div>
  );
}
