import React from 'react';

interface IProps {
  text?: string;
}

const Calendar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-calendar">{children}</div>;
};

export default Calendar;
