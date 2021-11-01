// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-tab-bar';

interface IProps {
  activeKey?: string | number;
  defaultActiveKey?: string | number;
  className?: string;
  children?: React.ReactNode;
  onChange?: (value) => void;
}

const TabBar: FC<IProps> = (props) => {
  const { className, activeKey, defaultActiveKey, children } = props;

  const finalClassName = classnames(classPrefix, className);

  const getSelected = (index: number, itemKey: string | number) => {
    if (!activeKey) {
      if (!defaultActiveKey && index === 0) {
        return true;
      }
      return defaultActiveKey === itemKey;
    }
    return activeKey === itemKey;
  };

  const items = React.Children.map(children, (element, index) => {
    if (!React.isValidElement(element)) {
      return null;
    }

    const itemKey = element.props.itemKey || index;
    return React.cloneElement(element, {
      key: index,
      onChange: () => props.onChange?.(itemKey),
      badge: element.props.badge,
      title: element.props.title,
      icon: element.props.icon,
      itemKey,
      selected: getSelected(index, itemKey),
    });
  });

  return <div className={finalClassName}>{items}</div>;
};

export default TabBar;
