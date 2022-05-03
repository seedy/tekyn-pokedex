import React from "react";
import IconButtonBack from "components/IconButton/Back";
import { fireEvent, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("IconButtonBack", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/6");
  });
  it("should render a IconButtonBack", async () => {
    const { queryByRole } = render(<IconButtonBack />);

    expect(queryByRole("button")).toBeInTheDocument();
  });
  it("should render a IconButtonBack with aria label", async () => {
    const { queryByLabelText } = render(<IconButtonBack />);

    expect(queryByLabelText("Back")).toBeInTheDocument();
  });
  it("should navigate back to root path", async () => {
    const { getByRole } = render(<IconButtonBack />);

    const button = getByRole("button");
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
    expect(mockRouter.asPath).toBe("/");
  });
});
