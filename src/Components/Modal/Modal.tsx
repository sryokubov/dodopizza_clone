import { useContext, useEffect } from "react";
import classNames from "classnames";
import { ModalContext } from "../../context";
import { Button, ModalCard } from "..";

import styles from "./Modal.module.scss";

// export interface ModalProps {
//   isModalVisible: boolean;
//   setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

const modalCardData = [
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF50F6026F",
    title: "Шампиньоны",
    price: 5,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13",
    title: "Цыпленок",
    price: 6,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9",
    title: "Брынза",
    price: 7,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA",
    title: "Острый халапеньо",
    price: 4,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAED20AFD4B",
    title: "Говядина",
    price: 8,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF7D64D796",
    title: "Итальянские травы",
    price: 1,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF44E8D9B7",
    title: "Томаты",
    price: 3,
  },
  {
    imgSrc:
      "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9EA8A95AE1BD9",
    title: "Соленые огурчики",
    price: 4,
  },
];

const Modal = () => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalVisible]);

  const onClickHandler = () => {
    setIsModalVisible(false);
  };
  return (
    <div
      className={classNames(styles.modal, { [styles.visible]: isModalVisible })}
    >
      <div className={styles.modal__background}></div>
      <div className={styles.modal__window}>
        <div className={styles.modal__close_btn} onClick={onClickHandler}>
          <img src="/icons/cross-icon.svg" alt="" />
        </div>
        <div className={styles.modal__left}></div>
        <div className={styles.modal__right}>
          <div className={styles.modal__inner}>
            <div className={styles.modal__inner_content}>
              <h1 className={styles.modal__title}>Чиззи чеддер</h1>
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
              type="primary-btn"
              size="big-btn"
              text="Добавить в корзину за 55 000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
