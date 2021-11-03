// @ts-nocheck
import React, { FC, useState } from 'react';
import classnames from 'classnames';
import TabPanel from './TabPanel';
import './style.scss';

const classPrefix = 'xun-tabs';

interface IProps {
  activeKey?: string | null;
  className?: string;
  children?: React.ReactNode;
}

const Tabs: FC<IProps> = (props) => {
  const { className, children } = props;

  const [activeKey, setActiveKey] = useState(props.activeKey);

  const finalClassName = classnames(classPrefix, className);

  const tabsRender = React.Children.map(children, (tab) => {
    return <li>{tab.props.title}</li>;
  });
  const contentRnder = React.Children.map(children, (item) => {
    return <TabPanel {...item.props} selected={true} />;
  });

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__header`}>
        <ul className={`${classPrefix}__tabs`}>{tabsRender}</ul>
      </div>
      <div className={`${classPrefix}__body`}>{contentRnder}</div>
    </div>
  );
};

export default Tabs;
