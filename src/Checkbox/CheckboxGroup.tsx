// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import Radio from './Radio';
import { CheckboxGroupContext } from './Context';
import './style.scss';

type CheckboxValue = string | number;

const classPrefix = 'xun-checkbox-group';

interface IProps {
  value?: CheckboxValue[];
  disabled?: boolean;
  onChange?: (val: CheckboxValue[]) => void;
  children?: React.ReactNode;
  className?: string;
}

const CheckboxGroup: FC<IProps> = (props) => {
  const { value, className, children, disabled = false } = props;

  const finalClassName = classnames(classPrefix, className);
  return (
    <div className={finalClassName}>
      <CheckboxGroupContext.Provider
        value={{
          value: value!,
          check: (v) => {
            props.onChange?.([...value, v]);
          },
          uncheck: (v) => {
            const values = value.filter((item) => item !== v);
            props.onChange?.(values);
          },
          disabled: disabled,
        }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
};

export default CheckboxGroup;
