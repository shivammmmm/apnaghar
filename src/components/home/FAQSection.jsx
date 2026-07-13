import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeading from '../SectionHeading';

const faqs = [
  {
    q: "How much home loan can I get?",
    a: "Your home loan eligibility depends on several factors including your monthly income, existing EMIs, credit score, age, and the property value. Generally, banks offer up to 75–90% of the property value. Use our Eligibility Calculator for an instant estimate."
  },
  {
    q: "Can self-employed individuals apply for a home loan?",
    a: "Yes, self-employed individuals can apply for a home loan. Documentation requirements may differ — typically ITR for the last 2–3 years, business proof, and bank statements are required. We guide self-employed applicants through the entire process."
  },
  {
    q: "What documents are required for a home loan?",
    a: "Common documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips or ITR), bank statements (last 6 months), and property documents. The exact list varies by profile and lender."
  },
  {
    q: "Are there any charges for Apna Ghar Loans services?",
    a: "No, our advisory services are completely free. We do not charge customers any service fee. We are compensated by our banking partners, allowing us to offer you unbiased, high-quality advice at zero cost."
  },
  {
    q: "How long does it take for a home loan to get approved?",
    a: "Generally, it takes 3 to 7 working days to get a home loan approved after submitting all the required documents. In some cases, depending on the property check, it might take a bit longer. We work with lenders to expedite this."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQs"
          title="Frequently Asked Questions"
          subtitle="Get answers to the most common questions about home loans."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border border-navy-100/50 rounded-xl px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-navy-900 font-medium text-sm sm:text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy-500 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
