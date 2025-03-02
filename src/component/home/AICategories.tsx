"use client";

import { useEffect } from "react";
import Link from "next/link";

const categories = [
  { name: "Text & Writing AI Tools", icon: "📝", url: "/tools/text-writing" },
  { name: "Image & Design AI Tools", icon: "🎨", url: "/tools/ai-image-design" },
  { name: "Video & Animation AI Tools", icon: "🎥", url: "/tools/video-animation-ai-tools" },
  { name: "Audio & Speech AI Tools", icon: "🎙️", url: "/tools/audio-speech-ai-tools" },
  { name: "Data & Analytics AI Tools", icon: "📊", url: "/tools/data-analytics-ai-tools" },
  { name: "Chatbots & Virtual Assistants", icon: "🤖", url: "/tools/chatbots-ai-tools" },
  { name: "E-commerce AI Tools", icon: "🛍️", url: "/tools/ecommerce-ai-tools" },
  { name: "AI SEO & Marketing", icon: "📈", url: "/tools/seo-marketing-ai-tools" },
  { name: "Security & Fraud Detection AI Tools", icon: "🔒", url: "/tools/security-fraud-ai-tools" },
  { name: "AI Productivity & Automation", icon: "⚡", url: "/tools/productivity-automation-ai-tools" },
];

export default function AICategories() {
  useEffect(() => {
    // Schema Markup for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "AI Tool Categories",
      "description": "Explore various categories of AI tools to enhance your workflow.",
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": category.name,
        "url": category.url,
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="categories" className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Explore AI Tool Categories
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover AI tools across various categories to streamline your workflow, boost productivity, and unlock new possibilities.
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <Link href={category.url} key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              {/* Icon */}
              <div className="text-5xl mb-4">{category.icon}</div>
              {/* Category Name */}
              <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
