import React from "react";
import Layout from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "components/Card";

export default {
  title: "Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout>
    <Card></Card>
  </Layout>
);

export const Default = Template.bind({});
