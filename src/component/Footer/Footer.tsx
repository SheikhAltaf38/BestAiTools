// 'use client';

// import Link from 'next/link';
// import { Facebook, Twitter, Linkedin, Youtube, Globe, Mail } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* ✅ Branding Section */}
//           <div>
//             <h2 className="text-2xl font-bold text-white">AI Directory</h2>
//             <p className="text-gray-400 mt-2">
//               Discover the best AI tools and software solutions for your needs.
//             </p>
//             <div className="mt-4 flex space-x-4">
//               <Link href="https://facebook.com" className="hover:text-blue-500"><Facebook size={20} /></Link>
//               <Link href="https://twitter.com" className="hover:text-blue-400"><Twitter size={20} /></Link>
//               <Link href="https://linkedin.com" className="hover:text-blue-300"><Linkedin size={20} /></Link>
//               <Link href="https://youtube.com" className="hover:text-red-500"><Youtube size={20} /></Link>
//             </div>
//           </div>

//           {/* ✅ Navigation Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white">Quick Links</h3>
//             <ul className="mt-2 space-y-2">
//               <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//               <li><Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
//               <li><Link href="/submit" className="text-gray-400 hover:text-white">Submit Tool</Link></li>
//               <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
//             </ul>
//           </div>

//           {/* ✅ Contact & SEO Schema */}
//           <div>
//             <h3 className="text-lg font-semibold text-white">Contact</h3>
//             <ul className="mt-2 space-y-2">
//               <li className="flex items-center space-x-2">
//                 <Globe size={18} />
//                 <span className="text-gray-400">www.aidirectory.com</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Mail size={18} />
//                 <span className="text-gray-400">contact@aidirectory.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* ✅ Copyright & Legal Links */}
//         <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
//           <p>© {new Date().getFullYear()} AI Directory. All Rights Reserved.</p>
//           <div className="flex space-x-4">
//             <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import styles from './Footer.module.css';
// import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Using react-icons for SEO-friendly icons

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         {/* Logo and Description */}
//         <div className={styles.logoSection}>
//           <h1 className={styles.logo}>AI Directory Tools</h1>
//           <p className={styles.description}>
//             Your go-to directory for the best AI tools and resources. Explore, compare, and discover AI solutions.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className={styles.linksSection}>
//           <h3 className={styles.heading}>Quick Links</h3>
//           <ul className={styles.links}>
//             <li><a href="/about" className={styles.link}>About Us</a></li>
//             <li><a href="/tools" className={styles.link}>AI Tools</a></li>
//             <li><a href="/blog" className={styles.link}>Blog</a></li>
//             <li><a href="/contact" className={styles.link}>Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className={styles.socialSection}>
//           <h3 className={styles.heading}>Follow Us</h3>
//           <div className={styles.socialIcons}>
//             <a href="https://twitter.com" aria-label="Twitter" className={styles.icon}>
//               <FaTwitter />
//             </a>
//             <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.icon}>
//               <FaLinkedin />
//             </a>
//             <a href="https://github.com" aria-label="GitHub" className={styles.icon}>
//               <FaGithub />
//             </a>
//             <a href="https://facebook.com" aria-label="Facebook" className={styles.icon}>
//               <FaFacebook />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className={styles.copyright}>
//         <p>&copy; {new Date().getFullYear()} AI Directory Tools. All rights reserved.</p>
//         <p>
//           <a href="/privacy-policy" className={styles.link}>Privacy Policy</a> | 
//           <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import Link from "next/link";
import {  Globe, Mail,  Send, Building, Video, Camera } from "lucide-react";

const Footer = () => {
 
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

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8 ">
          {/* ✅ Branding Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">AI Directory</h2>
            <p className="text-gray-400 mt-2">
              Discover the best AI tools and software solutions for your needs.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://www.instagram.com/altaf.sheikh.1234" className="flex items-center space-x-2 text-pink-600 hover:text-pink-800">
              <Camera className="w-6 h-6" />
              <span>@altaf.sheikh.1234</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <Send  size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-300">
                <Building size={20} />
              </Link>
              <Link href="https://www.youtube.com/@GlitteringGenius01" className="hover:text-red-500">
                <Video size={20} />
              </Link>
            </div>
          </div>

          {/* ✅ Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-gray-400 hover:text-white">
                  Categories
                </Link>
              </li>
              {/* <li>
                <Link href="/submit" className="text-gray-400 hover:text-white">
                  Submit Tool
                </Link>
              </li> */}
              <li>
                <Link href="/#blogs" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ AI Tool Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white">AI Tool Categories</h3>
            <ul className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/${category.url}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact & SEO Schema */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <Globe size={18} />
                <span className="text-gray-400">www.aidirectory.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span className="text-gray-400">altafsheikh3111@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Copyright & Legal Links */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AI Directory. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;