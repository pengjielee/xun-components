import React from 'react';

interface IProps {
  text?: string;
}

const Modal: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-modal">{children}</div>;
};

export default Modal;
