import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/69cb7eac4_generated_51a615ee.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
          Ready To Begin Your Home Loan Journey?
        </h2>
        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Get expert guidance, compare banking options, and move closer to your dream home — all at no cost to you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/apply"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-lg"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+919606835118"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
