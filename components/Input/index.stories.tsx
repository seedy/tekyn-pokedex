import React from "react";
import Input from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Input {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Default",
};

export const Label: ComponentStory<typeof Input> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <label htmlFor="label-input">Label</label>
    <Input id="label-input" {...args} />
  </Grid>
);
