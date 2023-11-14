import { createContext } from 'react';

interface ModalContextInterface {
  isModalVisible: boolean;
  setIsModalVisible:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => void);
}

interface SidebarContextInterface {
  isSidebarVisible: boolean;
  setIsSidebarVisible:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => void);
}

interface LoginModalContextInterface {
  isLoginModalVisible: boolean;
  setLoginModalVisible:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => void);
}

export const ModalContext = createContext<ModalContextInterface>({
  isModalVisible: false,
  setIsModalVisible: () => {},
});

export const SidebarContext = createContext<SidebarContextInterface>({
  isSidebarVisible: false,
  setIsSidebarVisible: () => {},
});

export const LoginModalContext = createContext<LoginModalContextInterface>({
  isLoginModalVisible: false,
  setLoginModalVisible: () => {},
});
