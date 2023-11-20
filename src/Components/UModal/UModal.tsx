import { useContext } from 'react';

import classNames from 'classnames';
import { UModalContext } from '../../context';

import styles from './UModal.module.scss';

interface UModalProps {
  width?: number;
  children: JSX.Element | string;
}

const UModal = (props: UModalProps) => {
  const width = (props.width || 345) + 'px';
  const { isUModalVisible, setIsUModalVisible } = useContext(UModalContext);

  const onClickHandler = () => {
    setIsUModalVisible(false);
  };
  return (
    <div
      className={classNames(styles.modal, {
        [styles.visible]: isUModalVisible,
      })}
    >
      <div onClick={onClickHandler} className={styles.modal__background}></div>
      <div className={styles.modal__window} style={{ width }}>
        <div className={styles.modal__close_btn} onClick={onClickHandler}>
          <img src='/icons/cross-icon.svg' alt='' />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default UModal;
