import React from "react";
import Autocomplete from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Autocomplete {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  label: "pokemon name or id",
  options: ["Drowzee", "Charmeleon", "Charmander"],
};
Default.argTypes = {
  onSelectedItemChange: { action: "Selected item" },
};
