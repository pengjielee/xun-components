import React from 'react';

interface IProps {
  text?: string;
}

const TabBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-tab-bar">{children}</div>;
};

export default TabBar;
