// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import { Back } from 'xun-icons';
import './style.scss';

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
          <div className={`${classPrefix}__back-arrow`}>
            <Back />
          </div>
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
