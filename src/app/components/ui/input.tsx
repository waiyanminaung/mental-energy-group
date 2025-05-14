import classNames from "@/utils/classNames";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  suffix?: React.ReactNode | string;
  containerClassName?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ containerClassName, className, type, prefix, suffix, ...props }, ref) => {
    return (
      <label className={classNames("flex items-center", containerClassName)}>
        {(prefix ||= "")}
        <input
          type={type}
          className={classNames(
            "bg-white border-input text-sm shadow-xs transition-[color,box-shadow] h-10 w-full min-w-0 rounded-md border px-3 py-1 outline-none focus-visible:ring-[1px]",
            "focus:ring-primary focus:border-primary",
            className
          )}
          ref={ref}
          {...props}
        />
        {(suffix ||= "")}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
