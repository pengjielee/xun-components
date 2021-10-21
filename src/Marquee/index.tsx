import React, { FC, useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-marquee';

interface IProps {
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
  delay?: number;
  loop?: number;
  children?: React.ReactNode;
}

const Marquee: FC<IProps> = (props) => {
  const {
    className = '',
    direction = 'left',
    speed = 20,
    delay = 0,
    loop = 0,
    children,
  } = props;
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const calculateWidth = () => {
    if (marqueeRef.current && containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
      setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
    }

    if (marqueeWidth < containerWidth) {
      setDuration(containerWidth / speed);
    } else {
      setDuration(marqueeWidth / speed);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  });

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__container`,
    className,
  );

  const style = {
    ['--marquee-duration']: `${duration}s`,
    ['--marquee-delay']: `${delay}s`,
    ['--marquee-iteration-count']: !!loop ? `${loop}` : 'infinite',
    ['--marquee-direction']: direction === 'left' ? 'normal' : 'reverse',
  };

  return (
    <>
      {
        <div ref={containerRef} className={finalClassName}>
          <div
            ref={marqueeRef}
            className={`${classPrefix}__inner`}
            style={{ ...style }}
          >
            {children}
          </div>
          <div className={`${classPrefix}__inner`} style={{ ...style }}>
            {children}
          </div>
        </div>
      }
    </>
  );
};

export default Marquee;
