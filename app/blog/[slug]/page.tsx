import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | iqtoolkit Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#1f8f63] blur-[200px]"></div>
        <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-[#15487a] blur-[220px]"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-[#1f2b3f] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6dffbd]">
            iqtoolkit journal
          </p>
          <h1 className="text-5xl font-bold text-white">{post.title}</h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[#8ea2c6]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[#123f2a] px-3 py-1 text-sm font-medium text-[#6dffbd]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg mx-auto max-w-none text-[#c0c9e5] prose-headings:text-white prose-a:text-[#6dffbd] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-[#6dffbd] prose-pre:bg-[#050b18] prose-pre:border prose-pre:border-[#1f2b3f]">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                      keepBackground: true,
                    },
                  ],
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                      properties: {
                        className: ["anchor"],
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>

      <footer className="relative border-t border-[#1f2b3f]">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]"
          >
            ← Back to all posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
