import { useState } from 'react';
import classNames from 'classnames';

import { formatPrice } from '../../utilities';

import styles from './ModalCard.module.scss';

interface ModalCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

const ModalCard: React.FC<ModalCardProps> = ({
  imageSrc,
  title,
  price,
}: ModalCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClickHandler = () => {
    if (isSelected) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  return (
    <div
      onClick={onClickHandler}
      className={classNames(styles.card, {
        [styles.card_selected]: isSelected,
      })}
    >
      <img className={styles.selected_icon} src='icons/tick.svg' alt='' />
      <div className={styles.card__img}>
        <img src={imageSrc} alt='' />
      </div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__price}>{formatPrice(price)} сум</p>
    </div>
  );
};

export default ModalCard;
