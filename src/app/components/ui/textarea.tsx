import classNames from "@/utils/classNames";
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  suffix?: React.ReactNode | string;
  containerClassName?: string;
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ containerClassName, className, prefix, suffix, ...props }, ref) => {
    return (
      <label className={classNames("flex", containerClassName)}>
        {(prefix ||= "")}
        <textarea
          className={classNames(
            "bg-white border-input text-sm shadow-xs transition-[color,box-shadow] w-full min-w-0 rounded-md border px-3 py-2 outline-none focus-visible:ring-[1px]",
            "focus:ring-primary focus:border-primary",
            "min-h-[80px] resize-y",
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
Textarea.displayName = "Textarea";

export { Textarea };
