import { twMerge } from "tailwind-merge";

const classNames = (...classes: (string | boolean | undefined)[]) =>
  twMerge(classes.filter(Boolean).join(" "));

export default classNames;
