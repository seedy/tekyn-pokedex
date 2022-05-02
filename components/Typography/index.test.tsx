import Typography from "components/Typography";

import React from "react";
import { render } from "@testing-library/react";

describe("Typography", () => {
  it("should render a Typography with cta as child", async () => {
    const { queryByText } = render(<Typography>CTA</Typography>);

    expect(queryByText("CTA")).toBeInTheDocument();
  });
});
