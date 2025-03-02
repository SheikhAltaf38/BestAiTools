// components/Blogs.js
import Image from "next/image";
import Link from "next/link";

interface AIBlog {
    title: string;
    link: string;
    image: string;
    id: number;
    excerpt:string;
  }
export default function Blogs({ blogs }: { blogs: AIBlog[] }) {
  return (
    <section className="py-16" id="blogs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest AI Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/${post.link}`} className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
