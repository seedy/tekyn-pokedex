import React from "react";
import IconButton from "./index";
import Image from "next/image";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";
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
