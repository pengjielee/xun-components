import React from 'react';

interface IProps {
  text?: string;
}

const WaterMark: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-water-mark">{children}</div>;
};

export default WaterMark;
