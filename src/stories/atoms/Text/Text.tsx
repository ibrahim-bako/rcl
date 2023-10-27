import clsx from "clsx";
import { useMemo } from "react";

type Props = React.PropsWithChildren<{
  variant?:
    | "display"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body1"
    | "body2"
    | "caption";

  color: "white" | "black" | "primary" | "secondary";
  weigth: "normal" | "bold" | "semibold" | "extrabold" | "thin";
  as?: "div" | "p" | "span";
  className?: string;
}>;

export const Text = ({
  as: Component = "p",
  children,
  variant,
  className,
  color,
  weigth,
}: Props) => {
  const colorStyle = useMemo(() => {
    switch (color) {
      case "black":
        "text-blue-900";
    }
  }, [color]);

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "display":
        return "text-6xl";
      case "heading1":
        return "text-4xl";
      case "heading2":
        return "text-3xl";
      case "heading3":
        return "text-2xl";
      case "heading4":
        return "text-xl";
      case "body1":
        return "text-lg";
      case "body2":
        return "text-base";
      case "caption":
        return "text-xs text-opacity-50";
    }
  }, [variant]);

  return (
    <>
      <Component className={clsx(variantStyle, className, "")}>
        {children}
      </Component>
    </>
  );
};
