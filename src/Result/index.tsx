import React from 'react';

interface IProps {
  text?: string;
}

const Result: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-result">{children}</div>;
};

export default Result;
