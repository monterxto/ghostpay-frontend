import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded ${
      variant === "primary" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
    }`}
    {...props}
  >
    {children}
  </button>
);