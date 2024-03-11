import {
  Modal,
  ProductCard,
  Sidebar,
  LoginModal,
  ItemCartTotal,
  Title,
  SidebarEmpty,
  CartItem,
  Delivery, // Corrected import
} from "../components";

import "../base.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsAmountContext } from "../context";

export interface Pizza {
  title: string;
  price: number;
}

const pizza1 = {
  title: "Чиззи чеддер",
  price: 55,
  imgSrc:
    "https://dodopizza-a.akamaihd.net/static/Img/Products/b677e7d580c94c5384a4c3850978c099_760x760.webp",
  description:
    "Индейка, сладкий перец, моцарелла из цельного молока, томатный соус, сыр чеддер, сыр пармезан",
  id: 1,
};

const pizza2 = {
  title: "Маргарита",
  price: 75,
  imgSrc:
    "https://dodopizza-a.akamaihd.net/static/Img/Products/b677e7d580c94c5384a4c3850978c099_760x760.webp",
  description:
    "Индейка, сладкий перец, моцарелла из цельного молока, томатный соус, сыр чеддер, сыр пармезан",
  id: 2,
};

const HomePage = () => {
  const { productsAmount, setProductsAmount } = useContext(
    ProductsAmountContext
  );
  const [productId, setProductId] = useState<number | null>(null);
  const [targetProduct, setTargetProduct] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    const product = [pizza1, pizza2].filter(
      (product) => product.id === productId
    )[0];
    setTargetProduct(product);
  }, [productId]);

  useEffect(() => {
    const orders = localStorage.getItem("orders");

    if (orders) {
      setProductsAmount(orders.split(",")!.length);
    }
  }, [localStorage.getItem("orders")]);

  const parseProducts = () => {
    const orders = localStorage.getItem("orders")?.split(",");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products: any = {};

    if (orders) {
      orders.forEach((orderId: string) => {
        if (orderId in products) {
          products[orderId] += 1;
        } else {
          products[orderId] = 1;
        }
      });
    }

    setProducts(products);
  };

  useEffect(() => {
    parseProducts();
  }, [productsAmount]);
  const renderSidebarContent = () => {
    return productsAmount ? (
      <>
        {Object.entries(products).map((product) => {
          return <CartItem amount={product[1]} id={product[0]} />;
        })}
        <ItemCartTotal />
      </>
    ) : (
      <SidebarEmpty />
    );
  };

  return (
    <>
      <div className="container">
        <Title type="h2">Пицца</Title>
        <div
          className="productsWrapper"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {[pizza1, pizza2].map(({ title, price, imgSrc, description, id }) => (
            <ProductCard
              title={title}
              price={price}
              imgSrc={imgSrc}
              description={description}
              id={id}
              setProductId={setProductId}
            />
          ))}
        </div>
      </div>
      <Sidebar>{renderSidebarContent()}</Sidebar>
      <Modal pizzaData={targetProduct} />
      <LoginModal />
      <Delivery />
    </>
  );
};

export default HomePage;
