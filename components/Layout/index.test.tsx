import React from "react";
import Layout from "components/Layout";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it("should render a main block", async () => {
    const { queryByRole } = render(<Layout />);

    expect(queryByRole("main")).toBeInTheDocument();
  });
  it("should render a Layout with content", async () => {
    const { queryByText } = render(<Layout>Welcome</Layout>);

    expect(queryByText("Welcome")).toBeInTheDocument();
  });
});
