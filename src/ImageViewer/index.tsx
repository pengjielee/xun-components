import React, { FC, useRef, useState } from 'react';
import classnames from 'classnames';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Mask from '../Mask';
import './style.scss';

const classPrefix = 'xun-image-viewer';

/**
 * 返回限制在 lower 和 upper 之间的值。
 *
 * param1. number (number): 被限制的值。
 * param2. [lower] (number): 下限。
 * param3. upper (number): 上限。
 */

const clamp = (number, lower, upper) => {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
};

interface IProps {
  visible?: boolean;
  images?: string[];
  children?: React.ReactNode;
  className?: string;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ImageViewer: FC<IProps> = (props) => {
  const indexRef = useRef(0);
  const [x, setX] = useState(0);
  const width = window.innerWidth;
  const { visible = false, images = [], className } = props;

  const finalClassName = classnames(classPrefix, className);

  const [list, api] = useSprings(images.length, (i) => ({
    x: i * width,
    scale: 1,
    display: 'flex',
  }));

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (active && Math.abs(mx) > width / 2) {
        indexRef.current = clamp(
          indexRef.current + (xDir > 0 ? -1 : 1),
          0,
          images.length - 1,
        );
        cancel();
      }
      api.start((i) => {
        if (i < indexRef.current - 1 || i > indexRef.current + 1)
          return { display: 'none' };
        const x = (i - indexRef.current) * width + (active ? mx : 0);
        const scale = active ? 1 - Math.abs(mx) / width / 2 : 1;
        return { x, scale, display: 'flex' };
      });
    },
  );

  return visible ? (
    <>
      <Mask opacity={9} />
      <div className={finalClassName} onClick={props.onMaskClick}>
        {list.map(({ x, display, scale }, i) => (
          <animated.div
            {...bind()}
            key={i}
            style={{ display, x }}
            className={`${classPrefix}__item`}
            src={images[i]}
          >
            <img className={`${classPrefix}__image`} src={images[i]} />
          </animated.div>
        ))}
      </div>
    </>
  ) : null;
};

export default ImageViewer;
