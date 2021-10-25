import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-tab-bar__item';

interface IProps {
  itemKey?: string;
  title?: string;
  icon?: React.ReactNode;
}

const TabBarItem: FC<IProps> = (props) => {
  const { itemKey, title, icon, active = false, onChange } = props;
  const finalClassName = classnames(classPrefix, {
    [`${classPrefix}-active`]: active,
  });

  const handleClick = () => {
    typeof onChange === 'function' && onChange(itemKey);
  };

  return (
    <div className={finalClassName} onClick={handleClick}>
      <div className={`${classPrefix}-icon`}>{icon}</div>
      <div className={`${classPrefix}-title`}>{title}</div>
    </div>
  );
};

export default TabBarItem;
