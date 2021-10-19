import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';
import ErrorDefaultIcon from './error-default.svg';
import ErrorDatabaseIcon from './error-database.svg';
import ErrorFaceIcon from './error-face.svg';
import ErrorLocationIcon from './error-location.svg';
import ErrorWifiIcon from './error-wifi.svg';

const classPrefix = 'xun-error';

interface IProps {
  type?: 'default' | 'database' | 'wifi' | 'location' | 'face';
  image?: string;
  description?: string;
  imageStyle?: React.CSSProperties;
  descStyle?: React.CSSProperties;
  className?: string;
}

const Error: FC<IProps> = (props) => {
  const {
    type = 'default',
    className,
    description,
    image,
    imageStyle,
    descStyle,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const descRender = description && (
    <div className={`${classPrefix}__description`} style={descStyle}>
      {description}
    </div>
  );

  let imageSrc = null;

  if (image) {
    imageSrc = image;
  } else {
    switch (type) {
      case 'database':
        imageSrc = ErrorDatabaseIcon;
        break;
      case 'wifi':
        imageSrc = ErrorWifiIcon;
        break;
      case 'face':
        imageSrc = ErrorFaceIcon;
        break;
      case 'location':
        imageSrc = ErrorLocationIcon;
        break;
      default:
        imageSrc = ErrorDefaultIcon;
        break;
    }
  }

  const imageRender = (
    <div className={`${classPrefix}__image-container`}>
      <img
        className={`${classPrefix}__image`}
        src={imageSrc}
        style={imageStyle}
        alt="error"
      />
    </div>
  );

  return (
    <div className={finalClassName}>
      {imageRender}
      {descRender}
    </div>
  );
};

export default Error;
