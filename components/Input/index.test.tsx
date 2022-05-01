import Input from "components/Input";

import React from "react";
import { queryByDisplayValue, render } from "@testing-library/react";

describe("Input", () => {
  it("should render an Input component with displayed value", async () => {
    const { queryByDisplayValue } = render(<Input value="DROWZEE" />);

    expect(queryByDisplayValue("DROWZEE")).toBeInTheDocument();
  });
  it("should render an input with label as label text", async () => {
    const { getByLabelText } = render(
      <>
        <label htmlFor="input-label">Input</label>
        <Input id="input-label" value="Input" />
      </>
    );

    expect(getByLabelText("Input")).toBeInTheDocument();
  });
});
