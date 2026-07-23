export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#02050A] text-slate-300 font-sans pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#040914] border border-slate-800 rounded-3xl p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Refund Policy</h1>
        <div className="prose prose-invert prose-cyan max-w-none">
          <p className="text-slate-400">Last updated: July 2026</p>
          
          <h2 className="text-xl text-white font-semibold mt-8 mb-4">1. General Policy</h2>
          <p className="mb-4">
            At SKYLINE, we strive to provide the highest quality of education. We understand that circumstances may change, and our refund policy is designed to be fair to both the student and the institution.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">2. Eligibility for Refund</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
            <li><strong>Before Course Commencement:</strong> 100% refund (minus administrative fees) if requested at least 7 days before the batch start date.</li>
            <li><strong>Within First Week:</strong> 50% refund if requested within the first week of classes.</li>
            <li><strong>After First Week:</strong> No refunds will be issued after the first week of the course has been completed.</li>
          </ul>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">3. Certification Exams</h2>
          <p className="mb-4">
            Fees paid specifically for third-party certification exams (e.g., EC-Council CEH) are strictly non-refundable once the exam voucher has been purchased or assigned to the student.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">4. Process</h2>
          <p className="mb-4">
            To request a refund, please submit a written request to info@skycyberforensics.in detailing your reason. Approved refunds will be processed within 14-21 working days to the original payment method.
          </p>
        </div>
      </div>
    </div>
  );
}
