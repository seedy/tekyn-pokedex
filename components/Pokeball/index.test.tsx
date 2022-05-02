import React from "react";
import Pokeball from "components/Pokeball";
import { render } from "@testing-library/react";

describe("Pokeball", () => {
  it("should render a single image", async () => {
    const { queryByRole } = render(<Pokeball />);

    expect(queryByRole("img")).toBeInTheDocument();
  });
  it("should render a Pokeball with alt text", async () => {
    const { queryByAltText } = render(<Pokeball />);

    expect(queryByAltText("pokeball")).toBeInTheDocument();
  });
});
