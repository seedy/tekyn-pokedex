import React from "react";
import PokemonBase from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pokemon/Base",
  component: PokemonBase,
} as ComponentMeta<typeof PokemonBase>;

const Template: ComponentStory<typeof PokemonBase> = (args) => (
  <PokemonBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 6,
  name: "Charizard",
  unoptimized: true, // workaround for storybook
  showPokeball: false,
};
Default.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};

export const ShowPokeball = Template.bind({});
ShowPokeball.args = {
  id: 5,
  name: "Charmeleon",
  unoptimized: true,
  showPokeball: true,
};
ShowPokeball.argTypes = {
  unoptimized: {
    table: {
      disable: true,
    },
  },
};
