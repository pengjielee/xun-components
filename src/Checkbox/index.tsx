import React from 'react';

interface IProps {
  text?: string;
}

const Checkbox: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-checkbox">{children}</div>;
};

export default Checkbox;
