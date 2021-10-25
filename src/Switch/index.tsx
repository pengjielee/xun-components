import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-switch';

interface IProps {
  checked?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Switch: FC<IProps> = (props) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const { checked = false, className, onChange } = props;

  const finalClassName = classnames(classPrefix, className);

  const handleChange = (e) => {
    const value = e.target.checked;
    setIsChecked(value);
    typeof onChange === 'function' && onChange(value);
  };

  return (
    <div className={finalClassName}>
      <label className={`${classPrefix}__label`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={`${classPrefix}__checkbox`}
        />
      </label>
      <div
        className={classnames(`${classPrefix}__container`, {
          [`${classPrefix}__container-checked`]: isChecked,
        })}
      ></div>
    </div>
  );
};

export default Switch;
