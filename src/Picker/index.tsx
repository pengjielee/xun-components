import React from 'react';

interface IProps {
  text?: string;
}

const Picker: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-picker">{children}</div>;
};

export default Picker;
