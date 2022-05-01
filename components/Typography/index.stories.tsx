import React from "react";
import Typography from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Typographies",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Typography {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Variant = Template.bind({});
Variant.args = {
  variant: "subtle",
  children: "Variant",
};

Variant.argTypes = {
  variant: {
    control: "inline-radio",
    options: ["undefined", "subtle", "info"],
  },
};

export const Variants: ComponentStory<typeof Typography> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Typography {...args}>Default</Typography>
    <Typography variant="subtle" {...args}>
      Subtle
    </Typography>
    <Typography variant="info" {...args}>
      Info
    </Typography>
  </Grid>
);

export const Align = Template.bind({});
Align.args = {
  children: "align",
};
Align.argTypes = {
  align: {
    control: "inline-radio",
    options: ["undefined", "right", "center"],
  },
};

export const Aligns: ComponentStory<typeof Typography> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <Typography {...args}>Default</Typography>
    <Typography align="right" {...args}>
      Right
    </Typography>
    <Typography align="center" {...args}>
      Center
    </Typography>
  </Grid>
);
