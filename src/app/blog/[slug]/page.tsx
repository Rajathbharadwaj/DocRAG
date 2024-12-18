import { notFound } from "next/navigation";
import { BlogNavbar } from "@/components/blog-navbar";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <main className="container mx-auto px-4 py-24">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <header className="text-center mb-16 not-prose">
            <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl w-full aspect-[2/1] object-cover mb-8"
              />
            )}
          </header>
          <div 
            className="markdown prose-pre:bg-black/5 dark:prose-pre:bg-white/5 prose-pre:p-4 prose-pre:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}