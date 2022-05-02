import React from "react";
import TableStats from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "TableStats",
  component: TableStats,
} as ComponentMeta<typeof TableStats>;

const Template: ComponentStory<typeof TableStats> = (args) => (
  <TableStats {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      base: 78,
      stat: {
        name: "hp",
      },
    },
    {
      base: 84,
      stat: {
        name: "attack",
      },
    },
    {
      base: 78,
      stat: {
        name: "defense",
      },
    },
    {
      base: 109,
      stat: {
        name: "special-attack",
      },
    },
    {
      base: 85,
      stat: {
        name: "special-defense",
      },
    },
    {
      base: 100,
      stat: {
        name: "speed",
      },
    },
  ],
};
