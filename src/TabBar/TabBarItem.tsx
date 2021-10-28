import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-tab-bar__item';

interface IProps {
  itemKey?: string;
  title?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  selected?: boolean;
  onChange?: () => void;
}

const TabBarItem: FC<IProps> = (props) => {
  const { itemKey, title, icon, selected = false, onChange } = props;

  const finalClassName = classnames(classPrefix, {
    [`${classPrefix}-active`]: selected,
  });

  const handleClick = () => {
    typeof onChange === 'function' && onChange(itemKey);
  };

  return (
    <div className={finalClassName} onClick={handleClick}>
      {icon && <div className={`${classPrefix}-icon`}>{icon}</div>}
      {title && <div className={`${classPrefix}-title`}>{title}</div>}
    </div>
  );
};

export default TabBarItem;
