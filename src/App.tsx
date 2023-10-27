import { useEffect, useState } from "react";
import { Header, Navbar, ProductCard, Sidebar } from "./Components";

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
      <Header />
      <Navbar setIsSidebarVisible={setIsSidebarVisible} />
      <Pizzas pizzas={pizzas!} />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </>
  );
}

export default App;
