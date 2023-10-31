import { useContext, useEffect } from "react";
import classNames from "classnames";

import styles from "./Sidebar.module.css";
import { SidebarContext } from "../../context";

// export interface SidebarProps {
//   isSidebarVisible: boolean;
//   setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Sidebar = () => {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SidebarContext);
  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarVisible]);

  const onClickHandler = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={classNames(styles.sidebar__background, {
          [styles.visible]: isSidebarVisible,
        })}
        onClick={onClickHandler}
      ></div>
      <div className={styles.sidebar__panel}>
        <div className={styles.sidebar__close_btn} onClick={onClickHandler}>
          <img src="/icons/cross-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;