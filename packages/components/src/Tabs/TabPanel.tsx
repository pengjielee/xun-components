// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-tabs__panel';

interface IProps {
  title?: string;
  selected?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Tabs: FC<IProps> = (props) => {
  const { selected, className, children } = props;

  const finalClassName = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: selected,
  });

  return <div className={finalClassName}>{children}</div>;
};

export default Tabs;
