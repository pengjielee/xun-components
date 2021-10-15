import React from 'react';

interface IProps {
  text?: string;
}

const Mask: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-mask">{children}</div>;
};

export default Mask;
