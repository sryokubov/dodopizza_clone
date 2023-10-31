import { useContext, useEffect } from "react";
import classNames from "classnames";
import { ModalContext } from "../../context";
import { Card } from "..";

import styles from "./Modal.module.scss";

// export interface ModalProps {
//   isModalVisible: boolean;
//   setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

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
              <Card
                imageSrc="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF50F6026F"
                title="Шампиньоны"
                price={5}
              />
              <Card
                imageSrc="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13"
                title="Цыпленок"
                price={6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
