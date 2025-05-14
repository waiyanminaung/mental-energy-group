import { Label } from "../ui/label";
import { FC, ReactElement } from "react";
import { RHFError } from "./rhf-error";

interface RHFInputGroupProps {
  label?: string;
  labelClassName?: string;
  children: ReactElement;
  className?: string;
  required?: boolean;
}

const RHFInputGroup: FC<RHFInputGroupProps> = ({
  label,
  children,
  required,
  labelClassName,
}) => {
  const input = findInput(children);

  if (!input) return <div className="text-destructive">RHF input missing</div>;

  const { name, id } = (input as ReactElement<{ name: string; id: string }>).props; //prettier-ignore

  return (
    <div className="space-y-2">
      {label ? (
        <Label htmlFor={id} className={labelClassName}>
          {label}
          {required && <span className="text-destructive ms-1">*</span>}
        </Label>
      ) : null}
      {children}
      {name ? <RHFError name={name} /> : null}
    </div>
  );
};

function findInput(el: ReactElement) {
  if (!el || typeof el === "string") return null;

  if (
    (el.type as FC)?.displayName &&
    (el.type as FC).displayName?.includes("RHF")
  )
    return el;

  if (el.props && typeof el.props === "object" && "children" in el.props)
    return findInput(el);
}

export { RHFInputGroup };
