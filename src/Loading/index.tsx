import React from 'react';

interface IProps {
  text?: string;
}

const Loading: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-loading">{children}</div>;
};

export default Loading;
