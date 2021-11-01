// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-grid__item';

interface IProps {
  span?: number;
  children?: React.ReactNode;
  className?: string;
}

const GridItem: FC<IProps> = (props) => {
  const { className, children, span = 1 } = props;

  const finalClassName = classnames(classPrefix, className);

  const style = {
    '--item-span': span,
  };

  return (
    <div className={finalClassName} style={style}>
      {children}
    </div>
  );
};

export default GridItem;
