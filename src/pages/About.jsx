import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import SectionHeading from '@/components/SectionHeading';
import FAQSection from '@/components/home/FAQSection';
import { Compass, Eye, ShieldAlert, Award } from 'lucide-react';

const coreValues = [
  {
    icon: Compass,
    title: "Our Mission",
    desc: "To simplify the home loan process and empower every Indian family to make informed decisions about their most important financial investment."
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be India's most trusted home loan advisory service, known for transparency, expertise, and unwavering commitment to customer success."
  },
  {
    icon: Award,
    title: "Our Promise",
    desc: "We promise to provide honest guidance, compare multiple options on your behalf, and support you at every step — from eligibility to disbursement."
  }
];

const driveValues = [
  {
    icon: Compass,
    title: "Transparency First",
    desc: "No hidden rates, no surprise fees. We lay out all the details so you can compare and choose with complete clarity."
  },
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "Our advisors have decades of collective experience in home financing and work exclusively in your best interest."
  },
  {
    icon: ShieldAlert,
    title: "Customer Centricity",
    desc: "We align our efforts with your unique financial goals and support you throughout the life of the loan."
  },
  {
    icon: Eye,
    title: "Continuous Innovation",
    desc: "We leverage technology to simplify comparison, speed up eligibility checks, and ease the paperwork."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 mb-3">About Us</span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">Your Trusted Partner in Home Loan Guidance</h1>
              <p className="text-navy-500 leading-relaxed mb-4">
                Apna Ghar Loans was founded with a simple mission — to help every Indian family find the right home loan with expert guidance and complete transparency. We understand that buying a home is one of the biggest financial decisions of your life, and we are here to make it simpler.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                With over a decade of experience in the home finance industry, our team of seasoned advisors has helped thousands of families across India navigate the complex world of home loans. We do not just process loans — we educate, guide, and support you throughout your entire homeownership journey.
              </p>
              <a href="/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all">
                Get Free Consultation
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/91a828380_generated_image.png"
                alt="Indian family in a modern home"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {coreValues.map((val) => (
              <div key={val.title} className="bg-slate-50 rounded-2xl p-8 border border-navy-100/50">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                  <val.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-heading text-xl text-navy-900 mb-3">{val.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeading
              label="Our Values"
              title="What Drives Us"
              subtitle="The principles that guide everything we do at Apna Ghar Loans."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {driveValues.map((val) => (
                <div key={val.title} className="text-center p-6">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <val.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-navy-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FAQSection />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
