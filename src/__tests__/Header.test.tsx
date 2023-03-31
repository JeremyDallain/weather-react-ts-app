import { render, screen } from "@testing-library/react";
import { Header } from "../components/Layout/Header.js";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it("renders the h1", () => {
    render(<Header />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
  it("renders the logo", () => {
    render(<Header />);

    const logo = screen.getByRole("img", {
      name: /logo météo/i,
    });
    expect(logo).toBeInTheDocument();
  });
});
