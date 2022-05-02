import React from "react";
import PokemonEvolution from "components/Pokemon/Evolution";
import { queryAllByAttribute, render } from "@testing-library/react";

describe("PokemonEvolution", () => {
  const EVOLUTIONS = {
    chain: {
      pokemons: [
        {
          id: 4,
          name: "charmander",
        },
        {
          id: 5,
          name: "charmeleon",
        },
        {
          id: 6,
          name: "charizard",
        },
      ],
    },
  };

  it("should render 6 images, 3 pokemon, 3 pokeballs", async () => {
    const { queryAllByRole, queryAllByAltText, queryByAltText } = render(
      <PokemonEvolution evolutions={EVOLUTIONS} />
    );

    expect(queryAllByRole("img")).toHaveLength(6);
    expect(queryAllByAltText("pokeball")).toHaveLength(3);
    expect(queryByAltText("#006 - Charizard")).toBeInTheDocument();
    expect(queryByAltText("#005 - Charmeleon")).toBeInTheDocument();
    expect(queryByAltText("#004 - Charmander")).toBeInTheDocument();
  });
  it("should render decoration arrows", async () => {
    const { container } = render(<PokemonEvolution evolutions={EVOLUTIONS} />);
    expect(container.querySelectorAll("svg[aria-hidden]")).toHaveLength(4);
  });
});
