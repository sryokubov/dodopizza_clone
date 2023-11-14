import { useContext } from 'react';
import { Button } from '../';
import { LoginModalContext } from '../../context';
import './Header.css';

const HeaderNav = () => {
  return (
    <nav className='header__nav'>
      <div className='container'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Прямой эфир
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Франшиза
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              О нас
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Header = () => {
  const { isLoginModalVisible, setLoginModalVisible } =
    useContext(LoginModalContext);
  return (
    <header>
      <HeaderNav />
      <div className='container'>
        <div className='header__content'>
          <div className='header__logo'>
            <a href='#'>
              <img src='/icons/dodo-logo.svg' alt='' />
            </a>
          </div>
          <div className='header__about'>
            <p className='header__about-text'>
              Доставка пиццы{' '}
              <a className='header__about-link' href='#'>
                Ташкент
              </a>
            </p>
            <p className='header__about-rate-text'>
              43 мин
              <div className='dot'>
                <div className='header__info'>
                  <i className='triangle'>
                    <img src='icons/triangle.svg' alt='' />
                  </i>
                  <div className='info__left'>
                    <span className='info__big-text'>43 минуты</span>
                    <span className='info__info__medium-text'>
                      Среднее время доставки
                    </span>
                    <span className='info__text'>
                      Если не&nbsp;успеем за&nbsp;60&nbsp;минут,
                      вы&nbsp;получите сертификат на&nbsp;большую пиццу
                    </span>
                  </div>
                  <div className='info__right'>
                    <span className='info__big-text'>
                      4.66
                      <ul className='stars-list'>
                        <li className='stars-list__item'>
                          <img src='/icons/star-fill.svg' alt='' />
                        </li>
                        <li className='stars-list__item'>
                          <img src='/icons/star-fill.svg' alt='' />
                        </li>
                        <li className='stars-list__item'>
                          <img src='/icons/star-fill.svg' alt='' />
                        </li>
                        <li className='stars-list__item'>
                          <img src='/icons/star-fill.svg' alt='' />
                        </li>
                        <li className='stars-list__item'>
                          <img src='/icons/star-half-fill.svg' alt='' />
                        </li>
                      </ul>
                    </span>
                    <span className='info__info__medium-text'>660 оценок</span>
                    <span className='info__text'>
                      Оценить заказ можно в мобильном приложении
                    </span>
                  </div>
                  <span className='info__text info__text-bottom'>
                    Данные за последние 7 дней в вашем городе
                  </span>
                </div>
              </div>
              4.66
              <div className='star'>
                <img src='/icons/header-star.svg' alt='' />
              </div>
            </p>
          </div>
          <div className='header__contacts'>
            <p className='header__phone-number'>
              <a href='tel:1168'>1168</a>
            </p>
            <div className='header__phone-text'>Звонок бесплатный</div>
          </div>
          <div className='header__coin'>
            <a className='coin__link' href='#'>
              <div className='coin__icon'>
                <img src='/icons/coin.svg' alt='' />
              </div>
              <p className='coin__text'>Додокоины</p>
            </a>

            <a className='coin__link' href='#'>
              <div className='coin__icon'>
                <img src='/icons/promotions-icon.svg' alt='' />
              </div>
              <p className='coin__text'>Мои акции</p>
            </a>

            <a className='coin__link' href='#'>
              <div className='coin__icon'>
                <img src='/icons/profile.svg' alt='' />
              </div>
              <p className='coin__text'>Кабинет</p>
            </a>
          </div>
          <div className='header__btn'>
            <Button
              onClick={() => {
                setLoginModalVisible(true);
              }}
              type='small-btn'
              size='tertiary-btn'
              text='Войти'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
