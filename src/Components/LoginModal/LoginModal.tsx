import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';

import { Button } from '..';
import { LoginModalContext } from '../../context';

import 'react-international-phone/style.css';
import styles from './LoginModal.module.scss';
import ReactCodeInput from 'react-code-input';
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 85.333 512 341.333'
                className={styles.modal__flag_icon}
              >
                <path fill='#D80027' d='M0 85.337h512v341.326H0z'></path>
                <path fill='#6DA544' d='M0 322.783h512v103.88H0z'></path>
                <path fill='#338AF3' d='M0 85.337h512v104.515H0z'></path>
                <path fill='#FFF' d='M0 210.877h512v89.656H0z'></path>
                <path fill='#338AF3' d='M0 85.337h512v104.515H0z'></path>
                <path
                  d='M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 00-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177l2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0l2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0l2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z'
                  fill='#FFF'
                ></path>
              </svg>
              <svg
                width='18'
                height='9'
                viewBox='0 0 18 9'
                xmlns='http://www.w3.org/2000/svg'
                className='arrow-icon'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.99 6.728C7.556 5.5 4.088 2.509 1.678.268A.995.995 0 00.265.323a1.012 1.012 0 00.057 1.423c2.757 2.565 6.86 6.079 7.822 6.9.158.135.325.25.526.307.22.063.454.061.674-.005.197-.06.361-.175.514-.31 2.597-2.295 5.2-4.583 7.8-6.874a1.012 1.012 0 00.095-1.421.995.995 0 00-1.412-.095L8.99 6.728z'
                ></path>
              </svg>
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
