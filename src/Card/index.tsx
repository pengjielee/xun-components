import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-card';

interface IProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return <div className={finalClassName}>{children}</div>;
};

export default Card;
