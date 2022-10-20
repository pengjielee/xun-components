// @ts-nocheck
import React, { FC, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import classnames from 'classnames';
import { passiveIfSupported, sleep } from '../assets/utils';
import './style.scss';

const classPrefix = 'xun-pull-to-refresh';

interface IProps {
  pullingText?: React.ReactNode;
  refreshingText?: React.ReactNode;
  completeText?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onRefresh?: () => void;
  headerHeight?: number;
  completeDelay?: number;
}

const PullUpStatus = {
  idle: 'idle',
  pulling: 'pulling', // 下拉可以刷新
  refreshing: 'refreshing', // 刷新中
  complete: 'complete', // 刷新完成
};

const PullToRefresh: FC<IProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(PullUpStatus.idle);
  const [headerStyles, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      tension: 300,
      friction: 30,
      clamp: true,
    },
  }));

  const {
    pullingText = '下拉刷新',
    refreshingText = '刷新中...',
    completeText = '刷新成功',
    className,
    children,
    headerHeight = 40,
    completeDelay = 0,
  } = props;

  const doRefresh = async () => {
    console.log('reload');
    api.start({ height: headerHeight });
    // setStatus(PullUpStatus.refreshing);
    setStatus(PullUpStatus.refreshing);
    try {
      await props.onRefresh();
      setStatus(PullUpStatus.complete);
    } catch (e) {
      setStatus(PullUpStatus.idle);
      throw e;
    }
    if (completeDelay > 0) {
      await sleep(completeDelay);
    }
    api.start({
      to: async (next) => {
        // await next({ height: 0 });
        await next({ height: 0 });
        setStatus(PullUpStatus.idle);
      },
    });
  };

  useDrag(
    (state) => {
      console.log(state);
      console.log(status);
      if (
        status === PullUpStatus.refreshing ||
        status === PullUpStatus.complete
      ) {
        return;
      }

      // true when it's the last event
      if (state.last) {
        const [, dy] = state.movement;
        if (status === PullUpStatus.idle && dy > 0) {
          doRefresh();
        } else {
          api.start({ height: 0 });
        }
        return;
      }
      // true when it's the first event
      if (state.first) {
        if (!containerRef.current) {
          return;
        }
      }

      api.start({ height: headerHeight });
    },
    {
      pointer: { touch: true },
      axis: 'y',
      target: containerRef,
      eventOptions: passiveIfSupported ? { passive: false } : false,
    },
  );

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__container`,
    className,
  );

  return (
    <div ref={containerRef} className={finalClassName}>
      <animated.div className={`${classPrefix}__header`} style={headerStyles}>
        <div
          className={`${classPrefix}__header-content`}
          style={{ height: headerHeight }}
        >
          {status === PullUpStatus.idle && pullingText}
          {status === PullUpStatus.refreshing && refreshingText}
          {status === PullUpStatus.complete && completeText}
        </div>
      </animated.div>
      <div className={`${classPrefix}__content`}>{children}</div>
    </div>
  );
};

export default PullToRefresh;
