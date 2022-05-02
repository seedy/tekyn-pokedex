import React from "react";
import IconButtonBack from "components/IconButton/Back";
import { render } from "@testing-library/react";

describe("IconButtonBack", () => {
  it("should render a IconButtonBack", async () => {
    const { queryByRole } = render(<IconButtonBack />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
  it("should render a IconButtonBack with aria label", async () => {
    const { queryByLabelText } = render(<IconButtonBack />);

    expect(queryByLabelText("Back")).toBeInTheDocument();
  });
});
