import React from "react";
import H1 from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Typographies/H1",
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => (
  <Grid
    css={{
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H1 {...args} />
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

export const Variants: ComponentStory<typeof H1> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H1 {...args}>Default</H1>
    <H1 variant="subtle" {...args}>
      Subtle
    </H1>
    <H1 variant="info" {...args}>
      Info
    </H1>
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

export const Aligns: ComponentStory<typeof H1> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$2",
      gridTemplateColumns: "repeat(1, 1fr)",
    }}
  >
    <H1 {...args}>Default</H1>
    <H1 align="right" {...args}>
      Right
    </H1>
    <H1 align="center" {...args}>
      Center
    </H1>
  </Grid>
);
