import styles from './SidebarEmpty.module.scss';

const SidebarEmptyCart = () => {
  return (
    <div className={styles.sidebar_empty__container}>
      <div className={styles.sidebar_empty}>
        <img
          className={styles.sidebar_empty__img}
          src='/images/dog_pizza.svg'
          alt=''
        />
        <h2 className={styles.sidebar_empty__title}>Ой, пусто!</h2>
        <div className={styles.sidebar_empty__text}>
          Ваша корзина пуста, откройте «Меню» и&nbsp;выберите&nbsp;понравившийся
          товар. Мы&nbsp;доставим&nbsp;ваш&nbsp;заказ&nbsp;от&nbsp;
          <span className={styles.sidebar_empty__money}>
            <span className={styles.sidebar_empty__money_value}>
              45&nbsp;000
            </span>
            <span className='money__currency money__currency_on-the-right'>
              {' '}
              сум
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarEmptyCart;
