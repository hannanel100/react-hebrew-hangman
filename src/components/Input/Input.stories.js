import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Large = () => <Input size="large" />;
export const Medium = () => <Input size="medium" />;
export const Small = () => <Input size="small" />;

Small.storyName = "small input";
