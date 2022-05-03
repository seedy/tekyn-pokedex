import React from "react";
import IconButtonRandom from "components/IconButton/Random";
import { fireEvent, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("IconButtonRandom", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  const POKEMON_IDS = [1, 2, 3, 4];
  it("should render a IconButtonRandom", async () => {
    const { queryByRole } = render(
      <IconButtonRandom pokemonIds={POKEMON_IDS} />
    );

    expect(queryByRole("button")).toBeInTheDocument();
  });
  it("should render a IconButtonRandom with aria label", async () => {
    const { queryByLabelText } = render(
      <IconButtonRandom pokemonIds={POKEMON_IDS} />
    );

    expect(queryByLabelText("Random")).toBeInTheDocument();
  });
  it("should navigate to a random pokemon page when clicked", async () => {
    const { getByRole } = render(<IconButtonRandom pokemonIds={POKEMON_IDS} />);

    const button = getByRole("button");
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    expect(mockRouter.asPath).not.toBe("/");
    const id = Number(mockRouter.asPath.slice(1));
    expect(POKEMON_IDS).toContain(id);
  });
});
