import React, { FC } from 'react';
import classnames from 'classnames';
import { getCssValue, getDarkColor } from '../assets/utils';
import './style.scss';

const classPrefix = 'xun-button';

interface IProps {
  type?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';
  color?: string;
  size?: 'normal' | 'large' | 'small';
  round?: number | boolean;
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const colors = {
  default: 'var(--color-default)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',
  info: 'var(--color-info)',
};

const Button: React.FC<IProps> = (props) => {
  const {
    type = 'default',
    color = '',
    size = 'normal',
    block = false,
    disabled = false,
    className = '',
    round = false,
    style = null,
    children,
  } = props;

  var finalClassName = classnames(`${classPrefix}`, {
    [`${classPrefix}__${type}`]: true,
    [`${classPrefix}__${size}`]: true,
    [`${classPrefix}__block`]: block,
    disabled: disabled,
    [`${className}`]: true,
  });

  let borderRadius = '0';
  if (typeof round === 'boolean' && round) {
    borderRadius = '5px';
  }

  if (typeof round === 'number') {
    borderRadius = `${round}px`;
  }

  const defaultColor =
    getCssValue(
      colors[type] && colors[type].replace('var(', '').replace(')', ''),
    ) || color;

  const hoverColor = getDarkColor(defaultColor);

  const finalStyle = Object.assign(
    {},
    {
      '--radius': borderRadius,
      '--color': colors[type] || color,
      '--color-hover': hoverColor,
    },
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick, disabled } = props;
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick(e);
  };

  return (
    <button className={finalClassName} style={finalStyle} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
