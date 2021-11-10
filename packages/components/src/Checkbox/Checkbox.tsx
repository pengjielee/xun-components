// @ts-nocheck
import React, { FC, useState, useContext } from 'react';
import { CheckboxGroupContext } from './Context';
import classnames from 'classnames';
import './style.scss';
import { CheckedSquare, UncheckedSquare } from 'xun-icons';

const classPrefix = 'xun-checkbox';

interface IProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  value?: string | number;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const getChecked = (props) => {
  const { checked, defaultChecked } = props;

  if (checked) {
    return checked;
  }
  if (defaultChecked) {
    return defaultChecked;
  }
  return false;
};

const Checkbox: FC<IProps> = (props) => {
  const groupContext = useContext(CheckboxGroupContext);

  const { id, value, className, text, children } = props;

  let disabled = props.disabled || false;
  let [checked, setChecked] = useState(getChecked(props));

  const finalClassName = classnames(classPrefix, className);

  console.log(groupContext);

  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value);
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }
      props.onChange?.(checked);
    };
    disabled = disabled || groupContext.disabled;
  }

  return (
    <label className={finalClassName} htmlFor={id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          const checked = e.target.checked;
          setChecked(checked);
        }}
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        disabled={disabled}
        id={id}
      />
      {checked ? (
        <CheckedSquare fill="red" size="24" />
      ) : (
        <UncheckedSquare fill="#ddd" size="24" />
      )}
      {children && <div className={`${classPrefix}__content`}>{children}</div>}
    </label>
  );
};

export default Checkbox;
