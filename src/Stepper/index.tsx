import React, { FC, useState } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-stepper';

interface IProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

const Stepper: FC<IProps> = (props) => {
  const { disabled = false, step = 1, min, max, value, className } = props;
  const [number, setNumber] = useState(value);

  const handleAdd = () => {
    const value = number + step;
    if (value < max) {
      setNumber(value);
    } else {
      setNumber(max);
    }
  };

  const handleMinus = () => {
    const value = number - step;
    if (value > min) {
      setNumber(value);
    } else {
      setNumber(min);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value > min && value < max) {
      setNumber(value);
    }
  };

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <button className={classnames(`${classPrefix}__add`)} onClick={handleAdd}>
        +
      </button>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        defaultValue={number}
        value={number}
        onChange={handleChange}
        className={classnames(`${classPrefix}__input`)}
      />
      <button
        className={classnames(`${classPrefix}__minus`)}
        onClick={handleMinus}
      >
        -
      </button>
    </div>
  );
};

export default Stepper;
