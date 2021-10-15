import React from 'react';

interface IProps {
  text?: string;
}

const Keyboard: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-keyboard">{children}</div>;
};

export default Keyboard;
