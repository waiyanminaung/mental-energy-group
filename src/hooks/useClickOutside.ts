import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
  handler?: (event: MouseEvent | TouchEvent) => void,
  refs?: RefObject<T>[]
) => {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      if (refs.some((ref) => ref.current?.contains(event.target as Node))) {
        return;
      }

      handler?.(event);
    };

    document.addEventListener("mousedown", listener, true);
    document.addEventListener("touchstart", listener, true);

    return () => {
      document.removeEventListener("mousedown", listener, true);
      document.removeEventListener("touchstart", listener, true);
    };
  }, [refs, handler]);
};

export default useClickOutside;
