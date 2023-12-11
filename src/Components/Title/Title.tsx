import React from 'react';

import styles from './Title.module.scss';
import classNames from 'classnames';

interface TitleProps {
  type: string;
  marginDisabled?: boolean;
  children: string;
}

const Title: React.FC<TitleProps> = ({
  type,
  marginDisabled = false,
  children,
}: TitleProps) => {
  switch (type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return React.createElement(
        type,
        {
          className: classNames(styles.title, {
            [styles.title__margin]: !marginDisabled,
          }),
        },
        children
      );
    default:
      throw new Error('Type have to be h1-h6');
  }
};

export default Title;
