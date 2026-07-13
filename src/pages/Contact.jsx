import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Loader2, CheckCircle2, Send } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
  { icon: Mail, label: "Email", value: "info@apnagharloans.com", href: "mailto:info@apnagharloans.com" },
  { icon: MapPin, label: "Office", value: "123 Business Park, Main Street, Mumbai, Maharashtra 400001", href: null },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:30 AM – 6:30 PM", href: null }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleField = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.ContactInquiry.create(formData);
      setSubmitted(true);
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Contact</span>
          </nav>

          <SectionHeading
            label="Get in Touch"
            title="Contact Us"
            subtitle="Have questions about home loans? We are here to help. Reach out through any of the channels below."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-800">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-navy-500 hover:text-navy-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-navy-500">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl overflow-hidden h-64">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-xl text-navy-900 mb-2">Message Sent!</h3>
                    <p className="text-sm text-navy-500">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading text-xl text-navy-900 mb-2">Quick Contact</h3>
                    <p className="text-sm text-navy-500 mb-6">Fill out the form and we will get back to you within 24 hours.</p>
                    
                    <div>
                      <label className="text-sm font-medium text-navy-700 mb-1.5 block">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => handleField("name", e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy-700 mb-1.5 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => handleField("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy-700 mb-1.5 block">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => handleField("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy-700 mb-1.5 block">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => handleField("message", e.target.value)}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-sm focus:ring-2 focus:ring-navy-900 focus:border-navy-900 outline-none resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all disabled:opacity-60"
                    >
                      {submitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
