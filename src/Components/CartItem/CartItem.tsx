import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
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
          <span>85 000 сум</span>
        </div>
        <div className={styles.itemBox__calc_count}>
          <a href="" className={styles.itemBox__calc_count_link}>
            Изменить
          </a>
          <div className={styles.itemBox__calc_count_counter}>
            <button>
              <img src="/icons/counter-minus-icon.svg" alt="minus" />
            </button>
            <div className={styles.itemBox__calc_count_counter_num}>1</div>
            <button>
              <img src="/icons/counter-plus-icon.svg" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
