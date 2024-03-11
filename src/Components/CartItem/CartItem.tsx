import { useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  const [amount, setAmount] = useState<number>(props.amount);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const incrementAmount = () => {
    setAmount(amount + 1);
    updateLocalStorage(amount + 1);
  };

  const decrementAmount = () => {
    if (amount === 1) {
      setDeleteFlag(true);
    } else {
      setAmount(amount - 1);
      updateLocalStorage(amount - 1);
    }
  };

  const updateLocalStorage = (newAmount) => {
    const orders = localStorage.getItem("orders")?.split(",") || [];
    const updatedOrders = [...new Set([...orders, props.id])]; // Use Set to ensure unique values
    localStorage.setItem("orders", updatedOrders.join(","));
  };

  return (
    !deleteFlag && (
      <div className={styles.itemBox}>
        <button className={styles.itemBox__button}>
          <img src="/icons/CartItem-close-btn.svg" alt="close btn" />
        </button>
        <div className={styles.itemBox__content}>
          <picture className={styles.itemBox__content_picture}>
            <img
              className={styles.itemBox__content_picture_img}
              src="https://cdn.dodostatic.net/static/Img/Products/0abcc6d258c94b3bb1412b6cb644dec5_183x183.jpeg"
              alt="little pizza"
            />
          </picture>
          <div className={styles.itemBox__content_text}>
            <h3 className={styles.itemBox__content_text_h3}>Пепперони фреш</h3>
            <div className={styles.itemBox__content_text_dynamic}>
              Средняя 30 см, традиционное тесто
            </div>
          </div>
        </div>
        <div className={styles.itemBox__calc}>
          <div className={styles.itemBox__calc_total}>
            <span>{85 * amount} 000 сум</span>
          </div>
          <div className={styles.itemBox__calc_count}>
            <a href="#" className={styles.itemBox__calc_count_link}>
              Изменить
            </a>
            <div className={styles.itemBox__calc_count_counter}>
              <button onClick={decrementAmount}>
                <img src="/icons/counter-minus-icon.svg" alt="minus" />
              </button>
              <div className={styles.itemBox__calc_count_counter_num}>
                {amount}
              </div>
              <button onClick={incrementAmount}>
                <img src="/icons/counter-plus-icon.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

//  priceCalc = () {
//   return amaount *85
//  }

export default CartItem;
