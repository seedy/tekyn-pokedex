import React from "react";
import IconButtonRandom from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "IconButton/Random",
  component: IconButtonRandom,
} as ComponentMeta<typeof IconButtonRandom>;

const Template: ComponentStory<typeof IconButtonRandom> = (args) => (
  <IconButtonRandom {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemonIds: [1, 2, 3, 4],
};
