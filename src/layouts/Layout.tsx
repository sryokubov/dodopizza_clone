import { useState } from 'react';
import { Header } from '../Components';
import { ModalContext, SidebarContext, LoginModalContext } from '../context';

interface LayoutPropsInterface {
  children: JSX.Element;
}

const Layout = (props: LayoutPropsInterface) => {
  const children = props.children;

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const value = { isModalVisible, setIsModalVisible };
  const value2 = { isSidebarVisible, setIsSidebarVisible };
  const value3 = { isLoginModalVisible, setLoginModalVisible };

  return (
    <>
      <ModalContext.Provider value={value}>
        <SidebarContext.Provider value={value2}>
          <LoginModalContext.Provider value={value3}>
            <Header />
            {children}
          </LoginModalContext.Provider>
        </SidebarContext.Provider>
      </ModalContext.Provider>
    </>
  );
};

export default Layout;
