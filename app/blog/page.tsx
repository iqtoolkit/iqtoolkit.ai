import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | iqtoolkit",
  description: "Insights on database development, AI-powered tools, and modern DevOps practices.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[#1f8f63] blur-[200px]"></div>
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-[#15487a] blur-[180px]"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-[#1f2b3f] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Link href="/" className="text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6dffbd]">
            iqtoolkit journal
          </p>
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[#c0c9e5]">
            Field notes on AI-powered database tooling, query reliability, and privacy-first DevOps
            workflows.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-[#1f2b3f] bg-[#050b18] py-16 text-center text-lg text-[#a7b4d6]">
            No blog posts yet. Check back soon!
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-8 shadow-[0_20px_120px_rgba(3,7,18,0.55)] transition-all hover:-translate-y-1 hover:border-[#3fb366]/70"
              >
                <div className="mb-4 flex items-center justify-between text-sm text-[#8ea2c6]">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-[#6dffbd]">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-4 text-[#c0c9e5] line-clamp-3">{post.excerpt}</p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#123f2a] px-3 py-1 text-xs font-medium text-[#6dffbd]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 border-t border-[#1f2b3f] pt-4 text-sm text-[#8ea2c6]">
                  By {post.author}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
