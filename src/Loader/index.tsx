import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-loader';

interface IProps {
  size?: 'normal' | 'large' | 'small';
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

function hexToRgba(hex: string, alpha: number) {
  if (!hex || typeof alpha !== 'number' || alpha > 1 || alpha < 0) {
    return '';
  }

  const replaced = hex.replace('#', '');

  if (replaced.length !== 6) {
    return '';
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const Loader: FC<IProps> = (props) => {
  const { size = 'normal', color = '#000000', className } = props;

  const finalClassName = classnames(
    classPrefix,
    {
      [`xun-loader__${size}`]: size ? true : false,
    },
    className,
  );

  const style = {
    borderColor: color,
    borderRightColor: hexToRgba(color, 0.5),
  };

  return <div className={finalClassName} style={style}></div>;
};

export default Loader;
