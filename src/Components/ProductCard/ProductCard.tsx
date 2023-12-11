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
  id: number | string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  title,
  description,
  price,
  oldPrice,
  id,
}: ProductCardProps) => {
  const formattedPrice = formatPrice(price);
  const { setIsModalVisible } = useContext(ModalContext);

  return (
    <div
      className={styles.card}
      onClick={() => {
        setIsModalVisible(true);
      }}
      key={id}
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
              <img
                className={styles.card__discount}
                src='/icons/discount.svg'
                alt=''
              />
              {formatPrice(oldPrice)} сумов
            </span>
          )}
        </div>
        <Button type='secondary-btn' size='medium-btn'>
          Выбрать
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
