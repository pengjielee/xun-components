import React from 'react';

interface IProps {
  text?: string;
}

const FilePicker: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-file-picker">{children}</div>;
};

export default FilePicker;
