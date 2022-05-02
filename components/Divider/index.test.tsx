import React from "react";
import Divider from "components/Divider";
import { render } from "@testing-library/react";

describe("Divider", () => {
  it("should render a Divider", async () => {
    const { queryByRole } = render(<Divider />);

    expect(queryByRole("separator")).toBeInTheDocument();
  });
});
