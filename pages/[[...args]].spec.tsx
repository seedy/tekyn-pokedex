import React from "react";
import { render } from "@testing-library/react";
import MainPage from "pages/[[...args]].page";
import mockRouter from "next-router-mock";
jest.mock("next/router", () => require("next-router-mock"));

describe("main", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  it("should render", () => {
    const { queryByText } = render(<MainPage pokemonIdsNames={[]} />);

    expect(queryByText("Search !")).toBeInTheDocument();
  });
});
