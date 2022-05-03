import { act, render } from "@testing-library/react";
import Route from "components/Route";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Route", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  describe("exact href matching", () => {
    it("should render nothing", async () => {
      const { queryByText } = render(<Route href="/pokemon">content</Route>);

      expect(queryByText("content")).not.toBeInTheDocument();
    });
    it("should render content when already matching url", async () => {
      mockRouter.setCurrentUrl("/pokemon");

      const { queryByText } = render(<Route href="/pokemon">content</Route>);

      expect(queryByText("content")).toBeInTheDocument();
    });
    it("should update and render content after navigation occurs", async () => {
      const { queryByText } = render(<Route href="/pokemon">content</Route>);

      act(() => {
        singletonRouter.push("/pokemon");
      });

      expect(queryByText("content")).toBeInTheDocument();
    });
  });
  describe("reverse href matching", () => {
    it("should render nothing", async () => {
      const { queryByText } = render(<Route href="!/">content</Route>);

      expect(queryByText("content")).not.toBeInTheDocument();
    });
    it("should render content when already matching url", async () => {
      mockRouter.setCurrentUrl("/pokemon");

      const { queryByText } = render(<Route href="!/">content</Route>);

      expect(queryByText("content")).toBeInTheDocument();
    });
    it("should update and render content after navigation occurs", async () => {
      const { queryByText } = render(<Route href="!/">content</Route>);

      act(() => {
        singletonRouter.push("/pokemon");
      });

      expect(queryByText("content")).toBeInTheDocument();
    });
  });
});
