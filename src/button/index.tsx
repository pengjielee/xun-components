import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-button';

interface IProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'normal' | 'large' | 'small';
  round?: number | boolean;
  block?: boolean;
  disabled?: boolean;
  style?: object;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<IProps> = (props) => {
  const {
    type = 'default',
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

  const finalStyle = Object.assign(
    {},
    {
      borderRadius: borderRadius,
    },
    { ...style },
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
