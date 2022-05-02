import React from "react";
import PokemonEvolution from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pokemon/Evolution",
  component: PokemonEvolution,
} as ComponentMeta<typeof PokemonEvolution>;

const Template: ComponentStory<typeof PokemonEvolution> = (args) => (
  <PokemonEvolution {...args} />
);

export const Default = Template.bind({});
Default.args = {
  unoptimized: true,
  evolutions: {
    chain: {
      pokemons: [
        {
          id: 4,
          name: "charmander",
        },
        {
          id: 5,
          name: "charmeleon",
        },
        {
          id: 6,
          name: "charizard",
        },
      ],
    },
  },
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
  unoptimized: true,
  evolutions: {
    chain: {
      pokemons: [
        {
          id: 96,
          name: "drowzee",
        },
        {
          id: 97,
          name: "hypno",
        },
      ],
    },
  },
};
Other.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};
