import React from 'react';

interface IProps {
  text?: string;
}

const NoticeBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-notice-bar">{children}</div>;
};

export default NoticeBar;
