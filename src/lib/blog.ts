import type { Post } from "./types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Initialize markdown-it with synchronous highlighting
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang) {
      return `<pre class="language-${lang}"><code class="language-${lang}">${str}</code></pre>`;
    }
    return `<pre><code>${str}</code></pre>`;
  }
});

export function getAllPosts(): Post[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      // Validate required fields
      if (!data.title || !data.date || !data.author) {
        throw new Error(`Missing required fields in ${fileName}`);
      }

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        description: data.description || '',
        date: data.date,
        image: data.image,
        readingTime: data.readingTime || 5,
        featured: data.featured || false,
        author: {
          name: data.author.name,
          avatar: data.author.avatar
        }
      } as Post;
    })
    // Sort posts by date in descending order
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());

  return allPosts;
}

export function getFeaturedPost(): Post {
  const posts = getAllPosts();
  return posts.find(post => post.featured) || posts[0];
}

export function getPostBySlug(slug: string): Post & { content: string } | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = md.render(content);

    if (!data.title || !data.date || !data.author) {
      throw new Error(`Missing required fields in ${slug}.md`);
    }

    return {
      slug,
      title: data.title,
      description: data.description || '',
      date: data.date,
      image: data.image,
      readingTime: data.readingTime || 5,
      featured: data.featured || false,
      author: {
        name: data.author.name,
        avatar: data.author.avatar
      },
      content: htmlContent
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return undefined;
  }
}