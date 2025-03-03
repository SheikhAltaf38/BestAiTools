import { GetStaticProps } from "next";
import Head from "next/head";
import { useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import ToolCard from "@/component/tools/text-writing/ToolCard";
import FeaturedToolCard from "@/component/tools/text-writing/FeaturedToolCard";
import { Search, XCircle } from "lucide-react";
import productivityAutomationAITools from "@/data/productivityAutomationAITools";
import { ref, get } from "firebase/database";
import { database } from "../../../utils/lib/firebaseConfig";

const GoogleAd = dynamic(() => import("../../../component/GoogleAd"), { ssr: false });

interface AITool {
  name: string;
  description: string;
  url: string;
  logo: string;
  type: "Free" | "Freemium" | "Paid";
  verified?: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tools: productivityAutomationAITools,
    },
  };
};

export default function ProductivityAutomationAITools({ tools }: { tools: AITool[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"All" | "Free" | "Freemium" | "Paid">("All");
  const [adClicks, setAdClicks] = useState(0);

  const filteredTools = useMemo(
    () =>
      tools.filter(
        (tool) =>
          (filter === "All" || tool.type === filter) &&
          tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [tools, filter, searchQuery]
  );

  const topTools = filteredTools.slice(0, 3);
  const otherTools = filteredTools.slice(3);

  const clearSearch = useCallback(() => setSearchQuery(""), []);

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
      <Head>
        <title>
          {filteredTools.length > 0
            ? `Best ${filteredTools.length} AI Productivity & Automation Tools`
            : "Best AI Productivity & Automation Tools"}
        </title>
        <meta name="description" content="Explore AI-powered productivity and automation tools for task management, scheduling, and workflow optimization." />
        <meta name="keywords" content="AI Productivity Tools, AI Automation Tools, Task Automation, Workflow AI" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best AI Productivity & Automation Tools" />
        <meta property="og:image" content="https://trendingaitools.vercel.app/og-image/productivity-automation-ai-tools.webp" />
        <link rel="canonical" href="https://trendingaitools.vercel.app/tools/productivity-automation-ai-tools" />
        <meta property="og:url" content="https://trendingaitools.vercel.app/tools/productivity-automation-ai-tools" />
      
      </Head>

      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Best AI Productivity & Automation Tools</h1>
      <p className="text-center text-gray-600 mb-7">Discover AI-powered tools for optimizing workflows, automating tasks, and boosting productivity.</p>

      <div className="w-full bg-blue-100 text-blue-800 text-center py-3 font-semibold shadow-md">
        Users have clicked on ads <span className="text-blue-600">{adClicks}</span> times! 🚀
      </div>

      <div className="flex justify-center my-5">
        <GoogleAd adSlot="6062226910" />
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
        </div>

        <div className="flex justify-center my-6">
          <GoogleAd adSlot="2232962424" />
        </div>

        {topTools.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏆 Top 3 AI Productivity & Automation Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topTools.map((tool, index) => (
                <FeaturedToolCard key={index} {...tool} />
              ))}
            </div>
          </>
        )}

        {otherTools.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📌 More AI Productivity & Automation Tools</h2>
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
          <GoogleAd adSlot="2823989360" />
        </div>
      </div>
    </>
  );
}
