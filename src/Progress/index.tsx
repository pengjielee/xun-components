import React from 'react';

interface IProps {
  text?: string;
}

const Progress: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-progress">{children}</div>;
};

export default Progress;
