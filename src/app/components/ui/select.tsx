"use client";

import useClickOutside from "@/hooks/useClickOutside";
import classNames from "@/utils/classNames";
import { FC, useEffect, useRef, useState } from "react";

type OptionItem = { value: string | number; label: string };

export interface SelectProps {
  name: string;
  options: OptionItem[];
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  className?: string;
  selectButtonClassName?: string;
}

const Select: FC<SelectProps> = ({
  name,
  options,
  value,
  placeholder,
  onChange,
  className,
  selectButtonClassName,
}) => {
  const [, setReload] = useState({});
  const isOpenRef = useRef<boolean>(false);
  const selectBtnRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const optionsContainerRef = useRef<HTMLUListElement>({} as HTMLUListElement);
  const optionsRef = useRef(
    options.map((opt) => ({
      ...opt,
      selected: Boolean(value === opt.value),
    }))
  );

  const selected = optionsRef.current?.find(({ selected }) => selected);

  useClickOutside<HTMLButtonElement | HTMLUListElement>(() => {
    handleClose();
  }, [selectBtnRef, optionsContainerRef]);

  useEffect(() => {
    if (value) handleSelect(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function handleToggle() {
    isOpenRef.current = !isOpenRef.current;
    setReload({});
  }

  function handleClose() {
    isOpenRef.current = false;
    setReload({});
  }

  function handleSelect(value: string | number) {
    optionsRef.current = optionsRef.current.map((opt) => ({
      ...opt,
      selected: opt.value === value,
    }));
    onChange?.(value);
    handleClose();
  }

  return (
    <div className={classNames("relative", className)}>
      <button
        ref={selectBtnRef}
        type="button"
        onClick={handleToggle}
        className={classNames(
          "input-ring rounded-md shadow-xs text-sm font-normal text-body px-3 focus:outline-none hover:bg-white w-full justify-between border-input h-10 border text-start",
          !selected?.label && "text-placeholder",
          selectButtonClassName
        )}
      >
        {selected?.label || placeholder || "Select"}

        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg
            className="size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
          >
            <path d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" />
          </svg>
        </span>
      </button>

      <ul
        ref={optionsContainerRef}
        className={classNames(
          "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none transition ease-in duration-100 ",
          isOpenRef.current ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {optionsRef.current.map(({ label, value, selected }) => (
          <li
            key={`${name}-${value}`}
            className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-50"
            id={`${name}-${value}`}
            arial-role="option"
            onClick={() => handleSelect(value)}
          >
            {label}

            {selected && (
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary">
                <svg
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Select };
