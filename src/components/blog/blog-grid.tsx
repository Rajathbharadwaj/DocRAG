import { BlogCard } from "./blog-card";
import { getAllPosts } from "@/lib/blog";

export function BlogGrid() {
  const posts = getAllPosts();

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
        Our latest <span className="gradient-text">articles</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Click through to explore more
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}