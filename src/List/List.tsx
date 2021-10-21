import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-list';

interface IProps {
  visible?: boolean;
  mode?: 'default' | 'mode';
  children?: React.ReactNode;
  className?: string;
}

const List: FC<IProps> = (props) => {
  const { className, mode, children } = props;

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__mode`,
    className,
  );

  return (
    <div className={finalClassName}>
      <span className={`${classPrefix}__title`}>{children}</span>
    </div>
  );
};

export default List;
