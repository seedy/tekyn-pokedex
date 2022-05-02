import Label from "components/Label";

import React from "react";
import { render } from "@testing-library/react";

describe("Label", () => {
  it("should render a Label component with cta as child", async () => {
    const { queryByText } = render(<Label>CTA</Label>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
  it("should render an input with label as label text", async () => {
    const { getByLabelText } = render(
      <>
        <Label htmlFor="input-label">Input</Label>
        <input id="input-label" />
      </>
    );

    expect(getByLabelText("Input")).toBeInTheDocument();
  });
});
