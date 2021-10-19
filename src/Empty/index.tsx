import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';
import EmptyIcon from './empty.svg';

const classPrefix = 'xun-empty';

interface IProps {
  image?: string;
  description?: string;
  imageStyle?: React.CSSProperties;
  descStyle?: React.CSSProperties;
  className?: string;
}

const Empty: FC<IProps> = (props) => {
  const { className, description, image, imageStyle, descStyle } = props;

  const finalClassName = classnames(classPrefix, className);

  const descRender = description && (
    <div className={`${classPrefix}__description`} style={descStyle}>
      {description}
    </div>
  );

  const imageSrc = image ? image : EmptyIcon;

  const imageRender = (
    <div className={`${classPrefix}__image-container`}>
      <img
        className={`${classPrefix}__image`}
        src={imageSrc}
        style={imageStyle}
        alt="empty"
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

export default Empty;
