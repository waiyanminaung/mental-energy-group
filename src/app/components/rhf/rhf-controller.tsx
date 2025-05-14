import { FC } from "react";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";

const RHFController: FC<ControllerProps> = ({ ...rest }) => {
  const { control } = useFormContext() || {};

  return <Controller control={control} {...rest} />;
};

export { RHFController };
