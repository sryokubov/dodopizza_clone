import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Button, Notification } from '..';

import { SECTION_NAVIGATION_LINKS } from '../../constants';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsSidebarVisible }: NavbarProps) => {
  const navRef = useRef<HTMLElement | undefined>();
  const [isNavLogHidden, setIsNavLogHidden] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (navRef.current!.getBoundingClientRect().y === 0) {
        setIsNavLogHidden(false);
      } else {
        setIsNavLogHidden(true);
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={classNames(styles.nav, {
        [styles['nav_on-scroll']]: !isNavLogHidden,
      })}
    >
      <div className='container'>
        <div className={styles.nav__content}>
          <div className={styles.nav__logo}>
            <a href='#top'>
              <img src='/icons/dodo-square-logo.png' alt='' />
            </a>
          </div>
          <ul className={styles.nav__list}>
            {SECTION_NAVIGATION_LINKS.map(({ link, title }) => (
              <li className={styles.nav__item} key={link}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.nav__btn}>
            <Button
              type='primary-btn'
              size='medium-btn'
              onClick={() => {
                setIsSidebarVisible(true);
              }}
            >
              Корзина
            </Button>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '0px', top: '76px' }}>
          <Notification
            title='Слоеные палочки с ананасами и брусникой'
            amount={8}
          />
          <Notification title='Пепперони фреш' amount={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
