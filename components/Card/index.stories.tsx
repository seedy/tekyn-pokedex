import React from "react";
import Card from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const Variant = Template.bind({});
Variant.args = {
  variant: "inner",
};

Variant.argTypes = {
  variant: {
    control: "inline-radio",
    options: ["undefined", "inner"],
  },
};

export const Variants: ComponentStory<typeof Card> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(2, 1fr)",
    }}
  >
    <Card {...args} />
    <Card variant="inner" {...args} />
  </Grid>
);

export const Size = Template.bind({});
Size.args = {
  size: "small",
};
Size.argTypes = {
  size: {
    control: "inline-radio",
    options: ["undefined", "small", "medium", "large"],
  },
};
