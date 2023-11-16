import { useContext } from 'react';

import { Button } from '..';
import { AuthContext, LoginModalContext } from '../../context';
import { HEADER_LINKS } from '../../constants';

import styles from './Header.module.scss';

const HeaderNav = () => {
  return (
    <nav className={styles.header__nav}>
      <div className='container'>
        <ul className={styles['header__nav-list']}>
          {HEADER_LINKS.map(({ title, link }, index) => (
            <li className={styles['header__nav-item']} key={index}>
              <a href={link} className={styles['header__nav-link']}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Stars = ({ rating }: { rating: number }) => {
  const isHalfStarNeeded = (): boolean => {
    const floatingPart = rating % 1;
    return floatingPart >= 0.5;
  };

  return (
    <ul className={styles['stars-list']}>
      {Array(Math.trunc(rating))
        .fill('')
        .map(() => {
          return (
            <li className={styles['stars-list__item']}>
              <img src='/icons/star-fill.svg' alt='' />
            </li>
          );
        })}

      {isHalfStarNeeded() && (
        <li className={styles['stars-list__item']}>
          <img src='/icons/star-half-fill.svg' alt='' />
        </li>
      )}
    </ul>
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
            <a href='/'>
              <img src='/icons/dodo-logo.svg' alt='' />
            </a>
          </div>
          <div className={styles.header__about}>
            <p className={styles['header__about-text']}>
              Доставка пиццы{' '}
              <a className={styles['header__about-link']} href='#'>
                Ташкент
              </a>
            </p>
            <div className={styles['header__about-rate-text']}>
              43 мин
              <div className={styles.dot}>
                <div className={styles.header__info}>
                  <i className={styles.triangle}>
                    <img src='icons/triangle.svg' alt='' />
                  </i>
                  <div className={styles.info__left}>
                    <span className={styles['info__big-text']}>43 минуты</span>
                    <span className={styles['info__info__medium-text']}>
                      Среднее время доставки
                    </span>
                    <span className={styles.info__text}>
                      Если не&nbsp;успеем за&nbsp;60&nbsp;минут,
                      вы&nbsp;получите сертификат на&nbsp;большую пиццу
                    </span>
                  </div>
                  <div className={styles.info__right}>
                    <div className={styles['info__big-text']}>
                      <span>{rating}</span>
                      <Stars rating={rating} />
                    </div>
                    <span className={styles['info__info__medium-text']}>
                      660 оценок
                    </span>
                    <span className={styles.info__text}>
                      Оценить заказ можно в мобильном приложении
                    </span>
                  </div>
                  <span className={styles['info__text info__text-bottom']}>
                    Данные за последние 7 дней в вашем городе
                  </span>
                </div>
              </div>
              4.66
              <div className={styles.star}>
                <img src='/icons/header-star.svg' alt='' />
              </div>
            </div>
          </div>
          <div className={styles.header__contacts}>
            <p className={styles['header__phone-number']}>
              <a href='tel:1168'>1168</a>
            </p>
            <div className={styles['header__phone-text']}>
              Звонок бесплатный
            </div>
          </div>
          <div className={styles.header__coin}>
            <a className={styles.coin__link} href='#'>
              <div className={styles.coin__icon}>
                <img src='/icons/coin.svg' alt='' />
              </div>
              <p className={styles.coin__text}>Додокоины</p>
            </a>
            {isLoggedIn && (
              <>
                <a className={styles.coin__link} href='#'>
                  <div className={styles.coin__icon}>
                    <img src='/icons/promotions-icon.svg' alt='' />
                  </div>
                  <p className={styles.coin__text}>Мои акции</p>
                </a>

                <a className={styles.coin__link} href={'/profile'}>
                  <div className={styles.coin__icon}>
                    <img src='/icons/profile.svg' alt='' />
                  </div>
                  <p className={styles.coin__text}>Кабинет</p>
                </a>
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
                text='Войти'
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
