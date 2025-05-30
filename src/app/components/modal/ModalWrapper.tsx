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
      className="pointer-events-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop  */}
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity ease-out duration-300 opacity-100 z-20" />

      {/* Modal Dialog */}
      <div className="fixed inset-0 z-30 w-screen flex flex-col">
        <div className={classNames("max-w-lg m-auto w-full", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
