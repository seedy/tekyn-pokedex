import React from "react";
import Types from "./index";
import { FIRE, FLIGHT } from "components/Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "components/Grid";

export default {
  title: "Types",
  component: Types,
} as ComponentMeta<typeof Types>;

const Template: ComponentStory<typeof Types> = (args) => <Types {...args} />;

export const Variant = Template.bind({});
Variant.args = {
  variant: "simple",
  types: [FIRE, FLIGHT],
};

Variant.argTypes = {
  variant: {
    control: "inline-radio",
    options: ["simple", "double"],
  },
};

export const Variants: ComponentStory<typeof Types> = (args) => (
  <Grid
    css={{
      flexDirection: "column",
      gap: "$3",
      gridTemplateColumns: "repeat(3, 1fr)",
    }}
  >
    <Types variant="simple" {...args} />
    <Types variant="double" {...args} />
  </Grid>
);

Variants.args = {
  types: [FIRE, FLIGHT],
};
Variants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
