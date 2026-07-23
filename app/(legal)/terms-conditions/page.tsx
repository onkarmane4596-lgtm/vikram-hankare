export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#02050A] text-slate-300 font-sans pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#040914] border border-slate-800 rounded-3xl p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
        <div className="prose prose-invert prose-cyan max-w-none">
          <p className="text-slate-400">Last updated: July 2026</p>
          
          <h2 className="text-xl text-white font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">2. Enrollment and Fees</h2>
          <p className="mb-4">
            All course enrollments are subject to availability. Fees must be paid in full before the commencement of the course unless an installment plan has been explicitly agreed upon in writing.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">3. Code of Conduct</h2>
          <p className="mb-4">
            SKYLINE teaches ethical hacking and cyber security for defensive purposes only. Any student found using the provided knowledge or lab facilities for illegal activities or unauthorized access will face immediate expulsion without refund and potential legal action.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All training materials, courseware, lab setups, and documentation provided remain the intellectual property of SKYLINE or its partners (e.g., EC-Council). Unauthorized distribution or reproduction is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
