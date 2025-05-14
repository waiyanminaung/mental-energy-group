import { FC } from "react";
import { Input, InputProps } from "../ui/input";
import { RHFController } from "./rhf-controller";
import classNames from "@/utils/classNames";

export interface RHFDateProps extends Omit<InputProps, "type"> {
  name: string;
}

const RHFDate: FC<RHFDateProps> = ({ name, className, ...inputProps }) => {
  return (
    <RHFController
      name={name}
      render={({ field, fieldState: { error } }) => {
        const hasError = Boolean(error);

        return (
          <Input
            {...inputProps}
            {...field}
            type="date"
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

RHFDate.displayName = "RHFDate";

export { RHFDate };
