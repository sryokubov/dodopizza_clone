import { useContext, useEffect, useRef } from "react";
import styles from "./LoginModal.module.scss";
import classNames from "classnames";
import { LoginModalContext } from "../../context";

const LoginModal = () => {
  const onClickHandler = () => setLoginModalVisible(false);
  const { isLoginModalVisible, setLoginModalVisible } =
    useContext(LoginModalContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("keydown", (e) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    if (isLoginModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoginModalVisible]);

  return (
    <div
      className={classNames(styles.modal, {
        [styles.modal_visible]: isLoginModalVisible,
      })}
    >
      <div onClick={onClickHandler} className={styles.modal__background}></div>
      <div className={styles.modal__window}>
        <button onClick={onClickHandler} className={styles.modal__close_btn}>
          <img src="/icons/cross-icon.svg" alt="" />
        </button>
        <h3 className={styles.modal__title}>Вход на сайт</h3>
        <p className={styles.modal__text}>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
        </p>
        <div className={styles.modal__select_phone_num}>
          <div className={styles.modal__selector_container}>
            <p className={styles.modal__selector_title}>Страна</p>
            <button className={styles.modal__country_selector}>
              <img
                className={styles.modal__flag_icon}
                src="/icons/uzb_flag_icon.svg"
                alt=""
              />
              <img src="/icons/arrow_down.svg" alt="" />
            </button>
          </div>
          <div className={styles.modal__selector_container}>
            <label>
              <p className={styles.modal__selector_title}>Номер телефона</p>
              <input
                ref={inputRef}
                className={styles.modal__phone_num}
                type="tel"
                placeholder="+998 99-999-99-99"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
