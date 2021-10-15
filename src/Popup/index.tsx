import React from 'react';

interface IProps {
  text?: string;
}

const Popup: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-popup">{children}</div>;
};

export default Popup;
