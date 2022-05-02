import React from "react";
import Pokemon from "components/Pokemon";
import { render } from "@testing-library/react";

describe("Pokemon", () => {
  it("should render 2 images", async () => {
    const { queryAllByRole } = render(<Pokemon id={6} name="Charizard" />);

    expect(queryAllByRole("img")).toHaveLength(2);
  });
  it("should render a Pokemon with alt text, a pokeball with alt text", async () => {
    const { queryByAltText } = render(<Pokemon id={6} name="Charizard" />);

    expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
    expect(queryByAltText("pokeball")).toBeInTheDocument();
  });
  it("should render a Pokemon with Heading level 2 text", async () => {
    const { queryByRole } = render(<Pokemon id={6} name="Charizard" />);
    expect(queryByRole("heading", { level: 2 })).toBeInTheDocument();
  });
  it("should render pokedex id and pokemon name", async () => {
    const { queryByText } = render(<Pokemon id={6} name="Charizard" />);
    expect(queryByText(/#006/)).toBeInTheDocument();
    expect(queryByText(/Charizard/)).toBeInTheDocument();
  });
});
