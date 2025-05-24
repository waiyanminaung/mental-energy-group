import classNames from "@/utils/classNames";
import { Select, SelectProps } from "../ui/select";
import { RHFController } from "./rhf-controller";

interface RHFSelectProps extends SelectProps {
  name: string;
}

export const RHFSelect = ({ name, ...props }: RHFSelectProps) => {
  return (
    <RHFController
      name={name}
      render={({ field, fieldState: { error } }) => {
        const hasError = Boolean(error);

        return (
          <Select
            {...props}
            {...field}
            selectButtonClassName={classNames(
              props.selectButtonClassName,
              hasError &&
                "focus:ring-destructive focus:border-destructive ring-destructive border-destructive"
            )}
          />
        );
      }}
    />
  );
};

RHFSelect.displayName = "RHFSelect";
