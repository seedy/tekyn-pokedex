import React from "react";
import Pokeball from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pokeball",
  component: Pokeball,
} as ComponentMeta<typeof Pokeball>;

const Template: ComponentStory<typeof Pokeball> = (args) => (
  <Pokeball {...args} />
);

export const Default = Template.bind({});
Default.args = {
  small: false,
  unoptimized: true, // workaround for storybook
};
Default.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  unoptimized: true,
};
Small.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};
