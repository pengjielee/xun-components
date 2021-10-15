import React from 'react';

interface IProps {
  text?: string;
}

const TextArea: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-text-area">{children}</div>;
};

export default TextArea;
