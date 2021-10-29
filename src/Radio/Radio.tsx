import React, { FC, useState, useContext } from 'react';
import { RadioGroupContext } from './Context';
import classnames from 'classnames';
import { Checked, Unchecked } from 'xun-icons';
import './style.scss';

const classPrefix = 'xun-radio';

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

const Radio: FC<IProps> = (props) => {
  const groupContext = useContext(RadioGroupContext);

  const { id, value, className, text, children } = props;

  let disabled = props.disabled || false;
  let [checked, setChecked] = useState(getChecked(props));

  const finalClassName = classnames(classPrefix, className);

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
        type="radio"
        checked={checked}
        onChange={(e) => {
          const checked = e.target.checked;
          setChecked(checked);
          value ? props.onChange?.(value) : props.onChange?.(checked);
        }}
        onClick={(e) => {
          setChecked(!checked);
          value ? props.onChange?.(value) : props.onChange?.(!checked);
        }}
        disabled={disabled}
        id={id}
      />
      <div className={`${classPrefix}__icon`}>
        {checked ? <Checked /> : <Unchecked />}
      </div>
      {children && <div className={`${classPrefix}__content`}>{children}</div>}
    </label>
  );
};

export default Radio;
