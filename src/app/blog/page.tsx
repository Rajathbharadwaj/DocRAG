import { BlogNavbar } from "@/components/blog-navbar";
import { BlogHeader } from "@/components/blog/blog-header";
import { FeaturedPost } from "@/components/blog/featured-post";
import { BlogGrid } from "@/components/blog/blog-grid";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <main className="container mx-auto px-4 py-24">
        <BlogHeader />
        <FeaturedPost />
        <BlogGrid />
      </main>
    </div>
  );
}