"use client";

import React from "react";
import { createRoot, Root } from "react-dom/client";

export interface ModalProps {
  closeModal?: () => void;
}

let root: Root | null = null;

export const useModal = () => {
  function show(Component: React.ReactElement<ModalProps>) {
    const mount = document.getElementById("mount-container");

    if (!mount) throw new Error("mount-container not found");

    if (root) {
      root.render(React.cloneElement(Component, { closeModal: hide }));
    } else {
      root = createRoot(mount);
      root.render(React.cloneElement(Component, { closeModal: hide }));
    }
  }

  function hide() {
    const mount = document.getElementById("mount-container");
    if (!mount) throw new Error("mount-container not found");
    root?.render(null);
  }

  return {
    show,
    hide,
  };
};
