import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput, PhoneInputProps } from 'react-international-phone';
import ReactCodeInput from 'react-code-input';

import { Button } from '..';
import { LoginModalContext } from '../../context';

import 'react-international-phone/style.css';
import styles from './LoginModal.module.scss';
// import { reactCodeInput } from 'react-code-input/styles/style.scss';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const selectorContainerStyles = {
  display: 'flex',
  gap: '8px',
  width: '100%',
};

let inputStyles = {
  height: '56px',
  padding: '16px',
  width: '100%',
  border: '1px solid #000',
  borderRadius: '12px',
  font: "500 normal 16px/20px 'Dodo Rounded'",
  backgroundColor: 'rgba(243, 243, 247, 0.26)',
};

const focusedInputStyles = {
  height: '56px',
  padding: '16px',
  width: '100%',
  border: '1px solid #ff6900',
  borderRadius: '12px',
  font: "500 normal 16px/20px 'Dodo Rounded'",
  backgroundColor: 'rgba(243, 243, 247, 0.26)',
  outline: 'none',
};

const countrySelectorStyles = {
  buttonStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '0 20px 0 16px',
    height: '56px',
    borderRadius: '12px',
    border: '1px solid #e2e2e9',
    backgroundColor: '#fff',
  },
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

  const [stylesOnFocus, setStylesOnFocus] = useState(inputStyles);

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
          {/* <img src='/icons/arrow_down.svg' alt='' /> */}

          <p className={styles.modal__selector_title}>Страна</p>
          <p className={styles.modal__selector_title}>Номер телефона</p>
        </div>
        <PhoneInput
          ref={phoneInputRef}
          placeholder='+998 99-999-99-99'
          defaultCountry='uz'
          value={phone}
          charAfterDialCode='-'
          style={selectorContainerStyles}
          inputStyle={stylesOnFocus}
          countrySelectorStyleProps={countrySelectorStyles}
          onFocus={() => {
            setStylesOnFocus(focusedInputStyles);
          }}
          onChange={() => {
            setPhone(phoneInputRef.current.value);
          }}
        />

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
