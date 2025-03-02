import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  type: "Free" | "Paid" | "Freemium" | string;
  verified?: boolean;
}

export default function ToolCard({ name, description, url, logo, type, verified = false }: ToolCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer border border-gray-200 hover:border-blue-500 flex flex-col items-center">
        
        {/* Logo with Verification Icon */}
        <div className="relative w-16 h-16 mb-3">
          <Image src={logo} alt={name} width={64} height={64} className="rounded-full" />
          {verified && (
            <CheckCircle className="absolute -bottom-1 -right-1 text-blue-500 bg-white rounded-full p-0.5" size={18} />
          )}
        </div>

        {/* Name & Description */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 text-center">{description}</p>

        {/* Badge for Tool Type */}
        <span
          className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
            type === "Free" ? "bg-green-100 text-green-800" :
            type === "Paid" ? "bg-red-100 text-red-800" :
            "bg-yellow-100 text-yellow-800"
          }`}
        >
          {type}
        </span>
      </div>
    </Link>
  );
}
