import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "solid",
      type: "string",
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    value: {
      defaultValue: "Button",
      type: "string",
      control: "text",
    },
    className: {
      type: "string",
      control: "text",
    },
    size: {
      defaultValue: "md",
      type: "string",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      defaultValue: "primary",
      type: "string",
      control: "select",
      options: [
        "primary",
        "secondary",
        "accent",
        "error",
        "success",
        "warning",
      ],
    },
    loading: {
      defaultValue: false,
      control: "boolean",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    icon: {
      defaultValue: null,
      control: "object",
    },
    as: {
      defaultValue: "button",
      type: "string",
      control: "select",
      options: ["input", "button"],
    },
    onClick: {
      type: "function",
      action: "clicked",
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    value: "Button",
    size: "md",
    colorScheme: "accent",
    loading: false,
    variant: "solid",
    className: "",
    disabled: false,
    icon: null,
    onClick: () => {},
  },
}

// export const Primary: Story = {
//   args: {
//     color: "secondary",
//     variant: "solid",
//     value: "Button",
//   },
// }
