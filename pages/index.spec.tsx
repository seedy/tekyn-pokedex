import React from "react";
import { render } from "@testing-library/react";
import MainPage from "pages/index.page";

describe("main", () => {
  it("should render", () => {
    const { queryByText } = render(<MainPage />);

    expect(queryByText("Welcome")).toBeInTheDocument();
  });
});
