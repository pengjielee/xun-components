import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';
import SuccessIcon from './icon-success.svg';
import ErrorIcon from './icon-error.svg';
import InfoIcon from './icon-info.svg';
import WarnIcon from './icon-warn.svg';

const classPrefix = 'xun-result';

interface IProps {
  status?: 'success' | 'error' | 'info' | 'warn';
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const icons = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warn: WarnIcon,
};

const Result: FC<IProps> = (props) => {
  const { status = 'info', title, description, icon, className } = props;

  const finalClassName = classnames(classPrefix, className);

  const iconRender = icon || <img src={icons[status]} alt="icon" />;

  const titleRender = title && (
    <div className={`${classPrefix}__title`}>{title}</div>
  );

  const descRender = description && (
    <div className={`${classPrefix}__description`}>{description}</div>
  );

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__icon`}>{iconRender}</div>
      {titleRender}
      {descRender}
    </div>
  );
};

export default Result;
