import React from "react";
import PokemonMain from "components/Pokemon/Main";
import { render } from "@testing-library/react";

describe("PokemonMain", () => {
  it("should render a single image", async () => {
    const { queryByRole } = render(
      <PokemonMain
        id={6}
        name="Charizard"
        types={[{ name: "fire" }, { name: "flight" }]}
      />
    );

    expect(queryByRole("img")).toBeInTheDocument();
  });
  it("should render a PokemonMain with alt text", async () => {
    const { queryByAltText } = render(
      <PokemonMain
        id={6}
        name="Charizard"
        types={[{ name: "fire" }, { name: "flight" }]}
      />
    );

    expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
  });
  it("should render a PokemonMain with 2 buttons for type", async () => {
    const { queryAllByRole } = render(
      <PokemonMain
        id={6}
        name="Charizard"
        types={[{ name: "fire" }, { name: "flight" }]}
      />
    );
    expect(queryAllByRole("button")).toHaveLength(2);
  });
});
