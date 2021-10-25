import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-cell';

interface IProps {
  title?: string;
  icon?: string | React.ReactNode;
  description?: string | React.ReactNode;
  hasArrow?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Cell: FC<IProps> = (props) => {
  const { title, description, icon, hasArrow, className, children } = props;

  const finalClassName = classnames(classPrefix, 'hairline--bottom', className);

  const iconRender = icon && (
    <div className={`${classPrefix}__icon`}>{icon}</div>
  );
  const titleRender = title && (
    <div className={`${classPrefix}__title`}>{title}</div>
  );
  const contentRender = children && (
    <div className={`${classPrefix}__content`}>{children}</div>
  );
  const arrowRender = hasArrow && <div className={`${classPrefix}__arrow`} />;
  const descRender = description && (
    <div className={`${classPrefix}__description`}>{description}</div>
  );

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__left`}>
        {iconRender}
        {titleRender}
        {contentRender}
      </div>
      {hasArrow || description ? (
        <div className={`${classPrefix}__right`}>
          {descRender}
          {arrowRender}
        </div>
      ) : null}
    </div>
  );
};

export default Cell;
