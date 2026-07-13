import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Compass, Eye, Calendar, Building, CheckSquare, HelpCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const coreValues = [
  {
    icon: Calendar,
    title: "Years of Experience",
    value: "15+ Years",
    desc: "Over a decade and a half of guiding families through their home loan journey with proven expertise.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Building,
    title: "Banking Expertise",
    value: "20+ Lenders",
    desc: "Deep relationships with nationalized banks, private banks, and housing finance companies.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: CheckSquare,
    title: "Personalized Support",
    value: "1-on-1 Guidance",
    desc: "Dedicated advisors who understand your unique situation and recommend the best fit for you.",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: HelpCircle,
    title: "Why Choose Us",
    value: "Trusted Advisory",
    desc: "Transparent process, competitive rates, and hassle-free documentation at every step.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const mainStats = [
  { value: "5,000+", label: "Families Helped" },
  { value: "₹1,200 Cr+", label: "Loans Disbursed" },
  { value: "20+", label: "Lending Partners" },
  { value: "98%", label: "Customer Satisfaction" }
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Us"
          title="Your Trusted Home Loan Partner"
          subtitle="Apna Ghar Loans is a premium home loan consultancy dedicated to making homeownership dreams a reality. We combine deep banking expertise with personalized service to find the right loan for every customer."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 relative group">
              <img
                src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/91a828380_generated_image.png"
                alt="Apna Ghar Loans advisor consulting a happy couple"
                loading="lazy"
                className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-heading text-2xl text-navy-900 leading-none">15+</p>
                <p className="text-xs text-navy-500 font-medium mt-1">Years of Trust</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl text-navy-900 mb-4">Turning Homeownership Dreams Into Reality</h3>
            <p className="text-navy-500 leading-relaxed mb-4">
              Founded with a mission to simplify home financing, Apna Ghar Loans has grown into one of the most trusted home loan consultancies in the region. We believe that securing the right home loan shouldn't be confusing or stressful — it should be clear, transparent, and tailored to you.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              Our team of seasoned advisors works closely with each customer to understand their financial profile, compare offerings across 20+ leading lenders, and recommend the most suitable loan — often at better terms than going directly to a single bank.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900 mb-1">Our Mission</p>
                  <p className="text-xs text-navy-500 leading-relaxed">Make home loans simple, transparent, and accessible for every Indian family.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900 mb-1">Our Vision</p>
                  <p className="text-xs text-navy-500 leading-relaxed">Be the most trusted home loan partner, known for honesty and expertise.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors">
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {mainStats.map((stat, r) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + r * 0.08, duration: 0.5 }}
              className="text-center bg-slate-50 rounded-2xl py-6 border border-navy-100/50"
            >
              <p className="font-heading text-3xl sm:text-4xl text-navy-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-navy-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {coreValues.map((val, r) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + r * 0.1, duration: 0.5 }}
              className="group relative bg-slate-50 rounded-2xl p-6 border border-navy-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${val.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <val.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 group-hover:text-white/70 transition-colors duration-300 mb-1">{val.title}</p>
                <p className="font-heading text-2xl text-navy-900 group-hover:text-white transition-colors duration-300 mb-2">{val.value}</p>
                <p className="text-sm text-navy-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
