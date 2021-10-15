import React from 'react';

interface IProps {
  text?: string;
}

const Card: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-card">{children}</div>;
};

export default Card;
