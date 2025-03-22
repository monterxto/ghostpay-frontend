import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
}

export const Icon = ({ name, className = "", ...props }: IconProps) => {
  const icons: Record<string, any> = {
    "arrow-up": "▲",
    "arrow-down": "▼",
    "chevron-down": "↓",
  };

  return (
    <span className={`inline-block ${className}`} {...props}>
      {icons[name] || ""}
    </span>
  );
};