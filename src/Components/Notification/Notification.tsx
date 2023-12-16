import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './Notification.module.scss';

interface NotificationProps {
  title: string;
  amount: number;
}

const Notification = ({ title, amount }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  // const [state, setState] = useState(styles.enter);
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('Entered');

  //     setState(styles.enter_active);
  //   }, 1000);
  // }, []);

  return (
    isVisible && (
      // styles[state]
      <div className={classNames(styles.card)}>
        <div>Добавлено:</div>
        <div>
          {title}, {amount}&nbsp;т
        </div>
      </div>
    )
  );
};

export default Notification;
