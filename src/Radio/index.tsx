import React from 'react';

interface IProps {
  text?: string;
}

const Radio: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-radio">{children}</div>;
};

export default Radio;
