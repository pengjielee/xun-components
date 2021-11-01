// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-rate';

interface IProps {
  allowHalf?: boolean;
  disabled?: boolean;
  count?: number;
  className?: string;
  value?: number;
  onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Rate: FC<IProps> = (props) => {
  const {
    allowHalf = false,
    disabled = false,
    count = 5,
    value,
    className,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const step = allowHalf ? 0.5 : 1;
  const max = count;
  const width = count * 20 + 'px';

  const handleChange = (e) => {
    typeof props.onChange === 'function' && props.onChange(e.target.value);
  };

  return (
    <div className={finalClassName}>
      <input
        style={{ width: width }}
        type="range"
        name="star"
        min="0"
        max={max}
        step={step}
        defaultValue={value}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default Rate;
