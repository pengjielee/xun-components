// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import { Empty as EmptyIcon } from 'xun-icons';
import './style.scss';

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

  let Element = <EmptyIcon size="60" />;

  if (image) {
    Element = (
      <img
        className={`${classPrefix}__image`}
        src={image}
        style={imageStyle}
        alt="empty"
      />
    );
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

export default Empty;
