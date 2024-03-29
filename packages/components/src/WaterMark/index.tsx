// @ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

const classPrefix = `xun-water-mark`;

interface IProps {
  content?: string;
  image?: string;
  gapX?: number;
  gapY?: number;
  zIndex?: number;
  width?: number;
  height?: number;
  imageWidth?: number;
  imageHeight?: number;
  rotate?: number;
  content?: string;
  fontColor?: string;
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  fontFamily?: string;
  fontWeight?: 'normal' | 'light' | 'weight' | number;
  fontSize?: number | string;
}

const WaterMark: React.FC<IProps> = (props) => {
  const {
    className,
    zIndex = 2000,
    gapX = 20,
    gapY = 20,
    width = 120,
    height = 60,
    rotate = -20,
    content = 'watermark',
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 14,
    fontFamily = 'sans-serif',
    image,
    imageWidth,
    imageHeight,
  } = props;

  const finalClassName = classnames(`${classPrefix}`, className);

  const [base64Url, setBase64Url] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ratio = window.devicePixelRatio;

    const ctx = canvas.getContext('2d');

    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;

    const markWidth = width * ratio;
    const markHeight = height * ratio;

    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * Number(rotate));
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
        img.onload = () => {
          ctx.drawImage(
            img,
            (-imageWidth * ratio) / 2,
            (-imageHeight * ratio) / 2,
            imageWidth * ratio,
            imageHeight * ratio,
          );
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * Number(rotate));

        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;

        ctx.fillText(content, 0, 0);
        ctx.restore();

        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('当前环境不支持Canvas');
    }
  }, [
    gapX,
    gapY,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    content,
    fontSize,
    image,
  ]);

  return (
    <div
      className={finalClassName}
      style={{
        zIndex,
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: `${gapX + width}px`,
        pointerEvents: 'none',
        backgroundRepeat: 'repeat',
        backgroundImage: `url('${base64Url}')`,
      }}
    ></div>
  );
};

export default WaterMark;
