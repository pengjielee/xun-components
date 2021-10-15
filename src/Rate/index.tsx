import React from 'react';

interface IProps {
  text?: string;
}

const Rate: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-rate">{children}</div>;
};

export default Rate;
