import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { Search } from 'xun-icons';
import './style.scss';

const classPrefix = 'xun-search-bar';

interface IProps {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  onSubmit?: (val: string) => void;
  onChange?: (val: string) => void;
  onCancel?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const SearchBar: FC<IProps> = (props) => {
  const {
    maxLength,
    placeholder = '搜索',
    disabled,
    showCancel = true,
    cancelText = '取消',
    className,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const searchInputId = `${classPrefix}-input-${Date.now()}`;

  const [value, setValue] = useState(props.value || props.defaultValue);

  return (
    <div className={finalClassName}>
      <form
        action="/"
        method="get"
        className={`${classPrefix}__form`}
        onSubmit={(e) => {
          props.onSubmit?.(value);
        }}
      >
        <label htmlFor={searchInputId}>
          <i>
            <Search size="20" />
          </i>
        </label>
        <input
          value={value}
          type="text"
          id={searchInputId}
          placeholder={placeholder}
          className={`${classPrefix}__input`}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={(e) => {
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            props.onBlur?.(e);
          }}
        />
      </form>

      {showCancel && <a className={`${classPrefix}__cancel`}>{cancelText}</a>}
    </div>
  );
};

export default SearchBar;
