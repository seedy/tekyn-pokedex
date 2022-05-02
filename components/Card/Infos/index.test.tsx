import React from "react";
import CardInfos from "components/Card/Infos";
import { render } from "@testing-library/react";

describe("CardInfos", () => {
  it("should render a CardInfos with info sections and content", async () => {
    const FLAVOR_TEXT =
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally";
    const INFOS = {
      weight: 90.5,
      height: 1.7,
      abilities: [{ name: "blaze" }, { name: "solar-power" }],
      description: {
        flavorTexts: [
          {
            flavorText: FLAVOR_TEXT,
          },
        ],
      },
    };
    const { queryByText } = render(<CardInfos {...INFOS} />);

    expect(queryByText("Weight")).toBeInTheDocument();
    expect(queryByText("90.5 kg")).toBeInTheDocument();

    expect(queryByText("Height")).toBeInTheDocument();
    expect(queryByText("1.7 m")).toBeInTheDocument();

    expect(queryByText("Abilities")).toBeInTheDocument();
    expect(queryByText("blaze, solar-power")).toBeInTheDocument();

    expect(queryByText("Description")).toBeInTheDocument();
    expect(queryByText(FLAVOR_TEXT)).toBeInTheDocument();
  });
});
