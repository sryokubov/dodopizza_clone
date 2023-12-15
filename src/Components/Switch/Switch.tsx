import { Fragment, useState } from 'react';

import styles from './Switch.module.scss';

interface Option {
  title: string;
  value: string;
  id: number;
}

interface SwitchProps {
  options: Option[];
  defaultValue: string;
  onClick: (e: unknown) => void;
  value?: string;
}

const Switch = ({ options, defaultValue, onClick }: SwitchProps) => {
  const [selectedOption, setSelectedOption] = useState(
    getOptionId(defaultValue)
  );

  function getOptionId(value: string) {
    return options.filter((option) => option.value === value)[0].id;
  }

  const onSwitchOptionClick = (e: React.SyntheticEvent<HTMLLabelElement>) => {
    if (!(e.target instanceof HTMLLabelElement)) {
      return;
    }

    if (e.target.dataset.order) {
      setSelectedOption(Number(e.target.dataset.order));
      onClick(e);
    }
  };

  return (
    <div className={styles.switch}>
      <div
        className={styles.switch__slider}
        style={{
          width: 100 / options.length + '%',
          transform: `translate(${selectedOption * 100}%)`,
        }}
      ></div>
      {options.map(({ id, title, value }) => (
        <Fragment key={id}>
          <input
            className={styles.switch__option_input}
            type='radio'
            name='switch'
            id={id.toString()}
            value={value}
          />
          <label
            htmlFor={id.toString()}
            data-order={id.toString()}
            onClick={onSwitchOptionClick}
          >
            {title}
          </label>
        </Fragment>
      ))}
    </div>
  );
};

export default Switch;
