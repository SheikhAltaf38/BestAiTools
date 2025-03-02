import "../styles/global.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AI Tool Directory - Discover the Best AI Tools & Software</title>
        <meta
          name="description"
          content="Comprehensive directory of AI tools, software, and applications. Find the perfect AI solution for your needs with our curated collection of artificial intelligence resources."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Tool Directory - Discover the Best AI Tools & Software" />
        <meta property="og:description" content="Your ultimate guide to AI tools and software solutions" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:site_name" content="AI Tool Directory" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Tool Directory - Discover the Best AI Tools & Software" />
        <meta name="twitter:description" content="Your ultimate guide to AI tools and software solutions" />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
      </Head>

      {/* Google AdSense Script */}
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        async
      />

      <div className="min-h-screen bg-gray-50">
        <header>
          <Navbar />
        </header>
        <main className="py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
