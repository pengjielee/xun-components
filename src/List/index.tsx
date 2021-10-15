import React from 'react';

interface IProps {
  text?: string;
}

const List: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-list">{children}</div>;
};

export default List;
