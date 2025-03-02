"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../utils/lib/firebaseConfig"; // Import Firebase config
import Head from "next/head";

import Link from "next/link";
import dynamic from "next/dynamic";

const GoogleAd = dynamic(() => import("../component/GoogleAd"), { ssr: false });
const GameComponent = dynamic(() => import("../component/game/GameComponent"), { ssr: false });
import FeaturedToolsSection from "../component/home/FeaturedToolsSection";
import AICategories from "../component/home/AICategories";
import { GetStaticProps } from "next";
import blogPosts from "@/data/blogposts";
import Blogs from "../component/blogs/Blogs"
interface AIBlog {
  title: string;
  link: string;
  image: string;
  id: number;
  excerpt:string;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blogs: blogPosts,
    },
  };
};


export default function Home({ blogs }: { blogs: AIBlog[] }) {
  const [adClicks, setAdClicks] = useState(0);
  

  // Fetch total ad clicks from Firebase
  useEffect(() => {
    const fetchAdClicks = async () => {
      try {
        const adClicksRef = ref(database, "adClicks");
        const snapshot = await get(adClicksRef);
        if (snapshot.exists()) {
          setAdClicks(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching ad clicks:", error);
      }
    };

    fetchAdClicks();
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>AI Tool Directory - Discover the Best AI Tools & Software</title>
        <meta
          name="description"
          content="Your ultimate directory for AI tools, software, and applications. Find the perfect AI solution for your needs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Tool Directory - Discover the Best AI Tools & Software" />
        <meta property="og:description" content="Find and explore AI tools for various needs." />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Tool Directory" />
        <meta name="twitter:description" content="Find and explore AI tools for various needs." />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* 🔥 Ad Click Counter - Placed Smartly at the Top */}
        <div className="w-full bg-blue-100 text-blue-800 text-center py-3 font-semibold shadow-md">
          Users have clicked on ads <span className="text-blue-600">{adClicks}</span> times! 🚀
        </div>

    


        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Discover the Best AI Tools & Software</h1>
            <p className="text-xl mb-8">
              Your ultimate directory for AI tools, software, and applications. Find the perfect AI solution for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/#categories"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Tools
              </Link>
              <Link
                href="/#blogs"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Game Component */}
        <div className="w-full mt-2 hidden md:flex">
          <GameComponent />
        </div>

        {/* Google AdSense Ad in Hero Section */}
        <div className="flex justify-center my-5">
          <GoogleAd adSlot="top-ad-slot-id" />
        </div>

        {/* Featured Tools Section */}
        <FeaturedToolsSection />

        {/* Google AdSense Ad Below Featured Tools */}
        <div className="flex justify-center my-6">
          <GoogleAd adSlot="middle-ad-slot-id" />
        </div>

        {/* AI Categories */}
        <AICategories />

        {/* Blog Section */}
       
        <Blogs blogs={blogs} />
        {/* Google AdSense Ad Below Blog Section */}
        <div className="flex justify-center my-6">
          <GoogleAd adSlot="bottom-ad-slot-id" />
        </div>
      </div>
    </>
  );
}
