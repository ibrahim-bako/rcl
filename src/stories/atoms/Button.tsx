import clsx from "clsx";
import { useMemo } from "react";

type Props = {
  icon?: React.ReactNode;
  className?: string;
  color: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  variant: "solid" | "outline" | "ghost";
};

export const Button = ({
  icon,
  className,
  color = "secondary",
  size = "md",
  variant = "solid",
}: Props) => {
  const colorStyle = useMemo(() => {
    switch (color) {
      case "primary":
        return "";
      case "secondary":
        return "";
    }
  }, []);

  const primaryStyle = useMemo(() => {
    switch (variant) {
      case "solid":
        return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none";
      case "outline":
        return "text-blue-700 bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none border border-blue-700";
      case "ghost":
        return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none";
    }
  }, []);

  return (
    <>
      <div>
        <button
          className={clsx(
            "px-4 py-2 rounded-md font-semibold text-lg",
            primaryStyle
          )}
        >
          {}
          Button
        </button>
      </div>
    </>
  );
};
