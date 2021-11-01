// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-list__item';

interface IProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  clickable?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const ListItem: FC<IProps> = (props) => {
  const { icon, title, description, children, clickable, className, onClick } =
    props;

  let content = null;

  if (title || description) {
    content = (
      <>
        <div className={`${classPrefix}__left`}>
          {icon && <div className={`${classPrefix}__icon`}>{icon}</div>}
          <div className={`${classPrefix}__info`}>
            {title && <div className={`${classPrefix}__title`}>{title}</div>}
            <div className={`${classPrefix}__content`}>{children}</div>
            {description && (
              <div className={`${classPrefix}__description`}>{description}</div>
            )}
          </div>
        </div>
        {clickable && (
          <div className={`${classPrefix}__right`}>
            <div className="arrow-right"></div>
          </div>
        )}
      </>
    );
  } else {
    content = (
      <>
        {icon && <div className={`${classPrefix}__icon`}>{icon}</div>}
        <div className={`${classPrefix}__content`}>{children}</div>
        {clickable && <div className="arrow-right"></div>}
      </>
    );
  }

  return React.createElement(
    clickable ? 'a' : 'div',
    {
      className: classnames(
        classPrefix,
        className,
        'hairline--bottom',
        clickable ? [`${classPrefix}__anchor`] : [],
      ),
      onClick: onClick,
    },
    content,
  );
};

export default ListItem;
