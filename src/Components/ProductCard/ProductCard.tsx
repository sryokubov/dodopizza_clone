import { useContext } from 'react';
import { ModalContext } from '../../context';
import { formatPrice } from '../../utilities';
import { Button } from '..';

import styles from './ProductCard.module.scss';
export interface ProductCardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  title,
  description,
  price,
  oldPrice,
}: ProductCardProps) => {
  const formattedPrice = formatPrice(price);
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  return (
    <div
      className={styles.card}
      onClick={() => {
        setIsModalVisible(true);
      }}
    >
      <div className={styles.card__header}>
        <img src={imgSrc} alt='' />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__price_box}>
          <span className={styles.card__price}>от {formattedPrice} сумов</span>
          {oldPrice && (
            <span className={styles.card__old_price}>
              <svg
                viewBox='0 0 75 10'
                preserveAspectRatio='none'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={styles.card__discount}
              >
                <path
                  opacity='0.55'
                  d='M1 9c7.346-1.833 34.434-7.5 73-8'
                  stroke='#FF6900'
                  stroke-width='2'
                ></path>
              </svg>
              {formatPrice(oldPrice)} сумов
            </span>
          )}
        </div>
        <Button type='secondary-btn' size='medium-btn' text='Выбрать' />
      </div>
    </div>
  );
};

export default ProductCard;
