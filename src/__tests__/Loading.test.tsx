import { render, screen } from "@testing-library/react";
import { Loader } from "../components/Loader/Loader.js";

describe("Loading", () => {
  it("renders correctly", () => {
    render(<Loader />);
    const loading = screen.getByTestId("three-dots-loading");
    expect(loading).toBeInTheDocument();
  });
});
