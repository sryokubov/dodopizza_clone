import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ModalContext } from '../../context';
import { Button, ModalCard, Switch } from '..';

import styles from './Modal.module.scss';

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

const Modal = (props) => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  const [doughType, setDoughType] = useState('traditional');
  const [size, setSize] = useState('medium');
  const [isBigCircleVisible, setBigCircleVisible] = useState(true);
  const [isSmallCircleVisible, setSmallCircleVisible] = useState(false);
  const setDoughTypeInfo = useState('традиционное')[1];

  const pizzaImage = filterPizzaImage(size, doughType);

  const doughTypeSwitchClick = (e: React.SyntheticEvent<HTMLLabelElement>) => {
    if (!(e.target instanceof HTMLLabelElement)) {
      return;
    }

    if (e.target.dataset.order) {
      switch (e.target.dataset.order) {
        case '0':
          setDoughType('traditional');
          setDoughTypeInfo('традиционное');
          break;
        case '1':
          setDoughType('thin');
          setDoughTypeInfo('тонкое');
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
          setDoughType('traditional');
          setSize('small');
          setBigCircleVisible(true);
          setSmallCircleVisible(true);
          break;
        case '1':
          setSize('medium');
          setBigCircleVisible(true);
          setSmallCircleVisible(false);
          break;
        case '2':
          setSize('large');
          setBigCircleVisible(false);
          setSmallCircleVisible(false);
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

  useEffect(() => {
    const labelElem = [...document.querySelectorAll('input + label')].filter(
      (elem) => elem.textContent === 'Тонкое'
    )[0] as HTMLLabelElement;
    const inputElem = labelElem.previousElementSibling as HTMLInputElement;
    if (size === 'small') {
      inputElem.disabled = true;
      labelElem.style.pointerEvents = 'none';
      labelElem.style.cursor = 'not-allowed';
      labelElem.style.color = 'rgb(171, 173, 186)';
    } else {
      inputElem.disabled = false;
      labelElem.style.pointerEvents = '';
      labelElem.style.cursor = '';
      labelElem.style.color = '';
    }
  }, [size]);

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

  const getSize = () => {
    switch (size) {
      case 'small':
        return 25;
      case 'medium':
        return 30;
      case 'large':
        return 35;
    }
  };

  const getDoughType = () => {
    switch (doughType) {
      case 'thin':
        return 'тонкое';
      case 'traditional':
        return 'традиционное';
    }
  };

  const addToCartHandler = (pizzaId: string) => {
    const orders = localStorage.getItem('orders');

    if (orders === null) {
      localStorage.setItem('orders', pizzaId);
    } else {
      localStorage.setItem('orders', orders.concat(',', pizzaId));
    }
  };

  return (
    <div
      className={classNames(styles.modal, {
        [styles.visible]: isModalVisible,
      })}
    >
      <div onClick={onClickHandler} className={styles.modal__background}></div>
      <div className={styles.modal__window}>
        <div className={styles.modal__close_btn} onClick={onClickHandler}>
          <img src='/icons/cross-icon.svg' alt='' />
        </div>
        <div className={styles.modal__left}>
          <div
            className={styles.modal__img_box}
            style={{
              margin: calcMargin(),
            }}
          >
            <img className={styles.modal__img} src={pizzaImage} alt='' />
          </div>
          <div
            className={classNames(styles.modal__svg_icon, {
              [styles.visible]: isBigCircleVisible,
            })}
          >
            <img src='/icons/pizza-size-circle-big.svg' alt='' />
          </div>
          <div
            className={classNames(styles.modal__svg_icon_small, {
              [styles.visible]: isSmallCircleVisible,
            })}
          >
            <img src='/icons/pizza-size-circle-small.svg' alt='' />
          </div>
        </div>
        <div className={styles.modal__right}>
          <div className={styles.modal__inner}>
            <div className={styles.modal__inner_content}>
              <h1 className={styles.modal__title}>Чиззи чеддер</h1>
              <p className={styles.modal__info}>
                {getSize()} см, {getDoughType()} тесто
              </p>
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
                      key={card.title}
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
              onClick={() => {
                addToCartHandler(props.pizzaData.id.toString());
              }}
            >
              Добавить в корзину за 55 000
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
