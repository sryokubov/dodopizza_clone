import classNames from 'classnames';

import { Stars } from '..';

import styles from './Rating.module.scss';

interface RatingProps {
  deliveryTime: number;
  rating: number;
}

const Rating = ({ deliveryTime, rating }: RatingProps) => {
  return (
    <div className={styles.info}>
      {deliveryTime.toString()} мин
      <div className={styles.dot}>
        <div className={styles.info__panel}>
          <i className={styles.triangle}>
            <img src='icons/triangle.svg' alt='' />
          </i>
          <div className={styles.info__left}>
            <span className={styles['info__big-text']}>43 минуты</span>
            <span className={styles['info__medium-text']}>
              Среднее время доставки
            </span>
            <span className={styles.info__text}>
              Если не&nbsp;успеем за&nbsp;60&nbsp;минут, вы&nbsp;получите
              сертификат на&nbsp;большую пиццу
            </span>
          </div>
          <div className={styles.info__right}>
            <div className={styles['info__big-text']}>
              <span>{rating}</span>
              <Stars rating={rating} />
            </div>
            <span className={styles['info__medium-text']}>660 оценок</span>
            <span className={styles.info__text}>
              Оценить заказ можно в мобильном приложении
            </span>
          </div>
          <span
            className={classNames(
              styles['info__text'],
              styles['info__text-bottom']
            )}
          >
            Данные за последние 7 дней в вашем городе
          </span>
        </div>
      </div>
      4.66
      <div className={styles.star}>
        <img src='/icons/header-star.svg' alt='' />
      </div>
    </div>
  );
};

export default Rating;
