import Autocomplete from "components/Autocomplete";

import React from "react";
import { render } from "@testing-library/react";

describe("Autocomplete", () => {
  const OPTIONS = ["drowzee", "charmander"];

  it("should render an Autocomplete component with displayed value", async () => {
    const { queryByDisplayValue } = render(
      <Autocomplete value="DROWZEE" options={OPTIONS} label="autocomplete" />
    );

    expect(queryByDisplayValue("DROWZEE")).toBeInTheDocument();
  });
  it("should render an input and a menu with label as label text", async () => {
    const { queryAllByLabelText } = render(
      <Autocomplete
        label="specific label"
        value="Autocomplete"
        options={OPTIONS}
      />
    );

    expect(queryAllByLabelText("specific label")).toHaveLength(2);
  });
  it("should render an input with role combobox", async () => {
    const { getByRole } = render(
      <Autocomplete
        label="autocomplete"
        value="Autocomplete"
        options={OPTIONS}
      />
    );

    expect(getByRole("combobox")).toBeInTheDocument();
  });
});
