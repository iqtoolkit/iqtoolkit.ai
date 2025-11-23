import { render, screen } from "@testing-library/react";
import ThankYou from "../page";

describe("Thank You Page", () => {
  it("renders the thank you heading", () => {
    render(<ThankYou />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Thank You!");
  });

  it("renders the success message", () => {
    render(<ThankYou />);
    const message = screen.getByText(/successfully subscribed to our newsletter/i);
    expect(message).toBeInTheDocument();
  });

  it("renders the back to home link", () => {
    render(<ThankYou />);
    const homeLink = screen.getByRole("link", { name: /Back to Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders the email icon", () => {
    render(<ThankYou />);
    const icon = screen.getByText("✉️");
    expect(icon).toBeInTheDocument();
  });
});
