import React from 'react';

interface IProps {
  text?: string;
}

const Stepper: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-stepper">{children}</div>;
};

export default Stepper;
