import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput, PhoneInputProps } from 'react-international-phone';

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

  const phoneInputRef =
    useRef<
      React.ForwardRefExoticComponent<
        PhoneInputProps & React.RefAttributes<PhoneInputRefType>
      >
    >(null);
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
                onChange={() => {
                  setPhone(phoneInputRef.current.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className={styles.modal__btn}>
          <Button
            text='Выслать код'
            type='primary-btn'
            size='big-btn'
            disabled={!isValid}
            onClick={() => {
              setModalState('code');
            }}
          />
        </div>
      </>
    );
  };

  const CodeInput = () => {
    return (
      <>
        <p className={styles.modal__text}>Код отправили сообщением на</p>
        <p className={styles.modal__phone_num_text}>
          {phone}
          <button
            className={styles.modal__change_phone_num_text}
            onClick={() => setModalState('login')}
          >
            Изменить
          </button>
        </p>
        {/* Для дефолтного стиля надо удалить styles.error на следующей строке */}
        <div className={classNames(styles.modal__code_inputs, styles.error)}>
          <ReactCodeInput name='code_input' inputMode='tel' />
          <p className={styles.modal__error_text}>Неверный код</p>
        </div>
        <div className={styles.modal__btn}>
          <Button type='primary-btn' size='big-btn' text='Получить новый код' />
        </div>
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
          <img src='/icons/cross-icon.svg' alt='' />
        </button>
        <h3 className={styles.modal__title}>Вход на сайт</h3>
        {modalState === 'login' ? <Login /> : <CodeInput />}
      </div>
    </div>
  );
};

export default LoginModal;
