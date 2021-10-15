import React from 'react';

interface IProps {
  text?: string;
}

const BackToTop: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-back-to-top">{children}</div>;
};

export default BackToTop;
