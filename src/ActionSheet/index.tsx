import React from 'react';

interface IProps {
  text?: string;
}

const ActionSheet: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-action-sheet">{children}</div>;
};

export default ActionSheet;
