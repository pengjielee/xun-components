import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';
import BackArrow from './back.svg';

const classPrefix = 'xun-nav-bar';

interface IProps {
  backText?: string;
  backArrow?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onBack?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const NavBar: FC<IProps> = (props) => {
  const {
    backText = '返回',
    backArrow = true,
    className,
    left,
    right,
    children,
  } = props;

  const finalClassName = classnames(classPrefix, 'hairline--bottom', className);

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__left`}>
        {backArrow && (
          <img src={BackArrow} className={`${classPrefix}__back-arrow`} />
        )}
        {backText && (
          <span className={`${classPrefix}__back-text`}>{backText}</span>
        )}
        {left}
      </div>
      <div className={`${classPrefix}__title`}>{children}</div>
      <div className={`${classPrefix}__right`}>{right}</div>
    </div>
  );
};

export default NavBar;
