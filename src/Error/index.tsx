import React, { FC } from 'react';
import classnames from 'classnames';
import { Default, Database, Face, Location, Wifi } from 'xun-icons';
import './style.scss';

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

  let Element = null;

  if (image) {
    Element = (
      <img
        className={`${classPrefix}__image`}
        src={imageSrc}
        style={imageStyle}
        alt="error"
      />
    );
  } else {
    switch (type) {
      case 'database':
        Element = <Database size="60" />;
        break;
      case 'wifi':
        Element = <Wifi size="60" />;
        break;
      case 'face':
        Element = <Face size="60" />;
        break;
      case 'location':
        Element = <Location size="60" />;
        break;
      default:
        Element = <Default size="60" />;
        break;
    }
  }

  const imageRender = (
    <div className={`${classPrefix}__image-container`}>{Element}</div>
  );

  return (
    <div className={finalClassName}>
      {imageRender}
      {descRender}
    </div>
  );
};

export default Error;
