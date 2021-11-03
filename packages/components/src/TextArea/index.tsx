// @ts-nocheck
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import './style.scss';

const classPrefix = `xun-text-area`;

interface IProps {
  id?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  focused?: boolean;
  className?: string;
  onChange?: (value) => void;
  onBlur?: (value) => void;
  onFocus?: (value) => void;
}

const TextArea: React.FC<IProps> = (props) => {
  const textAreaRef = useRef(null);

  const {
    id = Date.now() + '',
    className,
    rows = 2,
    maxLength,
    disabled = false,
    readOnly = false,
    focused = false,
    value,
    placeholder = '',
  } = props;

  useEffect(() => {
    if (focused) {
      textAreaRef && textAreaRef.current.focus();
    }
  }, [focused]);

  const handleChange = (e) => {
    const { onChange } = props;
    const { value } = e.target;
    console.log(value);
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <div className={classnames(`${classPrefix}__wrapper`, className)}>
      {readOnly ? (
        <div className={`${classPrefix}__content`}>{value}</div>
      ) : (
        <textarea
          ref={textAreaRef}
          className={classPrefix}
          rows={rows}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          onChange={(e) => handleChange(e)}
          onFocus={(e) => {
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            props.onBlur?.(e);
          }}
          id={props.id}
        />
      )}
    </div>
  );
};

export default TextArea;
