import { NextApiRequest, NextApiResponse } from "next";

const aiWritingTools = [
  { name: "ChatGPT", description: "Powerful AI for text generation & writing.", url: "https://openai.com/chatgpt", logo: "/feauturestool/chatgpt-logo.png", type: "Freemium", verified: true },
  { name: "Copy.ai", description: "AI-driven content creation tool.", url: "https://www.copy.ai/", logo: "/feauturestool/copyai.png", type: "Paid", verified: true },
  { name: "Jasper AI", description: "High-performance AI writer for blogs & ads.", url: "https://www.jasper.ai/", logo: "/feauturestool/jasper-logo.png", type: "Paid", verified: true },
  { name: "Rytr", description: "AI-powered copywriting assistant.", url: "https://rytr.me/", logo: "/feauturestool/rytr.png", type: "Freemium" },
  { name: "QuillBot", description: "Paraphrasing tool for rewording text.", url: "https://quillbot.com/", logo: "/feauturestool/quillbot.png", type: "Freemium" },
  { name: "Writesonic", description: "AI writer for content marketing.", url: "https://writesonic.com/", logo: "/feauturestool/writesonic.png", type: "Paid", verified: true },
  { name: "Grammarly", description: "Grammar checker and AI writing assistant.", url: "https://www.grammarly.com/", logo: "/feauturestool/grammarly.png", type: "Freemium", verified: true },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  return res.status(200).json(aiWritingTools);
}
