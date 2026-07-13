import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Percent, Users, ShieldCheck, FileCheck, Award } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const reasons = [
  {
    icon: Layers,
    title: "Multiple Banking Options",
    desc: "Compare offerings from 20+ leading banks and financial institutions to find the best fit.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Percent,
    title: "Competitive Interest Rates",
    desc: "We help you identify the most competitive rates available based on your profile.",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    desc: "Our experienced advisors understand your unique situation and recommend suitable options.",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "No hidden charges, no surprises — complete transparency at every step of your loan journey.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FileCheck,
    title: "Hassle-Free Documentation",
    desc: "We simplify the paperwork and guide you through the entire verification process.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Zero Service Fee",
    desc: "Our professional advisory and guidance services are completely free for all home buyers.",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10 relative group">
              <img
                src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/e5a6fd89b_generated_f4426fbc.png"
                alt="Professional Indian family in a modern sunlit living room"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-navy-500 font-medium">Trusted by</p>
                <p className="text-lg font-heading font-bold text-navy-900">5,000+ Families</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              label="Why Us"
              title="Why Choose Apna Ghar Loans"
              subtitle="We bring clarity, transparency, and expertise to your home loan journey."
              center={false}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={reason.title} className="bg-slate-50 rounded-2xl p-6 border border-navy-100/30 hover:shadow-md transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${reason.color} text-white`}>
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-navy-900 mb-2">{reason.title}</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
