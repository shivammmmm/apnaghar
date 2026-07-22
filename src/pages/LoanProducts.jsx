import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const products = [
  {
    id: "home-loan",
    customIcon: "/images/loans/home-loan.png",
    title: "Home Loan",
    desc: "Purchase your dream home with competitive interest rates and flexible repayment options from leading banks.",
    features: ["Competitive interest rates starting from 8.30% p.a.", "Tenure up to 30 years", "Up to 90% of property value", "Minimal documentation for salaried applicants", "Balance transfer facility available"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "balance-transfer",
    customIcon: "/images/loans/balance-transfer.png",
    title: "Balance Transfer",
    desc: "Transfer your existing home loan to a bank offering a lower interest rate and save significantly on your EMIs.",
    features: ["Lower interest rates than your current loan", "Reduced monthly EMI", "Top-up loan facility available", "Seamless transfer process", "Significant savings over loan tenure"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "construction-loan",
    customIcon: "/images/loans/construction-loan.png",
    title: "Construction Loan",
    desc: "Finance the construction of your home with stage-wise disbursement aligned to construction milestones.",
    features: ["Stage-wise disbursement", "Interest only on disbursed amount", "Linked to plot loan available", "Construction monitoring support", "Flexible construction timeline"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plot-loan",
    customIcon: "/images/loans/plot-loan.png",
    title: "Plot Loan",
    desc: "Secure funding to purchase residential plots in approved layouts and build your home from the ground up.",
    features: ["Finance for residential plot purchase", "Approved layout and colony plots", "Construction loan linkage available", "Flexible repayment options", "Quick disbursement process"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "loan-against-property",
    customIcon: "/images/loans/loan-against-property.png",
    title: "Loan Against Property",
    desc: "Leverage your existing residential or commercial property to access funds for personal or business needs.",
    features: ["Up to 60% of property market value", "Lower interest than personal loans", "Use for business expansion or personal needs", "Longer repayment tenure available", "Continue using your property"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "top-up-loan",
    customIcon: "/images/loans/top-up-loan.png",
    title: "Top-Up Loan",
    desc: "Get additional funds over your existing home loan for any home-related or general financial requirements with minimal hassle.",
    features: ["Additional loan over and above your existing home loan", "Lower interest rates compared to personal loans", "No restriction on end-use of funds (personal or business)", "Simplified documentation and quick disbursal", "Flexible repayment tenure matching your parent loan"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "home-renovation-loan",
    customIcon: "/images/loans/home-renovation-loan.png",
    title: "Home Renovation Loan",
    desc: "Finance structural repair, flooring, plumbing, painting, or any other home improvements to give your house a new look.",
    features: ["Funding for structural repair, painting, tiling, plumbing, etc.", "Higher loan-to-value ratio for renovation costs", "Low interest rates starting from 8.35% p.a.", "Tenure up to 15 years to match your budget", "Quick processing with estimation-based validation"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "reverse-mortgage-loan",
    customIcon: "/images/loans/reverse-mortgage-loan.png",
    title: "Reverse Mortgage Loan",
    desc: "Secure your retirement by converting a portion of your home equity into steady tax-free cash flow while keeping ownership.",
    features: ["Steady monthly source of income for senior citizens (60+)", "No requirement to service or repay the loan during lifetime", "Ownership and occupancy of the home remains with the seniors", "Lump-sum option available for medical emergencies", "Loan settled by selling property after lifetime or by heirs"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
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
                      <div className="w-16 h-16 shrink-0">
                        <img
                          src={prod.customIcon}
                          alt={prod.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl text-navy-900 font-semibold">{prod.title}</h2>
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

