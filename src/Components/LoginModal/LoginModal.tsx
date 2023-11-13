import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';

import { Button } from '..';
import { LoginModalContext } from '../../context';

import 'react-international-phone/style.css';
import styles from './LoginModal.module.scss';
// import ReactCodeInput from 'react-code-input';
// import { reactCodeInput } from 'react-code-input/styles/style.scss';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const LoginModal = () => {
  const onClickHandler = () => setLoginModalVisible(false);
  const { isLoginModalVisible, setLoginModalVisible } =
    useContext(LoginModalContext);

  const phoneInputRef = useRef<any>(null);
  const [phone, setPhone] = useState('');
  const isValid = isPhoneValid(phone);

  const [modalState, setModalState] = useState<'login' | 'code'>('login');

  useEffect(() => {
    if (isLoginModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoginModalVisible]);

  useEffect(() => {
    if (modalState === 'login') {
      phoneInputRef.current!.focus();
    }
  });

  const Login = () => {
    return (
      <>
        <p className={styles.modal__text}>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
        </p>
        <div className={styles.modal__select_phone_num}>
          <div className={styles.modal__selector_container}>
            <p className={styles.modal__selector_title}>Страна</p>
            <button className={styles.modal__country_selector}>
              <img className={styles.modal__flag_icon} />
              <img src='/icons/arrow_down.svg' alt='' />
            </button>
          </div>
          <div className={styles.modal__selector_container}>
            <label>
              <p className={styles.modal__selector_title}>Номер телефона</p>
              <PhoneInput
                className={styles.modal__phone_num}
                ref={phoneInputRef}
                placeholder='+998 99-999-99-99'
                defaultCountry='uz'
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </label>
          </div>
        </div>
        <Button
          text='Выслать код'
          type='primary-btn'
          size='big-btn'
          disabled={!isValid}
          onClick={() => {
            setModalState('code');
          }}
        />
      </>
    );
  };

  const CodeInput = () => {
    return (
      <>
        <p>Код отправили сообщением на</p>
        <p>{phone}</p>
        <button onClick={() => setModalState('login')}>Изменить</button>
      </>
    );
  };

  return (
    <div
      className={classNames(styles.modal, {
        [styles.modal_visible]: isLoginModalVisible,
      })}
    >
      <div onClick={onClickHandler} className={styles.modal__background}></div>
      <div className={styles.modal__window}>
        <button onClick={onClickHandler} className={styles.modal__close_btn}>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z'
              fill='white'
            ></path>
          </svg>
        </button>
        <h3 className={styles.modal__title}>Вход на сайт</h3>
        {modalState === 'login' ? <Login /> : <CodeInput />}
      </div>
    </div>
  );
};

export default LoginModal;
