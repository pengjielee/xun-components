import React from 'react';

interface IProps {
  text?: string;
}

const Grid: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-grid">{children}</div>;
};

export default Grid;
