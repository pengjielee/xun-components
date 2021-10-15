import React from 'react';

interface IProps {
  text?: string;
}

const DatePicker: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-date-picker">{children}</div>;
};

export default DatePicker;
