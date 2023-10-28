import { useContext } from "react";
import { ModalContext } from "../../context";
import { formatPrice } from "../../utilities";

export interface ProductCardProps {
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
}: ProductCardProps) => {
  const formattedPrice = formatPrice(price);
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  return (
    <div
      onClick={() => {
        setIsModalVisible(true);
      }}
    >
      <div className="card__header">Image</div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__footer">
        <p className="card__price">от {formattedPrice} сумов</p>
      </div>
    </div>
  );
};

export default ProductCard;
