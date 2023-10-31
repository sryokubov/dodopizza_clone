import { useEffect, useState } from "react";
import { Header, Modal, Navbar, ProductCard, Sidebar } from "./Components";
import { ModalContext, SidebarContext } from "./context";

import "./base.css";

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

  const value = { isModalVisible, setIsModalVisible };
  const value2 = { isSidebarVisible, setIsSidebarVisible };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000");
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
          <Header />
          <Navbar setIsSidebarVisible={setIsSidebarVisible} />
          {/* <Pizzas pizzas={pizzas!} /> */}
          <ProductCard title="Чиззи чеддер" price={55} />
          <Sidebar />
          <Modal />
        </SidebarContext.Provider>
      </ModalContext.Provider>
    </>
  );
}

export default App;
