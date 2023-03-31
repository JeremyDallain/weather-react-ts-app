import { render, screen } from "@testing-library/react";
import { MainContent } from "../components/Layout/MainContent.js";

describe('MainContent', () => {
  it("renders correctly", () => {
    render(<MainContent />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders the SearchCity", () => {
    render(<MainContent />);

    const searchCity = screen.getByRole("textbox");
    expect(searchCity).toBeInTheDocument();
  });

});
