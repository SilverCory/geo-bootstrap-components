import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps, ButtonType } from ".";

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
    argTypes: {
      type: {
        options: Object.values(ButtonType),
        mapping: ButtonType,
        control: {
          type: "select",
          labels: Object.keys(ButtonType),
        },
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  element: "button",
  type: ButtonType.primary,
  children: "Primary",
  onClick: () => {},
  disabled: false,
  className: "",
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  element: "button",
  type: ButtonType.info,
  children: "Secondary",
  onClick: () => {},
  disabled: false,
  className: "",
} as ButtonProps;
