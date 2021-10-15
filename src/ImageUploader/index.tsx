import React from 'react';

interface IProps {
  text?: string;
}

const ImageUploader: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-image-uploader">{children}</div>;
};

export default ImageUploader;
