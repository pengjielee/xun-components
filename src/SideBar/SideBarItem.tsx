import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-side-bar__item';

interface IProps {
  visible?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const SideBar: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <span className={`${classPrefix}__title`}>{children}</span>
    </div>
  );
};

export default SideBar;
