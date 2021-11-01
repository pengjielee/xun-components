// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-notice-bar';

interface IProps {
  icon?: React.ReactNode;
  type?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark';
  children?: React.ReactNode;
  className?: string;
}

const NoticeBar: FC<IProps> = (props) => {
  const { icon, type = 'default', className, children } = props;

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__${type}`,
    className,
  );

  return (
    <div className={finalClassName}>
      <span className={`${classPrefix}__icon`}></span>
      <span className={`${classPrefix}__content`}>{children}</span>
    </div>
  );
};

export default NoticeBar;
