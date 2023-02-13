import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./index";

test("render sdk management tab", () => {
  render(<Tabs />);
  const linkElement = screen.getByText(/sdk management/i);
  expect(linkElement).toBeInTheDocument();
});

test("should response tab click", () => {
  render(<Tabs />);
  const userProfile = screen.getByText("User Profile");
  fireEvent.click(userProfile);
  console.log(userProfile.classList);
  expect(userProfile).toHaveClass("label-active");
});
