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

const LoginModal = () => {
  const onClickHandler = () => {
    setModalState('login');
    setLoginModalVisible(false);
  };
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
      // Предлагаю написать функцию в utilities isScrollBlocked(true/false) и вызвать здесь
      document.body.style.paddingRight = '17px';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    }
  }, [isLoginModalVisible]);

  const Login = () => {
    return (
      <>
        <p className={styles.modal__text}>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
        </p>
        <div className={styles.modal__phone_num_container}>
          <p className={styles.modal__selector_title}>Страна</p>
          <p className={styles.modal__selector_title}>Номер телефона</p>
        </div>
        <PhoneInput
          inputRef={phoneInputRef}
          placeholder='+998 99-999-99-99'
          defaultCountry='uz'
          value={phone}
          autoFocus={true}
          className={styles.modal__phone_num_container}
          inputClassName={styles.modal__phone_input}
          countrySelectorStyleProps={{
            buttonContentWrapperClassName: styles.modal__country_selector_box,
            buttonClassName: styles.modal__country_selector,
            flagClassName: styles.modal__flag_icon,
            dropdownArrowClassName: styles.modal__flag_arrow,
            dropdownStyleProps: {
              className: styles.modal__dropdown_container,
              listItemClassName: styles.modal__dropdown_list_item,
              listItemFlagClassName: styles.modal__dropdown_flag,
              listItemCountryNameClassName: styles.modal__dropdown_country_name,
              listItemDialCodeClassName: styles.modal__dropdown_dial_code,
            },
          }}
          onChange={(value) => {
            setPhone(value);
          }}
        />

        <div className={styles.modal__btn}>
          <Button
            type='primary-btn'
            size='big-btn'
            disabled={!isValid}
            onClick={() => {
              setModalState('code');
            }}
          >
            Выслать код
          </Button>
        </div>
      </>
    );
  };

  const CodeInput = () => {
    return (
      <>
        <p className={styles.modal__text}>Код отправили сообщением на</p>
        <p className={styles.modal__phone_num_text}>
          {phoneInputRef.current!.value}
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
          <Button type='primary-btn' size='big-btn'>
            Получить новый код
          </Button>
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
