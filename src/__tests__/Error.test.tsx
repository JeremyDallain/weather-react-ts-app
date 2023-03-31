import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage.js";

describe("Error", () => {
  it("renders correctly", () => {
    render(<ErrorMessage message="error" />);

    const error = screen.getByRole("alert");
    expect(error).toBeInTheDocument();
  });
  it("renders the message", () => {
    render(<ErrorMessage message="error" />);

    const message = screen.getByText(/error/i);
    expect(message).toBeInTheDocument();
  });
});
