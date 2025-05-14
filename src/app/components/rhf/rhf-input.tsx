import { FC } from "react";
import { Input, InputProps } from "../ui/input";
import { RHFController } from "./rhf-controller";
import classNames from "@/utils/classNames";

export interface RHFInputProps extends InputProps {
  name: string;
}

const RHFInput: FC<RHFInputProps> = ({ name, className, ...inputProps }) => {
  return (
    <RHFController
      name={name}
      render={({ field, fieldState: { error } }) => {
        const hasError = Boolean(error);

        return (
          <Input
            {...inputProps}
            {...field}
            className={classNames(
              className,
              hasError &&
                "focus:ring-destructive focus:border-destructive ring-destructive border-destructive"
            )}
          />
        );
      }}
    />
  );
};

RHFInput.displayName = "RHFInput";

export { RHFInput };
