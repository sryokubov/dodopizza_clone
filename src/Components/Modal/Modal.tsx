import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ModalContext } from '../../context';
import { Button, ModalCard, Switch } from '..';

import styles from './Modal.module.scss';

// export interface ModalProps {
//   isModalVisible: boolean;
//   setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

const modalCardData = [
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF50F6026F',
    title: 'Шампиньоны',
    price: 5,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
    title: 'Цыпленок',
    price: 6,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
    title: 'Брынза',
    price: 7,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA',
    title: 'Острый халапеньо',
    price: 4,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAED20AFD4B',
    title: 'Говядина',
    price: 8,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF7D64D796',
    title: 'Итальянские травы',
    price: 1,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF44E8D9B7',
    title: 'Томаты',
    price: 3,
  },
  {
    imgSrc:
      'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9EA8A95AE1BD9',
    title: 'Соленые огурчики',
    price: 4,
  },
];

const pizzaImages = [
  {
    link: 'https://dodopizza-a.akamaihd.net/static/Img/Products/41f03c8108ab4aa28eb75d09d28b858f_1875x1875.webp',
    size: 'small',
    doughType: 'traditional',
  },

  {
    link: 'https://dodopizza-a.akamaihd.net/static/Img/Products/55e123ffb87c4403828b86089b58fb70_1875x1875.webp',
    size: 'medium',
    doughType: 'traditional',
  },

  {
    link: 'https://dodopizza-a.akamaihd.net/static/Img/Products/594c0a4876374baaabbb3f8679348711_1875x1875.webp',
    size: 'large',
    doughType: 'traditional',
  },

  {
    link: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dff0a20f0e6443339ae3136b66c917c6_1875x1875.webp',
    size: 'medium',
    doughType: 'thin',
  },

  {
    link: 'https://dodopizza-a.akamaihd.net/static/Img/Products/fe6e4f55a72b403b96bbeb3b6faa19ba_1875x1875.webp',
    size: 'large',
    doughType: 'thin',
  },
];

const Modal = () => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  const [doughType, setDoughType] = useState('traditional');
  const [size, setSize] = useState('medium');

  const pizzaImage = filterPizzaImage(size, doughType);

  const doughTypeSwitchClick = (e: React.SyntheticEvent<HTMLLabelElement>) => {
    if (!(e.target instanceof HTMLLabelElement)) {
      return;
    }

    if (e.target.dataset.order) {
      switch (e.target.dataset.order) {
        case '0':
          setDoughType('traditional');
          break;
        case '1':
          setDoughType('thin');
          break;
      }
    }
  };

  const sizeSwitchClick = (e: React.SyntheticEvent<HTMLLabelElement>) => {
    if (!(e.target instanceof HTMLLabelElement)) {
      return;
    }

    if (e.target.dataset.order) {
      switch (e.target.dataset.order) {
        case '0':
          setSize('small');
          break;
        case '1':
          setSize('medium');
          break;
        case '2':
          setSize('large');
          break;
      }
    }
  };

  function filterPizzaImage(size: string, doughType: string) {
    const filteredPizzaImage = pizzaImages.filter(
      (imageObj) => imageObj.size === size && imageObj.doughType === doughType
    );

    return filteredPizzaImage[0].link;
  }

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalVisible]);

  const onClickHandler = () => {
    setIsModalVisible(false);
  };

  const calcMargin = () => {
    switch (size) {
      case 'small':
        return '128px 90px 0px';
      case 'medium':
        return '92px 52px 0px';
      case 'large':
        return '50px 14px 0px';
    }
  };
  return (
    <div
      className={classNames(styles.modal, { [styles.visible]: isModalVisible })}
    >
      <div className={styles.modal__background}></div>
      <div className={styles.modal__window}>
        <div className={styles.modal__close_btn} onClick={onClickHandler}>
          <img src='/icons/cross-icon.svg' alt='' />
        </div>
        <div className={styles.modal__left}>
          <div
            style={{
              margin: calcMargin(),
              transition: 'margin 0.25s ease-in-out 0s',
            }}
          >
            <img src={pizzaImage} alt='' />
          </div>
        </div>
        <div className={styles.modal__right}>
          <div className={styles.modal__inner}>
            <div className={styles.modal__inner_content}>
              <h1 className={styles.modal__title}>Чиззи чеддер</h1>
              <Switch
                options={[
                  { title: 'Маленькая', value: 'small', id: 0 },
                  { title: 'Средняя', value: 'medium', id: 1 },
                  { title: 'Большая', value: 'large', id: 2 },
                ]}
                defaultValue='medium'
                onClick={sizeSwitchClick}
              />
              <Switch
                options={[
                  { title: 'Традиционное', value: 'traditional', id: 0 },
                  { title: 'Тонкое', value: 'thin', id: 1 },
                ]}
                defaultValue='traditional'
                onClick={doughTypeSwitchClick}
              />

              <div className={styles.modal__card_box}>
                <p className={styles.modal__card_title}>Добавить по вкусу</p>
                <div className={styles.modal__card_container}>
                  {modalCardData.map((card) => (
                    <ModalCard
                      imageSrc={card.imgSrc}
                      title={card.title}
                      price={card.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal__button}>
            <Button
              type='primary-btn'
              size='big-btn'
              text='Добавить в корзину за 55 000'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
