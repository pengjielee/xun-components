import React from 'react';

interface IProps {
  text?: string;
}

const Collapse: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-collapse">{children}</div>;
};

export default Collapse;
