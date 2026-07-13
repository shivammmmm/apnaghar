import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50/30">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#1B6B3A 1px, transparent 1px), linear-gradient(90deg, #1B6B3A 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full mb-6">
                <Award className="w-4 h-4 text-navy-700" />
                <span className="text-xs font-semibold text-navy-700 uppercase tracking-wider">Trusted Home Loan Guidance</span>
              </div>
              <div className="flex gap-6">
                <div className="hidden sm:block w-px bg-navy-200 self-stretch mt-2" />
                <div>
                  <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy-900 leading-[1.05] tracking-tight">
                    Find The Right<br />
                    <span className="text-navy-600">Home Loan</span> With<br />
                    Expert Guidance
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-navy-500 leading-relaxed max-w-xl">
                    We help customers compare multiple banking options, understand their eligibility, and choose suitable home loan solutions with confidence.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/emi-calculator#eligibility" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30">
                  Check Eligibility
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-200 text-navy-800 font-semibold rounded-xl hover:bg-navy-50 hover:border-navy-300 transition-all">
                  Talk To Expert
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-navy-100">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">4.8/5 on Google</p>
                  <p className="text-xs text-navy-500">Based on 500+ reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/a31fc5acb_generated_4b263e0c.png"
                alt="Modern luxury home at golden hour with warm interior lighting"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <p className="text-xs text-navy-500 font-medium uppercase tracking-wider">Your Dream Home</p>
                <p className="text-navy-900 font-heading text-lg mt-1">Our Commitment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
