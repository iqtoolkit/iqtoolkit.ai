import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the main heading with iqtoolkit", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("iqtoolkit.ai");
  });

  it("renders the compelling value proposition", () => {
    render(<Home />);
    const tagline = screen.getByText(/Transform Database Intelligence with AI-Powered Analytics/i);
    expect(tagline).toBeInTheDocument();
  });

  it("renders the unique differentiator about Ollama", () => {
    render(<Home />);
    const differentiator = screen.getByText(/Powered by Ollama Integration/i);
    expect(differentiator).toBeInTheDocument();
  });

  it("renders all specific feature cards", () => {
    render(<Home />);
    expect(screen.getByText("Database AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Real-Time Metrics")).toBeInTheDocument();
    expect(screen.getByText("Privacy-First Architecture")).toBeInTheDocument();
    expect(screen.getByText("Query Optimization")).toBeInTheDocument();
    expect(screen.getByText("Migration Tools")).toBeInTheDocument();
    expect(screen.getByText("Production-Ready")).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<Home />);
    const githubLink = screen.getByText(/Explore on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute("href", "https://github.com/iqtoolkit");
  });

  it("renders email signup form", () => {
    render(<Home />);
    const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("name", "email");

    const submitButton = screen.getByRole("button", { name: /Stay Updated/i });
    expect(submitButton).toBeInTheDocument();

    const form = emailInput.closest("form");
    expect(form).toHaveAttribute("data-netlify", "true");
    expect(form).toHaveAttribute("name", "newsletter");
  });

  it("renders footer with AI expertise mention", () => {
    render(<Home />);
    const currentYear = new Date().getFullYear();
    const footer = screen.getByText(new RegExp(`${currentYear}.*Database \\+ AI integration`, "i"));
    expect(footer).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Home />);
    const githubLinks = screen.getAllByLabelText(/GitHub/i);
    const twitterLink = screen.getByLabelText(/Twitter/i);

    expect(githubLinks.length).toBeGreaterThan(0);
    expect(twitterLink).toBeInTheDocument();
  });
});
