// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-tag';

interface IProps {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | string;
  children?: React.ReactNode;
  className?: string;
  round?: boolean;
}

const colors = {
  default: 'var(--color-default)',
  primary: 'var(--color-primary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',
  info: 'var(--color-info)',
};

const Tag: FC<IProps> = (props) => {
  const {
    color = 'default',
    round,
    fill = 'solid',
    className,
    children,
  } = props;

  const finalClassName = classnames(
    classPrefix,
    {
      [`${classPrefix}__round`]: round,
      [`${classPrefix}__outline`]: fill === 'outline',
    },
    className,
  );

  const style = {
    '--color': colors[color] || color,
  };

  return (
    <span style={style} className={finalClassName}>
      {children}
    </span>
  );
};

export default Tag;
