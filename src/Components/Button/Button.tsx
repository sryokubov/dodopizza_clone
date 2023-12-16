import { IButtonProps } from './Button.interface';

import './Button.scss';

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
