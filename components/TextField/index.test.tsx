import TextField from "components/TextField";

import React from "react";
import { render } from "@testing-library/react";

describe("TextField", () => {
  it("should render a TextField component with displayed value", async () => {
    const { queryByDisplayValue } = render(
      <TextField label="Search" defaultValue="DROWZEE" />
    );

    expect(queryByDisplayValue("DROWZEE")).toBeInTheDocument();
  });
  it("should render an input with label as label text", async () => {
    const { getByLabelText } = render(
      <>
        <TextField
          id="input-label"
          label="CHARIZARD"
          defaultValue="TextField"
        />
      </>
    );

    expect(getByLabelText("CHARIZARD")).toBeInTheDocument();
  });
});
