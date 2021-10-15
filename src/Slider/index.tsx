import React from 'react';

interface IProps {
  text?: string;
}

const Slider: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-slider">{children}</div>;
};

export default Slider;
