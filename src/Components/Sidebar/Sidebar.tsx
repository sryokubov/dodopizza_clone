import { useContext, useEffect } from 'react';
import classNames from 'classnames';

import { SidebarContext } from '../../context';
import { isScrollDisabled } from '../../utilities';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  children: JSX.Element | JSX.Element[];
}

const Sidebar = (props: SidebarProps) => {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SidebarContext);

  useEffect(() => {
    isScrollDisabled(isSidebarVisible);
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
