import React from 'react';

interface IProps {
  text?: string;
}

const AreaPicker: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-area-picker">{children}</div>;
};

export default AreaPicker;
