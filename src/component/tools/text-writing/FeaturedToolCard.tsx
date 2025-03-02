import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface FeaturedToolCardProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  type: "Free" | "Paid" | "Freemium" | string;
  verified?: boolean;
}

export default function FeaturedToolCard({ name, description, url, logo, type, verified = false }: FeaturedToolCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center">
        
        {/* Logo with Verification Icon */}
        <div className="relative w-16 h-16 mb-3">
          <Image src={logo} alt={name} width={64} height={64} className="rounded-full" />
          {verified && (
            <CheckCircle className="absolute -bottom-1 -right-1 text-white bg-blue-500 rounded-full p-0.5" size={18} />
          )}
        </div>

        {/* Name & Description */}
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm mt-2 text-center">{description}</p>

        {/* Badge for Tool Type */}
        <span className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-900">
          {type}
        </span>
      </div>
    </Link>
  );
}
