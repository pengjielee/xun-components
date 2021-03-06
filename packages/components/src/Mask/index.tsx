// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './style.scss';

const classPrefix = `xun-mask`;

interface IProps {
  visible?: boolean;
  className?: string;
  zIndex?: number;
  opacity?: number;
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  position?: string;
}

const Mask: React.FC<IProps> = (props) => {
  let {
    visible = true,
    className = '',
    theme = 'dark',
    children,
    opacity = 8,
    zIndex = 1000,
    position = '',
    onClick,
  } = props;

  opacity = opacity > 10 ? 10 : opacity < 1 ? 1 : opacity;

  opacity = opacity / 10;

  const finalClassName = classnames(`${classPrefix}`, {
    [`${className}`]: true,
  });

  const handleClick = (e: React.MouseEvent) => {
    onClick && onClick(e);
  };

  const Element = visible ? (
    <div
      className={finalClassName}
      style={{
        zIndex: zIndex,
        opacity: opacity,
        backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
      }}
      onClick={handleClick}
    >
      {children}
    </div>
  ) : null;

  return position === 'body'
    ? ReactDOM.createPortal(Element, document.body)
    : Element;
};

export default Mask;
