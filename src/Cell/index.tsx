import React from 'react';

interface IProps {
  text?: string;
}

const Cell: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-cell">{children}</div>;
};

export default Cell;
