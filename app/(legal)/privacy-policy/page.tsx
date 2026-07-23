export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#02050A] text-slate-300 font-sans pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#040914] border border-slate-800 rounded-3xl p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-cyan max-w-none">
          <p className="text-slate-400">Last updated: July 2026</p>
          
          <h2 className="text-xl text-white font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At SKYLINE Centre of Excellence in Cyber Security and Forensics, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">2. The Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-400">
            <li>To process your admission or inquiry.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our website, products/services, marketing or customer relationships.</li>
          </ul>

          <h2 className="text-xl text-white font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
        </div>
      </div>
    </div>
  );
}
