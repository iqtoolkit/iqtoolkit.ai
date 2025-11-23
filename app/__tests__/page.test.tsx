import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the main heading with iqtoolkit", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("iqtoolkit.ai");
  });

  it("renders the tagline", () => {
    render(<Home />);
    const tagline = screen.getByText(/Advanced AI Tools & Solutions/i);
    expect(tagline).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<Home />);
    expect(screen.getByText("AI-Powered")).toBeInTheDocument();
    expect(screen.getByText("Open Source")).toBeInTheDocument();
    expect(screen.getByText("Innovation")).toBeInTheDocument();
    expect(screen.getByText("Performance")).toBeInTheDocument();
    expect(screen.getByText("Scalable")).toBeInTheDocument();
    expect(screen.getByText("Best Practices")).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<Home />);
    const githubLink = screen.getByText(/View on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute("href", "https://github.com/iqtoolkit");
  });

  it("renders footer with copyright", () => {
    render(<Home />);
    const currentYear = new Date().getFullYear();
    const footer = screen.getByText(new RegExp(`${currentYear} iqtoolkit.ai`, "i"));
    expect(footer).toBeInTheDocument();
  });
});
