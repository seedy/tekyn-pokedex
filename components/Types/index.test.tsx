import React from "react";
import Types from "components/Types";
import { render } from "@testing-library/react";
import { FLIGHT, FIRE } from "components/Button";

describe("Types", () => {
  it("should render a single button by default", async () => {
    const { queryAllByRole } = render(<Types types={[FIRE, FLIGHT]} />);

    const buttons = queryAllByRole("button");

    expect(buttons).toHaveLength(1);
  });
  it("should render 2 buttons", async () => {
    const { queryAllByRole } = render(
      <Types variant="double" types={[FIRE, FLIGHT]} />
    );

    const buttons = queryAllByRole("button");

    expect(buttons).toHaveLength(2);
  });
  it("should render types", async () => {
    const { queryByText } = render(
      <Types variant="double" types={[FIRE, FLIGHT]} />
    );

    expect(queryByText(FIRE)).toBeInTheDocument();
    expect(queryByText(FLIGHT)).toBeInTheDocument();
  });
  it("should render first type", async () => {
    const { queryByText } = render(
      <Types variant="simple" types={[FIRE, FLIGHT]} />
    );

    expect(queryByText(FIRE)).toBeInTheDocument();
    expect(queryByText(FLIGHT)).not.toBeInTheDocument();
  });
});
