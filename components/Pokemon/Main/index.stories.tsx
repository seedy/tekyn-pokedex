import React from "react";
import PokemonMain from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pokemon/Main",
  component: PokemonMain,
} as ComponentMeta<typeof PokemonMain>;

const Template: ComponentStory<typeof PokemonMain> = (args) => (
  <PokemonMain {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 6,
  name: "charizard",
  types: [{ name: "fire" }, { name: "flight" }],
  unoptimized: true,
};
Default.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};

export const Other = Template.bind({});
Other.args = {
  id: 96,
  name: "drowzee",
  types: [{ name: "psychic" }],
  unoptimized: true,
};
Other.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};
