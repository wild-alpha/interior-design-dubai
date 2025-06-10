// components/FeaturedPosts.tsx
import Link from "next/link";
import Image from "next/image";

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
};

const dummyPosts: Post[] = [
  {
    title: "Luxury Villa Design in Dubai Hills",
    excerpt: "A modern aesthetic with classical detailing makes this villa a timeless beauty.",
    slug: "dubai-hills-villa-design",
    image: "/posts/villa-dubai-hills.jpg",
  },
  {
    title: "How to Choose the Right Lighting for Interiors",
    excerpt: "Learn how lighting impacts mood, depth, and elegance in home and office spaces.",
    slug: "interior-lighting-guide",
    image: "/posts/lighting-guide.jpg",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">Featured Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {dummyPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
