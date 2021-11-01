// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import Radio from './Radio';
import { RadioGroupContext } from './Context';
import './style.scss';

const classPrefix = 'xun-radio-group';

interface IProps {
  value?: string | number;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

const RadioGroup: FC<IProps> = (props) => {
  const { value, className, children, disabled = false } = props;

  const finalClassName = classnames(classPrefix, className);
  return (
    <div className={finalClassName}>
      <RadioGroupContext.Provider
        value={{
          value: value === null ? [] : [value],
          check: (v) => {
            props.onChange?.(v);
          },
          uncheck: () => {},
          disabled: disabled,
        }}
      >
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

export default RadioGroup;
