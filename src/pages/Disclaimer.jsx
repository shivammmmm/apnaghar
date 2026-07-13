import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Disclaimer</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy-900 mb-8">Disclaimer</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-navy-600 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Advisory Service</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                Apna Ghar Loans is a home loan advisory and consultation service. We are not a bank, non-banking financial company (NBFC), or housing finance company. We do not directly lend money or provide credit facilities.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Interest Rates and Terms</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                All interest rates, processing fees, and loan terms displayed on this website are indicative and for informational purposes only. The actual rate of interest, processing fees, and loan approval terms are subject to change and are decided solely by the respective bank or financial institution at the time of processing the application based on the applicant's credit score, income, property verification, and internal bank policies.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">No Guarantee of Approval</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                While we make every effort to assist customers in checking their eligibility and applying for loans, Apna Ghar Loans does not guarantee loan approval or sanction. The decision to approve, sanction, or reject a loan application lies entirely with the lending bank or financial partner. We are not liable for any rejection or delay in loan processing.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Unbiased Advice</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                We strive to provide unbiased comparison and advice to help you find the best banking options. However, we recommend that users verify the final loan agreement and terms directly with the bank before signing. Apna Ghar Loans will not be responsible for any disputes arising between the borrower and the lender post loan disbursement.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
