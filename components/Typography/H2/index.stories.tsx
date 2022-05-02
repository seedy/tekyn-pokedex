import React from "react";
import H2 from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Typographies/H2",
  component: H2,
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H2 {...args} />
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

export const Variants: ComponentStory<typeof H2> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H2 {...args}>Default</H2>
    <H2 variant="subtle" {...args}>
      Subtle
    </H2>
    <H2 variant="info" {...args}>
      Info
    </H2>
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

export const Aligns: ComponentStory<typeof H2> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H2 {...args}>Default</H2>
    <H2 align="right" {...args}>
      Right
    </H2>
    <H2 align="center" {...args}>
      Center
    </H2>
  </Grid>
);
