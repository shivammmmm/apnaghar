import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Terms & Conditions</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy-900 mb-8">Terms & Conditions</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-navy-600 space-y-6">
            <p className="text-xs text-navy-500">
              Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </p>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Services</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                Apna Ghar Loans provides home loan advisory and consultation services. We assist customers in comparing home loan options from various financial institutions and guide them through the application process. We are not a bank or a direct lending institution.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">No Representation of Lending</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                Apna Ghar Loans does not directly provide credit, loans, or financial products. Any agreement or loan contract is signed strictly between you and the respective lending institution. We hold no responsibility for the execution, fulfillment, or terms of such agreements.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Accuracy of Information</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                We make every effort to display correct and up-to-date banking rates and options. However, financial institutions frequently revise their offerings, and Apna Ghar Loans cannot guarantee the exact accuracy of all specifications at any given time. Users are advised to confirm terms independently.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Limitation of Liability</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                In no event will Apna Ghar Loans be liable for any direct, indirect, consequential, or special damages arising out of your use of this website, consultations, or interactions with our banking partners.
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
