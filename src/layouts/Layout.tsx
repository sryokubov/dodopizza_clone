import { useState } from 'react';
import { Header } from '../components';
import {
  ModalContext,
  SidebarContext,
  LoginModalContext,
  AuthContext,
  UModalContext,
} from '../context';

interface LayoutPropsInterface {
  children: JSX.Element;
}

const Layout = (props: LayoutPropsInterface) => {
  const children = props.children;

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [isUModalVisible, setIsUModalVisible] = useState<boolean>(true);

  const modalContext = { isModalVisible, setIsModalVisible };
  const sidebarContext = { isSidebarVisible, setIsSidebarVisible };
  const loginContext = { isLoginModalVisible, setLoginModalVisible };
  const umodalContext = { isUModalVisible, setIsUModalVisible };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <UModalContext.Provider value={umodalContext}>
          <ModalContext.Provider value={modalContext}>
            <SidebarContext.Provider value={sidebarContext}>
              <LoginModalContext.Provider value={loginContext}>
                <Header />
                {children}
              </LoginModalContext.Provider>
            </SidebarContext.Provider>
          </ModalContext.Provider>
        </UModalContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
