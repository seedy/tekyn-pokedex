import React from "react";
import H2 from "components/Typography/H2";
import { render } from "@testing-library/react";

describe("H2", () => {
  it("should render a heading", async () => {
    const { queryByRole } = render(<H2 />);

    expect(queryByRole("heading")).toBeInTheDocument();
  });
  it("should render a heading level 2", async () => {
    const { queryByRole } = render(<H2 />);

    expect(queryByRole("heading", { level: 2 })).toBeInTheDocument();
  });
  it("should render a H2 with cta as child", async () => {
    const { queryByText } = render(<H2>CTA</H2>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
