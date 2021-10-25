import React, { FC } from 'react';
import classnames from 'classnames';
import TabBarItem from './TabBarItem';
import './style.scss';

const classPrefix = 'xun-tab-bar';

interface IProps {
  activeKey?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: () => void;
}

const TabBar: FC<IProps> = (props) => {
  const { className, activeKey, children, onChange } = props;

  const finalClassName = classnames(classPrefix, className);

  const renderItems = () => {
    return React.Children.map(children, (child, index) => {
      const key = child.key;
      const active = key === activeKey;
      return (
        <TabBarItem
          {...child.props}
          active={active}
          onChange={onChange}
          itemKey={key}
        />
      );
    });
  };

  return <div className={finalClassName}>{renderItems()}</div>;
};

export default TabBar;
