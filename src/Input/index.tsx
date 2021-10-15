import React from 'react';

interface IProps {
  text?: string;
}

const Input: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-input">{children}</div>;
};

export default Input;
