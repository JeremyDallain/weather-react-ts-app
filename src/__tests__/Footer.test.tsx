import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Layout/Footer.js";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", {
      name: /profil de jérémy dallain sur linkedin/i,
    });
    expect(link).toBeInTheDocument();
  });

});
