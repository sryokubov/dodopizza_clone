import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__row}>
        <div className='container'>
          <div className={styles.banner__content}>
            <i className={styles.banner__image}>
              <img src='/icons/incognito-icon.svg' alt='' />
            </i>
            <p className={styles.banner__p}>
              Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
            </p>
            <a
              className={styles.banner__link}
              target='_blank'
              href='https://dodocontrol.ru'
            >
              Заполнить анкету
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
