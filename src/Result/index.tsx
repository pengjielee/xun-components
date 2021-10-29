import React, { FC } from 'react';
import classnames from 'classnames';
import { Success, Error, Info, Warning } from 'xun-icons';
import './style.scss';

const classPrefix = 'xun-result';

interface IProps {
  status?: 'success' | 'error' | 'info' | 'warning';
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const icons = {
  success: <Success size="60" />,
  error: <Error size="60" />,
  info: <Info size="60" />,
  warning: <Warning size="60" />,
};

const colors = {
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-danger)',
  info: 'var(--color-info)',
};

const Result: FC<IProps> = (props) => {
  const { status = 'info', title, description, icon, className } = props;

  const finalClassName = classnames(classPrefix, className);

  const iconRender = icon || icons[status];

  const titleRender = title && (
    <div className={`${classPrefix}__title`}>{title}</div>
  );

  const descRender = description && (
    <div className={`${classPrefix}__description`}>{description}</div>
  );

  const style = {
    '--color': colors[status],
  };

  return (
    <div className={finalClassName} style={style}>
      <div className={`${classPrefix}__icon`}>{iconRender}</div>
      {titleRender}
      {descRender}
    </div>
  );
};

export default Result;
