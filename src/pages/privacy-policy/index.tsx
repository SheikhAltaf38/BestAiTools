import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - AI Directory</title>
        <meta name="description" content="Read our privacy policy to understand how AI Directory operates and manages user interactions." />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 text-center text-2xl font-bold">
          Privacy Policy
        </header>
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-4">Effective Date: [01/03/2025]</p>
          <p className="text-gray-300 mb-4">Welcome to AI Directory. Your privacy is important to us. This policy explains how our website operates.</p>
          
          <h2 className="text-2xl font-semibold mt-6">1. No Personal Data Collection</h2>
          <p className="text-gray-300">We do not collect, store, or process personal information from users. AI Directory is a platform that allows users to explore AI tools by category and view top AI tools.</p>
          
          <h2 className="text-2xl font-semibold mt-6">2. Cookies and Analytics</h2>
          <p className="text-gray-300">We may use cookies for website functionality and improvement. Additionally, third-party services like Google Analytics may track website performance without collecting personal information.</p>
          
          <h2 className="text-2xl font-semibold mt-6">3. Third-Party Links</h2>
          <p className="text-gray-300">AI Directory provides links to external AI tools. We are not responsible for their privacy practices. Please review their policies before using their services.</p>
          
          <h2 className="text-2xl font-semibold mt-6">4. Policy Updates</h2>
          <p className="text-gray-300">This Privacy Policy may be updated periodically. Changes will be reflected on this page with an updated effective date.</p>
          
          <h2 className="text-2xl font-semibold mt-6">5. Contact Us</h2>
          <p className="text-gray-300">If you have any questions about this Privacy Policy, you can contact us at: [altafsheikh3111@gmail.com].</p>
        </main>
        <footer className="bg-gray-800 p-4 text-center mt-6">
          <Link href="/" className="hover:text-white">
            Back to Home
          </Link>
        </footer>
      </div>
    </>
  );
}
