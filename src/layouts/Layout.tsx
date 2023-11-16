import { useState } from 'react';
import { Header } from '../components';
import {
  ModalContext,
  SidebarContext,
  LoginModalContext,
  AuthContext,
} from '../context';

interface LayoutPropsInterface {
  children: JSX.Element;
}

const Layout = (props: LayoutPropsInterface) => {
  const children = props.children;

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const modalContext = { isModalVisible, setIsModalVisible };
  const sidebarContext = { isSidebarVisible, setIsSidebarVisible };
  const loginContext = { isLoginModalVisible, setLoginModalVisible };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <ModalContext.Provider value={modalContext}>
          <SidebarContext.Provider value={sidebarContext}>
            <LoginModalContext.Provider value={loginContext}>
              <Header />
              {children}
            </LoginModalContext.Provider>
          </SidebarContext.Provider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
