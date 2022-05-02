import React from "react";
import Pokemon from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pokemon",
  component: Pokemon,
} as ComponentMeta<typeof Pokemon>;

const Template: ComponentStory<typeof Pokemon> = (args) => (
  <Pokemon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 6,
  name: "charizard",
  unoptimized: true,
};
Default.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};

export const Other = Template.bind({});
Other.args = {
  id: 96,
  name: "drowzee",
  unoptimized: true,
};
Other.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};
