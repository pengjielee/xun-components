// @ts-nocheck
import React, { FC, useRef } from 'react';
import classnames from 'classnames';
import { Add } from 'xun-icons';
import './style.scss';

const classPrefix = 'xun-file-picker';

interface IProps {
  multiple?: boolean;
  disabled?: boolean;
  accept?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: () => void;
  files?: any;
}

const FilePicker: FC<IProps> = (props) => {
  const fileRef = useRef(null);

  const {
    multiple = false,
    disabled = false,
    accept = '*.*',
    className,
    children,
    onChange,
    files = [],
  } = props;

  const finalClassName = classnames(classPrefix, className, {
    [`${classPrefix}__disabled`]: disabled,
  });

  const handleClick = () => {
    if (disabled) {
      return;
    }
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChange = (e) => {
    const files = e.target.files;
    const data = multiple ? files : files[0];
    typeof onChange === 'function' && onChange(data);
  };

  return (
    <div className={`${classPrefix}__wrapper`}>
      <div className={finalClassName} onClick={handleClick}>
        {children ? children : <Add />}
      </div>
      <input
        ref={fileRef}
        className={`${classPrefix}__input`}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FilePicker;
