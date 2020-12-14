import React from "react";

import { MuiButton } from "./Button";

export default {
  title: "WSG/Button",
  component: MuiButton,
};

const Template = (args) => <MuiButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  color: "default",
  variant: "contained",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  color: "primary",
  variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  color: "secondary",
  variant: "contained",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large",
  color: "default",
  variant: "contained",
  size: "large"
};

export const Small = Template.bind({});
Small.args = {
  label: "Small",
  color: "default",
  variant: "contained",
  size: "small"
};