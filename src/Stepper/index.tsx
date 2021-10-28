import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { bound } from '../assets/utils/';
import Button from '../Button';
import './style.scss';

const classPrefix = 'xun-stepper';

interface IProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  digits?: number;
  disabled?: boolean;
  disabledInput?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

const compareValue = (value, max, min) => {
  if (typeof max === 'number') {
    value = value > max ? max : value;
  }
  if (typeof min === 'number') {
    value = value < min ? min : value;
  }
  return value;
};

const Stepper: FC<IProps> = (props) => {
  const {
    disabled = false,
    disabledInput = false,
    step = 1,
    min,
    max,
    value,
    className,
    onChange,
  } = props;

  const getInitValue = () => {
    const defaultValue = min === undefined ? 0 : min;

    let tempValue =
      props.defaultValue === undefined ? defaultValue : props.defaultValue;
    tempValue = value === undefined ? tempValue : value;

    return compareValue(tempValue, max, min);
  };

  const [number, setNumber] = useState(getInitValue());

  const setValueWithCheck = (value) => {
    if (isNaN(value)) {
      return;
    }
    let target = bound(value, min, max);
    setNumber(target);
    if (typeof onChange === 'function') {
      onChange(target);
    }
  };

  const handlePlus = () => {
    setValueWithCheck(number + step);
  };

  const handleMinus = () => {
    setValueWithCheck(number - step);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValueWithCheck(value);
  };

  const finalClassName = classnames(
    classPrefix,
    { [`${classPrefix}__disabled`]: disabled },
    className,
  );

  return (
    <div className={finalClassName}>
      <Button
        size="small"
        disabled={disabled}
        className={classnames(`${classPrefix}__plus`)}
        onClick={handlePlus}
      >
        +
      </Button>

      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={number}
        onChange={handleChange}
        disabled={disabled || disabledInput}
        className={classnames(`${classPrefix}__input`)}
      />
      <Button
        size="small"
        className={classnames(`${classPrefix}__minus`)}
        onClick={handleMinus}
        disabled={disabled}
      >
        -
      </Button>
    </div>
  );
};

export default Stepper;
