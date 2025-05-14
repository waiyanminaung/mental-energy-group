import { FC } from "react";
import { InputError } from "../ui/input-error";
import { RHFController } from "./rhf-controller";

interface RHFErrorProps {
  name: string;
}

const RHFError: FC<RHFErrorProps> = ({ name }) => {
  return (
    <RHFController
      name={name}
      render={({ fieldState: { error } }) => {
        if (!error?.message) return <></>;
        return <InputError>{error.message}</InputError>;
      }}
    />
  );
};

export { RHFError };
