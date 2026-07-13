import { PhoneCall, UserCheck, GitCompare, FolderOpen, CheckCircle2, KeyRound } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const steps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    desc: "Share your requirements with our expert advisors for a free initial discussion.",
    docs: ["Basic details", "Income overview"]
  },
  {
    icon: UserCheck,
    title: "Eligibility Check",
    desc: "We assess your profile to determine your home loan eligibility across multiple banks.",
    docs: ["Income proof", "Credit score", "Employment details"]
  },
  {
    icon: GitCompare,
    title: "Bank Comparison",
    desc: "Compare interest rates, terms, and features from multiple banking partners.",
    docs: ["Rate comparison sheet", "Term analysis"]
  },
  {
    icon: FolderOpen,
    title: "Documentation",
    desc: "We guide you through the required paperwork and ensure everything is in order.",
    docs: ["KYC documents", "Income documents", "Property documents"]
  },
  {
    icon: CheckCircle2,
    title: "Approval",
    desc: "Your application is processed and approved by the selected financial institution.",
    docs: ["Sanction letter", "Terms review"]
  },
  {
    icon: KeyRound,
    title: "Disbursement",
    desc: "The loan amount is disbursed, and you move closer to owning your dream home.",
    docs: ["Property verification", "Final agreement"]
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/18a9e3d45_generated_cb8b2e25.png')", backgroundSize: 'cover' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Process"
          title="Your Home Loan Journey"
          subtitle="A transparent, step-by-step process from initial consultation to moving into your dream home."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-navy-200" />
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative flex gap-6 md:gap-8">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy-900 flex items-center justify-center shrink-0 shadow-lg shadow-navy-900/20">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="group bg-white rounded-xl p-5 md:p-6 border border-navy-100/50 hover:border-navy-200 hover:shadow-md transition-all flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-navy-300 uppercase">Step {idx + 1}</span>
                    <h4 className="text-sm font-semibold text-navy-900">{step.title}</h4>
                  </div>
                  <p className="text-xs text-navy-500 leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.docs.map((doc) => (
                      <span key={doc} className="px-2.5 py-1 bg-slate-50 text-[10px] font-medium text-navy-600 rounded-md border border-navy-100/30">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
