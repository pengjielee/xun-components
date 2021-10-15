import React from 'react';

interface IProps {
  text?: string;
}

const Switch: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-switch">{children}</div>;
};

export default Switch;
