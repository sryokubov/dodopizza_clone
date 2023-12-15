export const formatPrice = (price: number): string => `${price} 000`;
export const isScrollDisabled = (isScrollDisabled: boolean) => {
  if (isScrollDisabled) {
    document.body.style.paddingRight = '17px';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0px';
  }
};
