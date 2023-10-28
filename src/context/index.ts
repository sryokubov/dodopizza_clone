import { createContext } from "react";

export const ModalContext = createContext({
  isModalVisible: false,
  setIsModalVisible: () => {},
});

export const SidebarContext = createContext({
  isSidebarVisible: false,
  setIsSidebarVisible: () => {},
});
