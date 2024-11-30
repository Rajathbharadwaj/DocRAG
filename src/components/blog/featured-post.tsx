import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { getFeaturedPost } from "@/lib/blog";

export function FeaturedPost() {
  const post = getFeaturedPost();

  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-black/5 dark:bg-white/5 mb-24"
    >
      <div className="relative aspect-[2/1] overflow-hidden">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-8">
        <div className="flex items-center gap-3 mb-4">
          <Avatar
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10"
          />
          <div>
            <div className="font-medium text-white">{post.author.name}</div>
            <div className="text-sm text-white/80">{formatDate(post.date)}</div>
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white">{post.title}</h2>
        <p className="mb-4 text-lg text-white/90">{post.description}</p>
        <div className="inline-flex items-center text-sm font-medium text-white">
          Read More
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}