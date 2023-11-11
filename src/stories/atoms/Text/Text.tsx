import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  variant?:
    | "display"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body1"
    | "body2"
    | "caption"

  color?: "white" | "black" | "primary" | "secondary" | "accent"
  weigth?: "normal" | "bold" | "semibold" | "large" | "thin" | "light"
  as?: "div" | "p" | "span"
  className?: string
  children?: React.ReactNode
}

export const Text = ({
  as: Component = "p",
  children,
  variant = "body1",
  className,
  color = "black",
  weigth = "normal",
}: Props) => {
  const colorStyle = useMemo(() => {
    switch (color) {
      case "black":
        return "text-black"
      case "white":
        return "text-white"
      case "primary":
        return "text-primary"
      case "secondary":
        return "text-secondary"
      case "accent":
        return "text-accent"
    }
  }, [color])

  const weigthStyle = useMemo(() => {
    switch (weigth) {
      case "thin":
        return "font-light"
      case "light":
        return "font-normal"
      case "normal":
        return "font-medium"
      case "semibold":
        return "font-semibold"
      case "bold":
        return "font-bold"
      case "large":
        return "font-extrabold"
    }
  }, [weigth])

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "display":
        return "text-6xl"
      case "heading1":
        return "text-4xl"
      case "heading2":
        return "text-3xl"
      case "heading3":
        return "text-2xl"
      case "heading4":
        return "text-xl"
      case "body1":
        return "text-lg"
      case "body2":
        return "text-base"
      case "caption":
        return "text-xs text-opacity-70"
    }
  }, [variant])

  return (
    <>
      <Component
        className={clsx(variantStyle, colorStyle, weigthStyle, className, "")}
      >
        {children}
      </Component>
    </>
  )
}
