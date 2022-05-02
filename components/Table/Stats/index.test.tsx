import React from "react";
import TableStats from "components/Table/Stats";
import { render } from "@testing-library/react";

const HP = 78;
const ATTACK = 84;
const DEFENSE = 78;
const SPEA = 109;
const SPED = 85;
const SPEED = 100;
const STATS: PokemonStats = [
  {
    base: HP,
    stat: {
      name: "hp",
    },
  },
  {
    base: ATTACK,
    stat: {
      name: "attack",
    },
  },
  {
    base: DEFENSE,
    stat: {
      name: "defense",
    },
  },
  {
    base: SPEA,
    stat: {
      name: "special-attack",
    },
  },
  {
    base: SPED,
    stat: {
      name: "special-defense",
    },
  },
  {
    base: SPEED,
    stat: {
      name: "speed",
    },
  },
];

describe("TableStats", () => {
  it("should render a table", async () => {
    const { queryByRole } = render(<TableStats stats={STATS} />);

    expect(queryByRole("table")).toBeInTheDocument();
  });
  it("should render headers", async () => {
    const { queryByText } = render(<TableStats stats={STATS} />);

    expect(queryByText("HP")).toBeInTheDocument();
    expect(queryByText("Attack")).toBeInTheDocument();
    expect(queryByText("Defense")).toBeInTheDocument();
    expect(queryByText("Spe A")).toBeInTheDocument();
    expect(queryByText("Spe D")).toBeInTheDocument();
    expect(queryByText("Speed")).toBeInTheDocument();
  });
});
