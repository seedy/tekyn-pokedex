import React from "react";
import IconButton from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import RandomArrow from "components/icons/RandomArrow";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <RandomArrow />,
};
