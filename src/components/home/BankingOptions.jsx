import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, Shield } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const Qn = "https://auraveni.github.io/global-bank-logos/assets/bank/indian-bank";

const banks = [
  { name: "State Bank of India", logo: `${Qn}/sbi.svg` },
  { name: "HDFC Bank", logo: `${Qn}/hdfc.svg` },
  { name: "ICICI Bank", logo: `${Qn}/icici.svg` },
  { name: "Axis Bank", logo: `${Qn}/axis.svg` },
  { name: "Kotak Mahindra Bank", logo: `${Qn}/kotak.svg` },
  { name: "Punjab National Bank", logo: `${Qn}/pnb.svg` },
  { name: "Bank of Baroda", logo: `${Qn}/bob.svg` },
  { name: "Canara Bank", logo: `${Qn}/canara.svg` },
  { name: "Union Bank of India", logo: `${Qn}/ubi.svg` },
  { name: "IDBI Bank", logo: `${Qn}/idbi.svg` },
  { name: "YES Bank", logo: `${Qn}/yes.svg` },
  { name: "Indian Bank", logo: `${Qn}/indian.svg` }
];

export default function BankingOptions() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Banking Options"
          title="Multiple Banking Partners"
          subtitle="We help customers explore a wide range of banking options across leading lenders based on their specific requirements and eligibility."
        />

        <div className="relative mb-14">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          <div className="overflow-hidden py-2">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...banks, ...banks].map((bank, t) => (
                <div
                  key={`${bank.name}-${t}`}
                  className="group mx-3 flex h-24 w-44 sm:w-52 items-center justify-center rounded-2xl border border-navy-100/60 bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <img
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    loading="lazy"
                    title={bank.name}
                    className="max-h-11 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-navy-100/50 p-8 md:p-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                <Landmark className="w-7 h-7 text-navy-700" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-navy-900 mb-2">Wide Range of Lenders</h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  We work with multiple banks and financial institutions to bring you a comprehensive view of available home loan options. Our advisors compare interest rates, processing fees, and terms across lenders to help you make an informed decision.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Nationalized Banks", desc: "Explore options from leading public sector banks" },
                { label: "Private Banks", desc: "Compare offerings from top private sector banks" },
                { label: "Housing Finance", desc: "Dedicated housing finance company options" }
              ].map(item => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-4 text-center">
                  <Shield className="w-5 h-5 text-navy-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-navy-800 mb-1">{item.label}</p>
                  <p className="text-xs text-navy-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-navy-400 mb-6 leading-relaxed">
              Disclaimer: Apna Ghar Loans is a home loan advisory service. We assist customers in comparing and applying for home loans from various financial institutions. Individual loan terms, rates, and approval are subject to the respective bank's policies and the applicant's eligibility.
            </p>

            <Link to="/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-all">
              Explore Your Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
