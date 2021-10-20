import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-action-sheet';

interface IProps {
  visible?: boolean;
  spacing?: boolean;
  actions?: any;
  children?: React.ReactNode;
  className?: string;
}

const ActionSheet: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return <div className={finalClassName}>{children}</div>;
};

export default ActionSheet;
