// @ts-nocheck
import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { Close } from 'xun-icons';
import './style.scss';

const classPrefix = 'xun-message';

interface IProps {
  type?: 'normal' | 'success' | 'fail' | 'info' | 'warn';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
  closable?: boolean;
}

const Message: FC<IProps> = (props) => {
  const [visible, setVisible] = useState(true);
  const {
    type = 'normal',
    icon,
    hasArrow = false,
    closable = false,
    className,
    children,
  } = props;

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__${type}`,
    className,
    {
      [`${classPrefix}__link`]: !!hasArrow,
    },
  );

  const handleClose = () => {
    setVisible(false);
  };

  const iconRender = icon && (
    <div className={`${classPrefix}__icon`}>{icon}</div>
  );

  const contentRender = children && (
    <div className={`${classPrefix}__content`}>{children}</div>
  );

  const arrowRender = hasArrow && <div className={`${classPrefix}__arrow`} />;

  const closeRender = !hasArrow && closable && (
    <div className={`${classPrefix}__close`} onClick={handleClose}>
      <Close />
    </div>
  );

  return (
    <>
      {visible ? (
        <div className={finalClassName}>
          <div className={`${classPrefix}__left`}>
            {iconRender}
            {contentRender}
          </div>
          <div className={`${classPrefix}__right`}>
            {arrowRender}
            {closeRender}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Message;
