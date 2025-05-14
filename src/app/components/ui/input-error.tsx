import classNames from "@/utils/classNames";
import { FC, ReactNode } from "react";

interface InputErrorProps {
  children: ReactNode | string;
  className?: string;
}

const InputError: FC<InputErrorProps> = ({ children, className, ...rest }) => {
  return (
    <span
      className={classNames("text-destructive text-sm inline-block", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

export { InputError };
