import React from "react";
import PokemonBase from "components/Pokemon/Base";
import { render } from "@testing-library/react";

describe("PokemonBase", () => {
  it("should render a single image", async () => {
    const { queryByRole } = render(<PokemonBase id={6} name="Charizard" />);

    expect(queryByRole("img")).toBeInTheDocument();
  });
  it("should render a PokemonBase with alt text", async () => {
    const { queryByAltText } = render(<PokemonBase id={6} name="Charizard" />);

    expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
  });

  describe("pokeball background", () => {
    it("should render 2 images", async () => {
      const { queryAllByRole } = render(
        <PokemonBase id={6} showPokeball name="Charizard" />
      );

      expect(queryAllByRole("img")).toHaveLength(2);
    });
    it("should render a PokemonBase with alt text, a pokeball with alt text", async () => {
      const { queryByAltText } = render(
        <PokemonBase id={6} showPokeball name="Charizard" />
      );

      expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
      expect(queryByAltText("pokeball")).toBeInTheDocument();
    });
  });
});
