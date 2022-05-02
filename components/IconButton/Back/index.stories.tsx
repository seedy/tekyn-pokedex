import React from "react";
import IconButtonBack from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "IconButton/Back",
  component: IconButtonBack,
} as ComponentMeta<typeof IconButtonBack>;

const Template: ComponentStory<typeof IconButtonBack> = (args) => (
  <IconButtonBack {...args} />
);

export const Default = Template.bind({});
