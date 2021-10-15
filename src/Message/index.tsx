import React from 'react';

interface IProps {
  text?: string;
}

const Message: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-message">{children}</div>;
};

export default Message;
