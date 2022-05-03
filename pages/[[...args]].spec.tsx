import React from "react";
import { render } from "@testing-library/react";
import MainPage from "pages/[[...args]].page";
jest.mock("next/router", () => require("next-router-mock"));

describe("main", () => {
  it("should render", () => {
    const { queryByText } = render(<MainPage />);

    expect(queryByText("Welcome")).toBeInTheDocument();
  });
});
