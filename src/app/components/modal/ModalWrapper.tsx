"use client";

import classNames from "@/utils/classNames";

const ModalWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={"pointer-events-auto"}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop  */}
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity
          "ease-out duration-300 opacity-100"
          `}
        aria-hidden="true"
      ></div>

      {/* Modal Dialog */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex flex-col ">
        <div
          className={classNames(
            "flex rounded-lg bg-white max-w-lg m-auto w-full max-h-[90vh] overflow-auto",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
