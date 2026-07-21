import { Link } from 'react-router-dom';
import { Home, ArrowLeftRight, KeyRound, Landmark, HardHat, Building2, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const products = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Purchase your dream home with competitive interest rates and flexible repayment options tailored to your needs.",
    link: "/loans#home-loan",
    gradient: "from-blue-500 to-blue-700",
    light: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: ArrowLeftRight,
    title: "Balance Transfer",
    desc: "Transfer your existing home loan to reduce your interest burden and save on monthly EMIs.",
    link: "/loans#balance-transfer",
    gradient: "from-sky-500 to-sky-700",
    light: "bg-sky-50",
    iconColor: "text-sky-600",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: KeyRound,
    title: "Resale Property Loan",
    desc: "Get financing for pre-owned properties with streamlined documentation and quick processing.",
    link: "/loans#resale",
    gradient: "from-violet-500 to-violet-700",
    light: "bg-violet-50",
    iconColor: "text-violet-600",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Landmark,
    title: "Plot Loan",
    desc: "Secure funding to purchase land for your dream home with customized terms.",
    link: "/loans#plot-loan",
    gradient: "from-emerald-500 to-emerald-700",
    light: "bg-emerald-50",
    iconColor: "text-emerald-600",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: HardHat,
    title: "Construction Loan",
    desc: "Build your dream home on your owned plot with stage-wise disbursement linked to construction progress.",
    link: "/loans#construction-loan",
    gradient: "from-amber-500 to-amber-700",
    light: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Building2,
    title: "Loan Against Property",
    desc: "Unlock the value of your property for business expansion, child education, or other personal financial requirements.",
    link: "/loans#lap",
    gradient: "from-rose-500 to-rose-700",
    light: "bg-rose-50",
    iconColor: "text-rose-600",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
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
              className="bg-white rounded-3xl border border-navy-100/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className={`absolute bottom-3 left-6 w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${prod.light}`}>
                    <prod.icon className={`w-5 h-5 ${prod.iconColor}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-navy-900 mb-3">{prod.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{prod.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={prod.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
