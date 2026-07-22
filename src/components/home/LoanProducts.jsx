import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const products = [
  {
    title: "Home Loan",
    desc: "Make your dream home a reality with our competitive home loans.",
    link: "/loans#home-loan",
    image: "/images/loans/home-loan.png"
  },
  {
    title: "Balance Transfer",
    desc: "Transfer your existing home loan to us and enjoy lower interest rates.",
    link: "/loans#balance-transfer",
    image: "/images/loans/balance-transfer.png"
  },
  {
    title: "Construction Loan",
    desc: "Finance the construction of your dream home with ease.",
    link: "/loans#construction-loan",
    image: "/images/loans/construction-loan.png"
  },
  {
    title: "Plot Loan",
    desc: "Buy your dream plot and build your future.",
    link: "/loans#plot-loan",
    image: "/images/loans/plot-loan.png"
  },
  {
    title: "Loan Against Property",
    desc: "Unlock the value of your property to meet your financial needs.",
    link: "/loans#loan-against-property",
    image: "/images/loans/loan-against-property.png"
  },
  {
    title: "Top-Up Loan",
    desc: "Get additional funds on your existing home loan.",
    link: "/loans#top-up-loan",
    image: "/images/loans/top-up-loan.png"
  },
  {
    title: "Home Renovation Loan",
    desc: "Renovate your home and give it a new look with our loans.",
    link: "/loans#home-renovation-loan",
    image: "/images/loans/home-renovation-loan.png"
  },
  {
    title: "Reverse Mortgage Loan",
    desc: "Secure your retirement with steady income from your property.",
    link: "/loans#reverse-mortgage-loan",
    image: "/images/loans/reverse-mortgage-loan.png"
  }
];

export default function LoanProducts() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="OUR LOAN PRODUCTS"
          title="Explore Our Wide Range of Loan Products"
          subtitle="Tailored loan solutions to help you achieve your dreams"
        />
        
        {/* Blue decorative line from the design */}
        <div className="text-center -mt-8 mb-16">
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((prod) => (
            <div
              key={prod.title}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group"
            >
              <div className="w-full flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center h-[140px] w-[140px]">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl text-navy-900 mb-3 font-semibold">{prod.title}</h3>
                <p className="text-sm text-navy-500/80 leading-relaxed mb-6 max-w-[240px] mx-auto">{prod.desc}</p>
              </div>
              <div className="pt-2">
                <Link
                  to={prod.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
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

