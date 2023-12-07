import styles from "./ItemCartTotal.module.scss";

const ItemCartTotal = () => {
  return (
    <div className={styles.item_cart_container}>
      <div className={styles.item_cart_total}>
        <div className={styles.item_cart_total_info}>
          <span> 1 товар</span>
          <span className={styles.item_cart_total_Price}>
            {/* {formatPrice(price)} */}
            79 000 сум
          </span>
        </div>
        <div className={styles.item_cart_total_info}>
          <div>
            <span>Начислим додокоины</span>
            <div className={styles.item_cart_total_tooltip}>
              <div className={styles.item_cart_total_tooltip_icon}>
                <button className={styles.item_cart_total_tooltip_btn}>
                  <img src="/icons/tooltip-icon.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <span>
            +13&nbsp;
            <img
              className={styles.item_cart_total_dodocoin}
              src="/icons/dodocoin_total.svg"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className={styles.item_cart_total_hr}></div>

      <div className={styles.item_cart_final_info}>
        <h2 className={styles.item_cart_final_info_header}>Сумма заказа</h2>
        <span className={styles.item_cart_final_info_price}>69 000 сум</span>
      </div>

      <button className={styles.item_cart_final_info_btn}>
        <img
          className={styles.item_cart_final_info_arrow}
          src="/icons/ItemCart-indecator.svg"
          alt=""
        />
        К оформлению заказа
      </button>
    </div>
  );
};

export default ItemCartTotal;
