import { render, screen } from "@testing-library/react";
import BlogPage from "../blog/page";
import "@testing-library/jest-dom";

// Mock the blog utility functions
jest.mock("@/lib/blog", () => ({
  getAllPosts: jest.fn(() => [
    {
      slug: "test-post",
      title: "Test Blog Post",
      date: "2024-11-23",
      excerpt: "This is a test excerpt",
      author: "Test Author",
      tags: ["test", "blog"],
      readingTime: "5 min read",
    },
    {
      slug: "another-post",
      title: "Another Post",
      date: "2024-11-22",
      excerpt: "Another test excerpt",
      author: "Another Author",
      tags: ["testing"],
      readingTime: "3 min read",
    },
  ]),
}));

describe("Blog Page", () => {
  it("renders the blog page header", () => {
    render(<BlogPage />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("displays blog posts", () => {
    render(<BlogPage />);
    expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
    expect(screen.getByText("Another Post")).toBeInTheDocument();
  });

  it("shows post excerpts", () => {
    render(<BlogPage />);
    expect(screen.getByText("This is a test excerpt")).toBeInTheDocument();
    expect(screen.getByText("Another test excerpt")).toBeInTheDocument();
  });

  it("displays post tags", () => {
    render(<BlogPage />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("blog")).toBeInTheDocument();
    expect(screen.getByText("testing")).toBeInTheDocument();
  });

  it("shows reading time", () => {
    render(<BlogPage />);
    expect(screen.getByText("5 min read")).toBeInTheDocument();
    expect(screen.getByText("3 min read")).toBeInTheDocument();
  });

  it("displays author names", () => {
    render(<BlogPage />);
    expect(screen.getByText("By Test Author")).toBeInTheDocument();
    expect(screen.getByText("By Another Author")).toBeInTheDocument();
  });

  it("has back to home link", () => {
    render(<BlogPage />);
    const backLink = screen.getByText("← Back to Home");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });
});

describe("Blog Page - Empty State", () => {
  beforeEach(() => {
    // Override mock to return empty array
    jest.mocked(require("@/lib/blog").getAllPosts).mockReturnValue([]);
  });

  it("shows empty state message when no posts exist", () => {
    render(<BlogPage />);
    expect(screen.getByText("No blog posts yet. Check back soon!")).toBeInTheDocument();
  });
});
