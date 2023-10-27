import "./Button.css";

interface IButtonProps {
  type: string;
  size: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ type, size, text, onClick }: IButtonProps) => {
  return (
    <div>
      <button className={"btn " + size + " " + type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
