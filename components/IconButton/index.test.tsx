import React from "react";
import IconButton from "components/IconButton";
import { render } from "@testing-library/react";

describe("IconButton", () => {
  it("should render a IconButton", async () => {
    const { queryByRole } = render(<IconButton />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
  it("should render a IconButton with cta as child", async () => {
    const { queryByText } = render(<IconButton>CTA</IconButton>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
