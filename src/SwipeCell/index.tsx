import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-swipe-cell';

interface IProps {
  visible?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const SwipeCell: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <span className={`${classPrefix}__title`}>{children}</span>
    </div>
  );
};

export default SwipeCell;
