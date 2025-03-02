
import { BookmarkPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedToolsSection = () => {
  // Mock data for featured tools
  const featuredTools = [
    {
      id: 1,
      logo: "/feauturestool/deepseek-logo.png", // Replace with actual logo path
      name: "DeepSeek",
      rating: 5,
      reviews: 1,
      pricing: "Freemium",
      bookmarks: 33,
      description: "Scales efficient language processing with open-source accessibility.",
      tags: ["#writing generators", "#research", "#ai chatbots"],
      isNew: true,
      website: "https://deepseek.com", // Replace with actual website URL
    },
    {
      id: 2,
      logo: "/feauturestool/chatgpt-logo.png", // Replace with actual logo path
      name: "ChatGPT",
      rating: 4.5,
      reviews: 120,
      pricing: "Freemium",
      bookmarks: 500,
      description: "Advanced AI chatbot for conversational AI and content generation.",
      tags: ["#ai chatbots", "#content generation"],
      isNew: false,
      website: "https://chatgpt.com", // Replace with actual website URL
    },
    {
      id: 3,
      logo: "/feauturestool/claude-logo.png", // Replace with actual logo path
      name: "Claude",
      rating: 4,
      reviews: 80,
      pricing: "Freemium",
      bookmarks: 200,
      description: "AI assistant for research and productivity.",
      tags: ["#research", "#productivity"],
      isNew: false,
      website: "https://claude.ai", // Replace with actual website URL
    },
  ];

  return (
    <>
    {/* Featured Tools Section */}
    <section className="pb-16 pt-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-950 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Tool Logo */}
              <div className="flex items-center mb-4">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} Logo`}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold ml-3">{tool.name}</h3>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${
                        i < tool.rating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white ml-2">
                  Rated {tool.rating} out of 5 ({tool.reviews})
                </span>
              </div>

              {/* Pricing and Bookmarks */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-white">{tool.pricing}</span>
                <span className="text-white">{tool.bookmarks} bookmarks <BookmarkPlus /></span>
              </div>

              {/* Description */}
              <p className="text-white mb-4">{tool.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* New Badge */}
              {tool.isNew && (
                <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm w-fit mb-4">
                  New
                </div>
              )}

              {/* Visit Button */}
              <div className="text-blue-600 hover:underline bg-white rounded-full py-1 px-2 w-fit hover:scale-105 transition-all duration-300">Visit →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default FeaturedToolsSection;