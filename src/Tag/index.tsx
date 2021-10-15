import React from 'react';

interface IProps {
  text?: string;
}

const Tag: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-tag">{children}</div>;
};

export default Tag;
