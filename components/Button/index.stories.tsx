import React from "react";
import Button, { VARIANTS } from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Variant = Template.bind({});
Variant.args = {
  variant: "normal",
  children: "variant",
};

Variant.argTypes = {
  variant: {
    control: "inline-radio",
    options: VARIANTS,
  },
};

export const Variants: ComponentStory<typeof Button> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$3",
      gridTemplateColumns: "repeat(3, 1fr)",
    }}
  >
    {VARIANTS.map((variant) => (
      <Button key={variant} variant={variant} {...args}>
        {variant}
      </Button>
    ))}
  </Grid>
);

export const Type = Template.bind({});
Type.args = {
  type: "button",
  children: "type",
};

Type.argTypes = {
  type: {
    control: "inline-radio",
    options: ["button", "iconButton", "undefined"],
  },
};

export const Types: ComponentStory<typeof Button> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$3",
      gridTemplateColumns: "repeat(3, 1fr)",
    }}
  >
    <Button>default</Button>
    <Button type="button">button</Button>
    <Button type="iconButton">IB</Button>
  </Grid>
);
