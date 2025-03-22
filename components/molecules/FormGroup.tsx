import { Input } from "../atoms/Input";
import { InputHTMLAttributes } from "react";

interface FormGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
}

export const FormGroup = ({ label, name, className = "", placeholder = "", ...props }: FormGroupProps) => (
  <div className="space-y-1">
    <Input label={label} name={name} className={className} placeholder={placeholder} {...props} />
  </div>
);