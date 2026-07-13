import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Privacy Policy</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-navy-600 space-y-6">
            <p className="text-xs text-navy-500">
              Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </p>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Information We Collect</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                When you use our website or submit a consultation request, we may collect personal information including your name, phone number, email address, city, employment details, and financial information relevant to your home loan inquiry.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">How We Use Your Information</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                We use the collected information to assess your eligibility, contact you regarding your inquiry, coordinate with our banking partners on your behalf, and send updates regarding your application. We do not sell or lease your personal information to third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Sharing Your Information</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                To process your home loan inquiry, we share relevant details with our designated banking and lending partners with whom you choose to apply. We ensure that our partners treat your personal data with high standards of security and confidentiality.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Security</h2>
              <p className="text-sm text-navy-600 leading-relaxed">
                We employ industry-standard safety practices to safeguard your personal data from unauthorized access, disclosure, modification, or destruction. However, no electronic storage or internet transmission is 100% secure, and we cannot guarantee absolute security.
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
