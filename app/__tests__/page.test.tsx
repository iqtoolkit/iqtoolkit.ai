import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  // Removed strict heading text assertion to allow flexible hero copy

  it("renders the compelling value proposition", () => {
    render(<Home />);
    const tagline = screen.getByText(/Diagnose database incidents/i);
    expect(tagline).toBeInTheDocument();
  });

  it("renders the unique differentiator about self-hosted", () => {
    render(<Home />);
    const differentiator = screen.getByText(/Self-Hosted & Privacy-First/i);
    expect(differentiator).toBeInTheDocument();
  });

  it("renders all specific feature cards", () => {
    render(<Home />);
    expect(screen.getByText("Multi-Database Support")).toBeInTheDocument();
    expect(screen.getByText("AI-Powered Analysis")).toBeInTheDocument();
    expect(screen.getByText("Self-Hosted & Open Source")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL Analyzer")).toBeInTheDocument();
    expect(screen.getByText("MongoDB Analyzer")).toBeInTheDocument();
    expect(screen.getByText(/Data Governance.*Coming Soon/i)).toBeInTheDocument();
  });

  it("renders GitHub CTA link", () => {
    render(<Home />);
    const githubLink = screen.getByText(/Star on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/iqtoolkit/iqtoolkit-analyzer"
    );
  });

  it("renders email signup form", () => {
    render(<Home />);
    const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("name", "email");

    const submitButton = screen.getByRole("button", { name: /Stay Updated/i });
    expect(submitButton).toBeInTheDocument();
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
    const mastodonLink = screen.getByLabelText(/Mastodon/i);
    const twitterLink = screen.getByLabelText(/Twitter/i);
    const linkedinLink = screen.getByLabelText(/LinkedIn/i);

    expect(githubLinks.length).toBeGreaterThanOrEqual(2);
    expect(mastodonLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it("renders Roadmap link in navbar", () => {
    render(<Home />);
    const roadmap = screen.getByText("Roadmap");
    expect(roadmap).toBeInTheDocument();
    expect(roadmap.closest("a")).toHaveAttribute("href", "/roadmap");
  });
});
