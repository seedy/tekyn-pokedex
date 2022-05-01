import React from "react";
import TextField from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <TextField {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "drowzee",
  label: "pokemon name or id",
};
