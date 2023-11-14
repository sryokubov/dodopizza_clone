import { useContext } from 'react';
import { Modal, Navbar, ProductCard, Sidebar, LoginModal } from '../Components';

import '../base.css';
import { SidebarContext } from '../context';

export interface Pizza {
  title: string;
  price: number;
}

// const Pizzas: React.FC<{ pizzas: Pizza[] }> = ({
//   pizzas,
// }: {
//   pizzas: Pizza[];
// }) => {
//   return pizzas.map((pizza) => (
//     <ProductCard title={pizza.title} price={pizza.price} key={pizza.title} />
//   ));
// };

const HomePage = () => {
  // const [pizzas, setPizzas] = useState<Pizza[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://localhost:8000');
  //     if (res.ok) {
  //       const data = await res.json();
  //       if (data) {
  //         setPizzas(data);
  //       }
  //     }
  //   })();
  // }, []);
  const { setIsSidebarVisible } = useContext(SidebarContext);

  return (
    <>
      <Navbar setIsSidebarVisible={setIsSidebarVisible} />
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
    </>
  );
};

export default HomePage;
