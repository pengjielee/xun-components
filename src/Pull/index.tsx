import React from 'react';

interface IProps {
  text?: string;
}

const Pull: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-pull">{children}</div>;
};

export default Pull;
