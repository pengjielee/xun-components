import React from 'react';

interface IProps {
  text?: string;
}

const Error: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-error">{children}</div>;
};

export default Error;
