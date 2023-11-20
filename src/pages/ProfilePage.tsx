import { useEffect } from 'react';
import { ProductCard, UModal } from '../components';

const ProfilePage = () => {
  useEffect(() => {
    localStorage.setItem('cartItems', '123;234');
    const cartItems = localStorage.getItem('cartItems');
    console.log(cartItems?.split(';'));
  }, []);
  return (
    <div>
      <UModal width={345}>
        <ProductCard
          title='2 пиццы 30 см'
          price={115}
          imgSrc='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/97def14eb9b34733bdedd9c7cd64b282_366x366.webp'
          description='Вы можете заказать 2 средние пиццы из списка за 115.000 или выбрать другие пиццы за небольшую доплату.'
          oldPrice={141}
        />
      </UModal>
    </div>
  );
};

export default ProfilePage;
