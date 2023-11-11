import { useEffect, useState } from 'react';
import {
  Header,
  Modal,
  Navbar,
  ProductCard,
  Sidebar,
  LoginModal,
} from './Components';
import { ModalContext, SidebarContext, LoginModalContext } from './context';

import './base.css';

export interface Pizza {
  title: string;
  price: number;
}

const Pizzas: React.FC<{ pizzas: Pizza[] }> = ({
  pizzas,
}: {
  pizzas: Pizza[];
}) => {
  return pizzas.map((pizza) => (
    <ProductCard title={pizza.title} price={pizza.price} />
  ));
};

function App() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const value = { isModalVisible, setIsModalVisible };
  const value2 = { isSidebarVisible, setIsSidebarVisible };
  const value3 = { isLoginModalVisible, setLoginModalVisible };

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8000');
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setPizzas(data);
        }
      }
    })();
  }, []);
  return (
    <>
      <ModalContext.Provider value={value}>
        <SidebarContext.Provider value={value2}>
          <LoginModalContext.Provider value={value3}>
            <Header />
            <Navbar setIsSidebarVisible={setIsSidebarVisible} />
            {/* <Pizzas pizzas={pizzas!} /> */}
            <div className='container' style={{ display: 'flex', gap: '20px' }}>
              <ProductCard
                title='Чиззи чеддер'
                price={55}
                imgSrc='https://dodopizza-a.akamaihd.net/static/Img/Products/b677e7d580c94c5384a4c3850978c099_760x760.webp'
                description='Индейка, сладкий перец, моцарелла из цельного молока, томатный соус, сыр чеддер, сыр пармезан'
              />
              <ProductCard
                title='2 пиццы 30 см'
                price={115}
                imgSrc='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/97def14eb9b34733bdedd9c7cd64b282_366x366.webp'
                description='Вы можете заказать 2 средние пиццы из списка за 115.000 или выбрать другие пиццы за небольшую доплату.'
                oldPrice={141}
              />
              <ProductCard
                title='Чиззи чеддер'
                price={55}
                imgSrc='https://dodopizza-a.akamaihd.net/static/Img/Products/b677e7d580c94c5384a4c3850978c099_760x760.webp'
                description='Индейка, сладкий перец, моцарелла из цельного молока, томатный соус, сыр чеддер, сыр пармезан'
              />
              <ProductCard
                title='2 пиццы 30 см'
                price={115}
                imgSrc='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/97def14eb9b34733bdedd9c7cd64b282_366x366.webp'
                description='Вы можете заказать 2 средние пиццы из списка за 115.000 или выбрать другие пиццы за небольшую доплату.'
                oldPrice={141}
              />
            </div>
            <Sidebar />
            <Modal />
            <LoginModal />
          </LoginModalContext.Provider>
        </SidebarContext.Provider>
      </ModalContext.Provider>
    </>
  );
}

export default App;
