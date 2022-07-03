import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  element: "button",
  type: "primary",
  children: "Primary",
  onClick: () => {},
  disabled: false,
  className: "",
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  element: "button",
  type: "secondary",
  children: "Secondary",
  onClick: () => {},
  disabled: false,
  className: "",
} as ButtonProps;
