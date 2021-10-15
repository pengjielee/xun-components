import React from 'react';

interface IProps {
  text?: string;
}

const Divider: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-divider">{children}</div>;
};

export default Divider;
