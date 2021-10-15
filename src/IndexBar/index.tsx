import React from 'react';

interface IProps {
  text?: string;
}

const IndexBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-index-bar">{children}</div>;
};

export default IndexBar;
