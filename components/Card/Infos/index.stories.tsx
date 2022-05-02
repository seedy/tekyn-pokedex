import React from "react";
import CardInfos from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Card/Infos",
  component: CardInfos,
} as ComponentMeta<typeof CardInfos>;

const Template: ComponentStory<typeof CardInfos> = (args) => (
  <CardInfos {...args} />
);

export const Default = Template.bind({});
Default.args = {
  weight: 90.5,
  height: 1.7,
  abilities: [{ name: "blaze" }, { name: "solar-power" }],
  description: {
    flavorTexts: [
      {
        flavorText:
          "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally",
      },
    ],
  },
};

export const Other = Template.bind({});
Other.args = {
  weight: 32.4,
  height: 1,
  abilities: [{ name: "insomnia" }, { name: "forewarn" }],
  description: {
    flavorTexts: [
      {
        flavorText:
          "Puts ennemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams",
      },
    ],
  },
};
