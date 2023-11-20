import './Button.scss';

interface IButtonProps {
  type: string;
  size: string;
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  type,
  size,
  children,
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
        {children}
      </button>
    </div>
  );
};

export default Button;
