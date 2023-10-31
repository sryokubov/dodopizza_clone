import { useState } from "react";
import classNames from "classnames";
import { formatPrice } from "../../utilities";
import styles from "./Card.module.scss";

interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price }: CardProps) => {
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.selected_icon}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          fill="#ff6900"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.602 7.864a1 1 0 01.2 1.4l-4.576 6.101c-.061.082-.146.197-.23.29a1.346 1.346 0 01-.513.366c-.311.121-.656.121-.967 0a1.346 1.346 0 01-.513-.365c-.084-.094-.17-.209-.23-.29l-2.075-2.767a1 1 0 011.6-1.2l1.701 2.269 4.202-5.604a1 1 0 011.4-.2z"
          fill="#ff6900"
        ></path>
      </svg>
      <div className={styles.card__img}>
        <img src={imageSrc} alt="" />
      </div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__price}>{formatPrice(price)} сум</p>
    </div>
  );
};

export default Card;
