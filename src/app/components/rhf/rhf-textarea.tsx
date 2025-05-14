import { FC } from "react";
import { Textarea, TextareaProps } from "../ui/textarea";
import { RHFController } from "./rhf-controller";
import classNames from "@/utils/classNames";

export interface RHFTextareaProps extends TextareaProps {
  name: string;
}

const RHFTextarea: FC<RHFTextareaProps> = ({
  name,
  className,
  ...textareaProps
}) => {
  return (
    <RHFController
      name={name}
      render={({ field, fieldState: { error } }) => {
        const hasError = Boolean(error);

        return (
          <Textarea
            {...textareaProps}
            {...field}
            rows={8}
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

RHFTextarea.displayName = "RHFTextarea";

export { RHFTextarea };
