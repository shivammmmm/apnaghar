import { Home, ArrowLeftRight, KeyRound, Landmark, HardHat, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const products = [
  {
    id: "home-loan",
    icon: Home,
    title: "Home Loan",
    desc: "Purchase your dream home with competitive interest rates and flexible repayment options from leading banks.",
    features: ["Competitive interest rates starting from 8.30% p.a.", "Tenure up to 30 years", "Up to 90% of property value", "Minimal documentation for salaried applicants", "Balance transfer facility available"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "balance-transfer",
    icon: ArrowLeftRight,
    title: "Balance Transfer",
    desc: "Transfer your existing home loan to a bank offering a lower interest rate and save significantly on your EMIs.",
    features: ["Lower interest rates than your current loan", "Reduced monthly EMI", "Top-up loan facility available", "Seamless transfer process", "Significant savings over loan tenure"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "resale",
    icon: KeyRound,
    title: "Resale Property Loan",
    desc: "Get financing for pre-owned residential properties with streamlined documentation and faster processing.",
    features: ["Finance for ready-to-move properties", "Quick property valuation", "Simplified legal verification", "Competitive rates for resale properties", "Guidance on property due diligence"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plot-loan",
    icon: Landmark,
    title: "Plot Loan",
    desc: "Secure funding to purchase residential plots in approved layouts and build your home from the ground up.",
    features: ["Finance for residential plot purchase", "Approved layout and colony plots", "Construction loan linkage available", "Flexible repayment options", "Quick disbursement process"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "construction-loan",
    icon: HardHat,
    title: "Construction Loan",
    desc: "Finance the construction of your home with stage-wise disbursement aligned to construction milestones.",
    features: ["Stage-wise disbursement", "Interest only on disbursed amount", "Linked to plot loan available", "Construction monitoring support", "Flexible construction timeline"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lap",
    icon: Building2,
    title: "Loan Against Property",
    desc: "Leverage your existing residential or commercial property to access funds for personal or business needs.",
    features: ["Up to 60% of property market value", "Lower interest than personal loans", "Use for business expansion or personal needs", "Longer repayment tenure available", "Continue using your property"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];

export default function LoanProducts() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Loan Products</span>
          </nav>

          <SectionHeading
            label="Our Solutions"
            title="Loan Products"
            subtitle="Comprehensive home loan solutions designed to match every stage of your homeownership journey."
          />

          <div className="space-y-12">
            {products.map((prod, idx) => (
              <div key={prod.id} id={prod.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center">
                        <prod.icon className="w-7 h-7 text-navy-700" />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl text-navy-900">{prod.title}</h2>
                    </div>
                    <p className="text-navy-500 leading-relaxed mb-6">{prod.desc}</p>
                    <ul className="space-y-3 mb-6">
                      {prod.features.map(feat => (
                        <li key={feat} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-sm text-navy-600">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden group shadow-md ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
                  </div>
                </div>
                {idx < products.length - 1 && (
                  <div className="border-b border-navy-100 mt-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
