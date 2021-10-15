import React from 'react';

interface IProps {
  text?: string;
}

const Swiper: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-swiper">{children}</div>;
};

export default Swiper;
