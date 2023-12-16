export interface IButtonProps {
  type: string;
  size: string;
  children: JSX.Element[] | string;
  disabled?: boolean;
  onClick?: () => void;
}
