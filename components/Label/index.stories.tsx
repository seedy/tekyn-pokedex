import React from "react";
import Label from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Label {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Input: ComponentStory<typeof Label> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Label htmlFor="label-input" {...args} />
    <input id="label-input" />
  </Grid>
);
Input.args = {
  children: "Input",
};
