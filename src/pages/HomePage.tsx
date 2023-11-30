import { useContext } from 'react';
import {
  Modal,
  Navbar,
  ProductCard,
  Sidebar,
  LoginModal,
  SidebarEmpty,
  Banner,
} from '../components';

import '../base.scss';
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

      <div className='container'>
        <h2 style={{ fontSize: '36px', margin: '32px 0' }}>Пицца</h2>

        <div
          className='productsWrapper'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {Array(10)
            .fill({
              title: 'Чиззи чеддер',
              price: 55,
              imgSrc:
                'https://dodopizza-a.akamaihd.net/static/Img/Products/b677e7d580c94c5384a4c3850978c099_760x760.webp',
              description:
                'Индейка, сладкий перец, моцарелла из цельного молока, томатный соус, сыр чеддер, сыр пармезан',
            })
            .map(({ title, price, imgSrc, description }) => (
              <ProductCard
                title={title}
                price={price}
                imgSrc={imgSrc}
                description={description}
              />
            ))}
        </div>
      </div>
      <Sidebar>
        <SidebarEmpty />
      </Sidebar>
      <Modal pizzaData={{ id: 1 }} />
      <LoginModal />
      <Banner />
    </>
  );
};

export default HomePage;
