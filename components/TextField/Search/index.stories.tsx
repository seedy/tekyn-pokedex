import React from "react";
import TextFieldSearch from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "TextField/Search",
  component: TextFieldSearch,
} as ComponentMeta<typeof TextFieldSearch>;

const Template: ComponentStory<typeof TextFieldSearch> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <TextFieldSearch {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "drowzee",
  label: "pokemon name or id",
};

export const DebouncedOnChange = Template.bind({});
DebouncedOnChange.args = {
  label: "pokemon name or id",
};
DebouncedOnChange.argTypes = {
  onChange: { action: "changed" },
};
