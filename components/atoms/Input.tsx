import { InputHTMLAttributes } from "react";
import { Input as ShadcnInput } from "@/components/ui/input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
}

export const Input = ({
  label,
  className,
  labelClassName,
  inputClassName,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className="relative mb-6">
      <div className="absolute -top-3 left-4 px-5 bg-custom-gray rounded-full z-10">
        <span className="text-custom-text text-lg font-extrabold">{label}</span>
      </div>
      <ShadcnInput 
        type={"text"} 
        placeholder={placeholder}
        className="
          w-full
          h-16
          !pt-8
          !pb-4
          py-2
          bg-white 
          rounded-[10px] 
          border-2 
          border-custom-gray
          text-gray-400
          placeholder:text-custom-placeholder
          placeholder:font-normal
          placeholder:text-lg
        "
        {...props}
      />
    </div>
  );
};