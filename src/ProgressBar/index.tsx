import React from 'react';

interface IProps {
  text?: string;
}

const ProgressBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-progress-bar">{children}</div>;
};

export default ProgressBar;
