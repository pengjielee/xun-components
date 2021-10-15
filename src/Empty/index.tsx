import React from 'react';

interface IProps {
  text?: string;
}

const Empty: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-empty">{children}</div>;
};

export default Empty;
