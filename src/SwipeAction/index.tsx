import React, { FC, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import classnames from 'classnames';
import Button from '../Button';
import './style.scss';

const classPrefix = 'xun-swipe-action';

interface IProps {
  visible?: boolean;
  actions?: any;
  children?: React.ReactNode;
  className?: string;
}

function getWidth(ref: RefObject<HTMLDivElement>) {
  const element = ref.current;
  if (!element) return 0;
  return element.offsetWidth;
}

const SwipeAction: FC<IProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const [{ x }, api] = useSpring(
    () => ({
      x: 0,
      config: { tension: 200, friction: 30 },
    }),
    [],
  );

  const bind = useDrag(
    (state) => {
      draggingRef.current = true;
      const [offsetX] = state.offset;

      if (offsetX > 0) {
        return;
      }
      if (state.last) {
        const rightWidth = getWidth(rightRef);
        api.start({
          x: -rightWidth,
        });
        window.setTimeout(() => {
          draggingRef.current = false;
        });
      } else {
        api.start({
          x: offsetX,
          immediate: true,
        });
      }
    },
    {
      from: () => [x.get(), 0],
      // rubberband: true,
      axis: 'x',
      preventScroll: true,
    },
  );

  const { className, actions = [], children } = props;
  const finalClassName = classnames(classPrefix, className);

  return (
    <div
      ref={rootRef}
      {...bind()}
      className={finalClassName}
      onClickCapture={(e) => {
        if (draggingRef.current) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
    >
      <animated.div style={{ x }} className={`${classPrefix}__inner`}>
        <div
          className={`${classPrefix}__content`}
          onClickCapture={(e) => {
            if (x.goal !== 0) {
              e.preventDefault();
              e.stopPropagation();
              api.start({
                x: 0,
              });
            }
          }}
        >
          {children}
        </div>
        <div className={`${classPrefix}__actions`} ref={rightRef}>
          {actions.map((action, index) => {
            return (
              <Button key={index} type={action.type}>
                {action.text}
              </Button>
            );
          })}
        </div>
      </animated.div>
    </div>
  );
};

export default SwipeAction;
