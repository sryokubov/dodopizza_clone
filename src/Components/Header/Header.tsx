import { useContext } from 'react';

import { Button, Rating } from '..';
import { AuthContext, LoginModalContext } from '../../context';
import { HEADER_LINKS } from '../../constants';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className={styles.header__nav}>
      <div className='container'>
        <ul className={styles['header__nav-list']}>
          {HEADER_LINKS.map(({ title, link }, index) => {
            return (
              <li className={styles['header__nav-item']} key={index}>
                <Link to={link} className={styles['header__nav-link']}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const Header = () => {
  const { setLoginModalVisible } = useContext(LoginModalContext);
  const { isLoggedIn } = useContext(AuthContext);
  const rating = 4.66;
  return (
    <header>
      <HeaderNav />
      <div className='container'>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <Link to='/'>
              <img src='/icons/dodo-logo.svg' alt='' />
            </Link>
          </div>
          <div className={styles.header__about}>
            <p className={styles['header__about-text']}>
              Доставка пиццы{' '}
              <Link className={styles['header__about-link']} to='#'>
                Ташкент
              </Link>
            </p>
            <div className={styles.header__rating}>
              <Rating deliveryTime={35} rating={rating} />
            </div>
          </div>
          <div className={styles.header__contacts}>
            <p className={styles['header__phone-number']}>
              <Link to='tel:1168'>1168</Link>
            </p>
            <div className={styles['header__phone-text']}>
              Звонок бесплатный
            </div>
          </div>
          <div className={styles.header__coin}>
            <Link className={styles.coin__link} to='/loyaltyprogram'>
              <div className={styles['coin__icon-box']}>
                <img
                  className={styles.coin__icon}
                  src='/icons/coin.svg'
                  alt=''
                />
              </div>
              <p className={styles.coin__text}>Додокоины</p>
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  className={styles.coin__link}
                  to='/profile#client-bonuses'
                >
                  <div className={styles.coin__icon}>
                    <img src='/icons/promotions-icon.svg' alt='' />
                  </div>
                  <p className={styles.coin__text}>Мои акции</p>
                </Link>

                <Link className={styles.coin__link} to='/profile'>
                  <div className={styles.coin__icon}>
                    <img src='/icons/profile.svg' alt='' />
                  </div>
                  <p className={styles.coin__text}>Кабинет</p>
                </Link>
              </>
            )}
          </div>
          {!isLoggedIn && (
            <div className={styles.header__btn}>
              <Button
                onClick={() => {
                  setLoginModalVisible(true);
                }}
                type='small-btn'
                size='tertiary-btn'
              >
                Войти
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
