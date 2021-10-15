import React from 'react';

interface IProps {
  text?: string;
}

const SwiperAction: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-swiper-action">{children}</div>;
};

export default SwiperAction;
