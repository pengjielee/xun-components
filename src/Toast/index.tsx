import React from 'react';

interface IProps {
  text?: string;
}

const Toast: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-toast">{children}</div>;
};

export default Toast;
