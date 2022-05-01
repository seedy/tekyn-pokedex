import React from "react";
import H1 from "components/Typography/H1";
import { render } from "@testing-library/react";

describe("H1", () => {
  it("should render a heading", async () => {
    const { queryByRole } = render(<H1 />);

    expect(queryByRole("heading")).toBeInTheDocument();
  });
  it("should render a heading level 1", async () => {
    const { queryByRole } = render(<H1 />);

    expect(queryByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  it("should render a H1 with cta as child", async () => {
    const { queryByText } = render(<H1>CTA</H1>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
