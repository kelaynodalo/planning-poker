import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should display Join a Planning Session", () => {
  render(<App />);
  const joinHeader = screen.getByText(/Join a Planning Session/i);
  expect(joinHeader).toBeInTheDocument();
});
