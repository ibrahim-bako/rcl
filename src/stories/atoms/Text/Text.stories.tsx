import { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"

const meta: Meta<typeof Text> = {
  component: Text,
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    variant: "caption",
    color: "primary",
    weigth: "normal",
  },
}
