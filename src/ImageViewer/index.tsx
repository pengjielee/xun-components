import React from 'react';

interface IProps {
  text?: string;
}

const ImageViewer: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-image-viewer">{children}</div>;
};

export default ImageViewer;
