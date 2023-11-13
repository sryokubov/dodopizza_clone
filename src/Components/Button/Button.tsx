import './Button.css';

interface IButtonProps {
  type: string;
  size: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  type,
  size,
  text,
  disabled = false,
  onClick,
}: IButtonProps) => {
  return (
    <div>
      <button
        className={'btn ' + size + ' ' + type}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
