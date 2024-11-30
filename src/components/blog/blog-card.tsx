import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>
      </div>
    </Link>
  );
}