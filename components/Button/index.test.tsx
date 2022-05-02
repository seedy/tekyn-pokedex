import React from "react";
import Button from "components/Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("should render a button", async () => {
    const { queryByRole } = render(<Button />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
  it("should render a Button with cta as child", async () => {
    const { queryByText } = render(<Button>CTA</Button>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
