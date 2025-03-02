import { GetStaticProps } from "next";
import Head from "next/head";
import { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import ToolCard from "@/component/tools/image/ToolCard";
import FeaturedToolCard from "@/component/tools/image/FeaturedToolCard";
import { Search, XCircle } from "lucide-react";
import aiImageDesignTools from "@/data/aiImageDesignTools";

const GoogleAd = dynamic(() => import("@/component/GoogleAd"), { ssr: false });

interface AITool {
  name: string;
  description: string;
  url: string;
  logo: string;
  type: "Free" | "Freemium" | "Paid";
  category: "image" | "design";
  verified?: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tools: aiImageDesignTools,
    },
  };
};

export default function ImageDesignAITools({ tools }: { tools: AITool[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"All" | "Free" | "Freemium" | "Paid">("All");
  const [categoryFilter, setCategoryFilter] = useState<"All" | "image" | "design">("All");

  const filteredTools = useMemo(
    () =>
      tools.filter(
        (tool) =>
          (filter === "All" || tool.type === filter) &&
          (categoryFilter === "All" || tool.category === categoryFilter) &&
          tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [tools, filter, categoryFilter, searchQuery]
  );

  const topTools = filteredTools.slice(0, 3);
  const otherTools = filteredTools.slice(3);

  const clearSearch = useCallback(() => setSearchQuery(""), []);

  return (
    <>
      <Head>
        <title>
          {filteredTools.length > 0
            ? `Best ${filteredTools.length} AI Image & Design Tools`
            : "Best AI Image & Design Tools"}
        </title>
        <meta
          name="description"
          content="Discover the best AI-powered tools for image generation, graphic design, and creative enhancement."
        />
        <meta
          name="keywords"
          content="AI Image Tools, AI Design Tools, AI Art Generators, Graphic Design AI"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best AI Image & Design Tools" />
        <meta property="og:image" content="/images/ai-image-design-tools.jpg" />
      </Head>

      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Best AI Image & Design Tools</h1>
      <p className="text-center text-gray-600 mb-7">
        Explore top AI-powered tools for image creation, graphic design, and creative enhancement.
      </p>

      <div className="flex justify-center my-5">
        <GoogleAd adSlot="top-ad-slot-id" />
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search AI Tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <XCircle
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                size={20}
                onClick={clearSearch}
              />
            )}
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "All" | "Free" | "Freemium" | "Paid")}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Free">Free</option>
            <option value="Freemium">Freemium</option>
            <option value="Paid">Paid</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as "All" | "image" | "design")}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="image">Image Tools</option>
            <option value="design">Design Tools</option>
          </select>
        </div>

        <div className="flex justify-center my-6">
          <GoogleAd adSlot="middle-ad-slot-id" />
        </div>

        {topTools.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏆 Top 3 AI Image & Design Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topTools.map((tool, index) => (
                <FeaturedToolCard key={index} {...tool} />
              ))}
            </div>
          </>
        )}

        {otherTools.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📌 More AI Image & Design Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No tools found for the selected filters.</p>
        )}

        <div className="flex justify-center my-6">
          <GoogleAd adSlot="bottom-ad-slot-id" />
        </div>
      </div>
    </>
  );
}
