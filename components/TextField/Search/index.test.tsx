import TextFieldSearch from "components/TextField/Search";

import React from "react";
import { render } from "@testing-library/react";

describe("TextFieldSearch", () => {
  it("should render a TextFieldSearch component with displayed value", async () => {
    const { getByLabelText } = render(<TextFieldSearch label="Search" />);

    expect(getByLabelText("Search")).toBeInTheDocument();
  });
  it("should render an input with role searchbox", async () => {
    const { getByRole } = render(
      <>
        <TextFieldSearch label="Search" />
      </>
    );

    expect(getByRole("searchbox")).toBeInTheDocument();
  });
});
