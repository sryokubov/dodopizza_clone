import { useState } from 'react';
import { Header, Footer } from '../components';
import {
  ModalContext,
  SidebarContext,
  LoginModalContext,
  AuthContext,
  UModalContext,
  ProductsAmountContext,
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
  const [productsAmount, setProductAmount] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const modalContext = { isModalVisible, setIsModalVisible };
  const sidebarContext = { isSidebarVisible, setIsSidebarVisible };
  const loginContext = { isLoginModalVisible, setLoginModalVisible };
  const umodalContext = { isUModalVisible, setIsUModalVisible };
  const productsAmountContext = { productsAmount, setProductAmount };
  const authContext = { isLoggedIn, setIsLoggedIn };

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <ProductsAmountContext.Provider value={productsAmountContext}>
          <UModalContext.Provider value={umodalContext}>
            <ModalContext.Provider value={modalContext}>
              <SidebarContext.Provider value={sidebarContext}>
                <LoginModalContext.Provider value={loginContext}>
                  <Header />
                  {children}
                  <Footer />
                </LoginModalContext.Provider>
              </SidebarContext.Provider>
            </ModalContext.Provider>
          </UModalContext.Provider>
        </ProductsAmountContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
