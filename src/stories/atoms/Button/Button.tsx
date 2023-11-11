import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  icon?: React.ReactNode
  className?: string
  colorScheme?:
    | "primary"
    | "secondary"
    | "accent"
    | "error"
    | "warning"
    | "success"
  size?: "sm" | "md" | "lg"
  variant?: "solid" | "outline" | "ghost"
  loading?: boolean
  as?: "button" | "input"
  disabled?: boolean
  value?: string
  onClick?: () => void
}

export const Button = ({
  icon,
  className,
  colorScheme = "accent",
  size = "md",
  variant = "solid",
  loading = false,
  disabled = false,
  value,
  as: Component = "button",
  onClick,
}: Props) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-4 py-1.5 text-base font-semibold"
      case "md":
        return "px-5 py-2 text-lg font-semibold"
      case "lg":
        return "px-6 py-3 text-xl font-semibold"
    }
  }, [size])

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "solid":
        return `text-white bg-${colorScheme}-4 border-2 border-${colorScheme}-4 hover:bg-${colorScheme}-5 focus:ring-4 focus:ring-${colorScheme}-2 `
      case "outline":
        return `text-${colorScheme}-4 bg-${colorScheme}-1 hover:bg-${colorScheme}-4 hover:text-white focus:ring-4 focus:ring-${colorScheme}-2 hover:border-transparent focus:border-transparent border-2 border-${colorScheme}-4`
      case "ghost":
        return `text-${colorScheme}-4 hover:bg-${colorScheme}-2 focus:ring-4 focus:ring-${colorScheme}-2 border-transparent border-transparent border-2 `
    }
  }, [variant, colorScheme])

  return (
    <>
      <Component
        type={Component === "input" ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          className,
          variantStyle,
          sizeStyle,
          "rounded-md transition-all duration-200",
        )}
      >
        {loading ? (
          <span className="mr-2">...</span>
        ) : (
          icon && <span className="mr-2">{icon}</span>
        )}
        {value}
      </Component>
    </>
  )
}
