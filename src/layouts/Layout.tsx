import { useState } from 'react';
import { Header } from '../components';
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
  const [productsAmount, setProductAmount] = useState(0);

  const modalContext = { isModalVisible, setIsModalVisible };
  const sidebarContext = { isSidebarVisible, setIsSidebarVisible };
  const loginContext = { isLoginModalVisible, setLoginModalVisible };
  const umodalContext = { isUModalVisible, setIsUModalVisible };
  const productsAmountContext = { productsAmount, setProductAmount };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <ProductsAmountContext.Provider value={productsAmountContext}>
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
        </ProductsAmountContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
