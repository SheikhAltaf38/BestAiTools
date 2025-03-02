import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - AI Directory</title>
        <meta name="description" content="Read the Terms of Service for AI Directory to understand the guidelines for using our platform." />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 text-center text-2xl font-bold">
          Terms of Service
        </header>
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
          <p className="text-gray-300 mb-4">Effective Date: [01/03/2025]</p>
          <p className="text-gray-300 mb-4">By accessing or using AI Directory, you agree to these Terms of Service.</p>
          
          <h2 className="text-2xl font-semibold mt-6">1. Use of Our Website</h2>
          <p className="text-gray-300">AI Directory provides an informational platform where users can explore AI tools categorized by type and view top AI tools. You agree to use the website lawfully.</p>
          
          <h2 className="text-2xl font-semibold mt-6">2. No User Accounts or Data Collection</h2>
          <p className="text-gray-300">We do not require user accounts or collect personal data. Any interactions with third-party AI tools linked from our website are subject to their terms.</p>
          
          <h2 className="text-2xl font-semibold mt-6">3. Third-Party Links</h2>
          <p className="text-gray-300">Our website contains links to external AI tools. We do not control or endorse their content and are not responsible for their policies.</p>
          
          <h2 className="text-2xl font-semibold mt-6">4. Disclaimer of Warranties</h2>
          <p className="text-gray-300">AI Directory provides information on AI tools &quot;as is&quot; without any warranties or guarantees regarding accuracy or reliability.</p>

          
          <h2 className="text-2xl font-semibold mt-6">5. Limitation of Liability</h2>
          <p className="text-gray-300">We are not liable for any damages resulting from your use of AI Directory or third-party links.</p>
          
          <h2 className="text-2xl font-semibold mt-6">6. Changes to Terms</h2>
          <p className="text-gray-300">We may update these Terms of Service at any time. Changes will be posted on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
          <p className="text-gray-300">If you have any questions, contact us at: [altafsheikh3111@gmail.com].</p>
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
