import { Link } from 'react-router-dom';
import { Home, RefreshCw, Key, Map, Hammer, FileText, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const products = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Purchase your dream home with competitive interest rates and flexible repayment options tailored to your needs.",
    link: "/loans#home-loan",
    gradient: "from-blue-500 to-blue-700",
    light: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: RefreshCw,
    title: "Balance Transfer",
    desc: "Transfer your existing home loan to reduce your interest burden and save on monthly EMIs.",
    link: "/loans#balance-transfer",
    gradient: "from-sky-500 to-sky-700",
    light: "bg-sky-50",
    iconColor: "text-sky-600"
  },
  {
    icon: Key,
    title: "Resale Property Loan",
    desc: "Get financing for pre-owned properties with streamlined documentation and quick processing.",
    link: "/loans#resale",
    gradient: "from-violet-500 to-violet-700",
    light: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  {
    icon: Map,
    title: "Plot Loan",
    desc: "Secure funding to purchase land for your dream home with customized terms.",
    link: "/loans#plot-loan",
    gradient: "from-emerald-500 to-emerald-700",
    light: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Hammer,
    title: "Construction Loan",
    desc: "Build your dream home on your owned plot with stage-wise disbursement linked to construction progress.",
    link: "/loans#construction-loan",
    gradient: "from-amber-500 to-amber-700",
    light: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: FileText,
    title: "Loan Against Property",
    desc: "Unlock the value of your property for business expansion, child education, or other personal financial requirements.",
    link: "/loans#lap",
    gradient: "from-rose-500 to-rose-700",
    light: "bg-rose-50",
    iconColor: "text-rose-600"
  }
];

export default function LoanProducts() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Loan Products"
          title="Home Loan Solutions"
          subtitle="Explore our range of home loan products designed to meet different homeownership requirements."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((prod) => (
            <div
              key={prod.title}
              className="bg-white rounded-3xl border border-navy-100/50 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${prod.light}`}>
                  <prod.icon className={`w-6 h-6 ${prod.iconColor}`} />
                </div>
                <h3 className="font-heading text-2xl text-navy-900 mb-3">{prod.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-6">{prod.desc}</p>
              </div>
              <Link
                to={prod.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
