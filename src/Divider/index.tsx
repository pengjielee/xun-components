import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-divider';

interface IProps {
  text?: string;
  position: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  className?: string;
}

const Divider: FC<IProps> = (props) => {
  const { position = 'center', className, children } = props;

  const finalClassName = classnames(
    classPrefix,
    className,
    `${classPrefix}__${position}`,
  );

  return (
    <div className={finalClassName}>
      {children && <div className={`${classPrefix}__content`}>{children}</div>}
    </div>
  );
};

export default Divider;
