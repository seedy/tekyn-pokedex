import React from "react";
import PokemonMain from "components/Pokemon/Main";
import { render } from "@testing-library/react";

describe("PokemonMain", () => {
  const TYPES = [
    { type: { name: "fire" } },
    { type: { name: "flight" } },
  ] as Type[];
  it("should render a single image", async () => {
    const { queryByRole } = render(
      <PokemonMain id={6} name="Charizard" types={TYPES} />
    );

    expect(queryByRole("img")).toBeInTheDocument();
  });
  it("should render a PokemonMain with alt text", async () => {
    const { queryByAltText } = render(
      <PokemonMain id={6} name="Charizard" types={TYPES} />
    );

    expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
  });
  it("should render a PokemonMain with 2 buttons for type", async () => {
    const { queryAllByRole } = render(
      <PokemonMain id={6} name="Charizard" types={TYPES} />
    );
    expect(queryAllByRole("button")).toHaveLength(2);
  });
});
