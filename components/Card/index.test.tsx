import React from "react";
import Card from "components/Card";
import { render } from "@testing-library/react";

describe("Card", () => {
  it("should render a Card with cta as child", async () => {
    const { queryByText } = render(<Card>CTA</Card>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
