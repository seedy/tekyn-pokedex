import React from "react";
import Divider from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import H1 from "components/Typography/H1";
import Flex from "components/Flex";
import Pokemon from "components/Pokemon";

export default {
  title: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Flex css={{ flexDirection: "column", alignItems: "center" }}>
    <Flex
      css={{ flexDirection: "column", alignItems: "center", width: "100%" }}
    >
      <H1>Charizard #006</H1>
      <Divider {...args} />
    </Flex>
    <Pokemon id={6} name="Charizard" unoptimized />
  </Flex>
);

export const Default = Template.bind({});
