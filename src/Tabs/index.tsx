import React from 'react';

interface IProps {
  text?: string;
}

const Tabs: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-tabs">{children}</div>;
};

export default Tabs;
