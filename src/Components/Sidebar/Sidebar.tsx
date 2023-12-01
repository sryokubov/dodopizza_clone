import { useContext, useEffect } from 'react';
import classNames from 'classnames';

import styles from './Sidebar.module.scss';
import { SidebarContext } from '../../context';

interface SidebarProps {
  children: JSX.Element | JSX.Element[];
}

const Sidebar = (props: SidebarProps) => {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SidebarContext);
  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarVisible]);

  const onClickHandler = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.visible]: isSidebarVisible,
      })}
    >
      <div
        className={classNames(styles.sidebar__background)}
        onClick={onClickHandler}
      ></div>
      <div className={styles.sidebar__panel}>
        <div className={styles.sidebar__close_btn} onClick={onClickHandler}>
          <img src='/icons/cross-icon.svg' alt='' />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
