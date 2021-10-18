import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';

import './style.scss';

const classPrefix = `xun-text-area`;

interface IProps {
  text?: string;
  rows?: number;
}

const TextArea: React.FC<IProps> = (props) => {
  const textAreaRef = useRef(null);

  const {
    id = Date.now(),
    className,
    rows,
    maxLength,
    disabled,
    readOnly,
    focused,
    value,
    ...rest
  } = props;

  useEffect(() => {
    if (focused) {
      textAreaRef && textAreaRef.current.focus();
    }
  }, [focused]);

  const handleChange = (e) => {
    const { onChange } = props;
    const { value } = e.target;

    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <div className={classnames(`${classPrefix}-wrapper`, className)}>
      {readOnly ? (
        <div className={`${classPrefix}__content`} ref={textAreaRef}>
          {value}
        </div>
      ) : (
        <textarea
          ref={textAreaRef}
          className={classPrefix}
          rows={rows}
          value={'value' in props ? value : undefined}
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
