import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-card';

interface IProps {
  title?: string;
  more?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Card: FC<IProps> = (props) => {
  const { title, more, className, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <div className={classnames(`${classPrefix}__header`, 'hairline--bottom')}>
        {title && <div className={`${classPrefix}__header-title`}>{title}</div>}
        {more && <div className={`${classPrefix}__header-more`}>{more}</div>}
      </div>
      <div className={`${classPrefix}__body`}>{children}</div>
    </div>
  );
};

export default Card;
