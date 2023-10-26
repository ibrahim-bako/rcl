import { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta = {
  component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
  render: () => (
    <Stepper steps={[{ title: "hello 1" }, { title: "hello 2" }]} />
  ),
};
