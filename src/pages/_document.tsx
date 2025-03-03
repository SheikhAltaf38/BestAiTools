import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* Google Search Console Verification */}
         <meta name="google-site-verification" content="mML9HB2Ln4KnFkoYnmTaax7xsaNA9-hVVvComtF9Lhs" />
        {/* Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the best AI-powered tools for text writing, content creation, and productivity." />
        <meta name="keywords" content="AI Writing Tools, Text Generators, AI Copywriting, Content Creation AI" />
        <meta name="author" content="Your Website Name" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Best AI Writing Tools for Content Creators" />
        <meta property="og:description" content="Explore top AI writing tools to enhance your content creation and productivity." />
        <meta property="og:image" content="/images/ai-writing-tools.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AI Writing Tools for Content Creators" />
        <meta name="twitter:description" content="Find the best AI-powered tools for text generation, copywriting, and more." />
        <meta name="twitter:image" content="/images/ai-writing-tools.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AI Writing Tools",
          "url": "https://yourwebsite.com",
          "description": "A collection of the best AI-powered writing tools for content creation and productivity."
        }) }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
