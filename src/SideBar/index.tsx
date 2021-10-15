import React from 'react';

interface IProps {
  text?: string;
}

const SideBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-side-bar">{children}</div>;
};

export default SideBar;
