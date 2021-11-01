// @ts-nocheck
import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-switch';

interface IProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  checkedText?: string;
  uncheckedText?: string;
  onChange?: (checked: boolean) => void;
}

const Switch: FC<IProps> = (props) => {
  const {
    checked = false,
    disabled = false,
    defaultChecked = false,
    className,
    onChange,
    checkedColor = '#4dd865',
    uncheckedColor = '#a7aaa6',
    checkedText,
    uncheckedText,
  } = props;

  const [isChecked, setIsChecked] = useState(checked || defaultChecked);

  const finalClassName = classnames(
    classPrefix,
    { [`${classPrefix}__disabled`]: disabled },
    className,
  );

  const handleChange = (e) => {
    const value = e.target.checked;
    setIsChecked(value);
    typeof onChange === 'function' && onChange(value);
  };

  const style = {
    '--color-checked': checkedColor,
    '--color-unchecked': uncheckedColor,
  };

  return (
    <div className={finalClassName} style={style}>
      <label className={`${classPrefix}__label`}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className={`${classPrefix}__checkbox`}
        />
      </label>
      <div
        className={classnames(`${classPrefix}__container`, {
          [`${classPrefix}__container-checked`]: isChecked,
        })}
      >
        <div className={`${classPrefix}__container-inner`}>
          {isChecked ? props.checkedText : props.uncheckedText}
        </div>
      </div>
    </div>
  );
};

export default Switch;
