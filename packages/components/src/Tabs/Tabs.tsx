// @ts-nocheck
import React, { FC, useState, useRef } from 'react';
import classnames from 'classnames';
import { useSpring, animated } from '@react-spring/web';

import './style.scss';

const classPrefix = 'xun-tabs';

interface IProps {
  activeKey?: string | number;
  className?: string;
  onChange?: (value) => void;
  lineWidth?: string | number;
  data?: object | array;
}

const Tabs: FC<IProps> = (props) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const { className, data = [], onChange, lineWidth = '10px' } = props;

  let titles = [];
  let activeKey = 0;
  if (Array.isArray(data)) {
    titles = data;
    activeKey = props.activeKey || 0;
  } else if (data.constructor === Object) {
    titles = Object.keys(data);
    activeKey = props.activeKey || titles[0];
  }

  const [selectedKey, setSelectedKey] = useState(activeKey);

  const finalClassName = classnames(classPrefix, className);

  const content = data[selectedKey] || '';

  const handleClick = (e, item) => {
    const target = e.target as HTMLDivElement;
    const parent = target?.offsetParent;
    if (!parent) {
      return;
    }
    const itemRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const itemCenter = target.offsetLeft + itemRect.width / 2;
    let tox = itemCenter - parentRect.width / 2;
    // tox = clamp(tox, 0, parent.scrollWidth - itemRect.width);

    scrollApi.start({
      from: { left: tabsRef.current?.scrollLeft! },
      left: tox,
    });

    setSelectedKey(item);
    props.onChange?.(item);
  };

  const renderTitle = () => {
    if (Array.isArray(data)) {
      return titles.map((item, index) => {
        const selected = index === selectedKey;
        const itemClassName = classnames(`${classPrefix}__item`, {
          [`${classPrefix}__item-active`]: selected,
        });
        return (
          <div
            key={item}
            onClick={(e) => handleClick(e, index)}
            className={itemClassName}
          >
            {item}
          </div>
        );
      });
    }

    return titles.map((item, index) => {
      const selected = item === selectedKey;
      const itemClassName = classnames(`${classPrefix}__item`, {
        [`${classPrefix}__item-active`]: selected,
      });
      return (
        <div
          key={item}
          onClick={(e) => handleClick(e, item)}
          className={itemClassName}
        >
          {item}
        </div>
      );
    });
  };
  const style = {
    '--line-width':
      typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth,
  };

  const lineStyle = {};

  const [scrollStyle, scrollApi] = useSpring(() => ({
    from: { left: 0 },
    onChange(event) {
      tabsRef.current!.scroll({ left: event.value.left });
    },
  }));

  return (
    <div className={finalClassName} style={style}>
      <div className={`${classPrefix}__header`}>
        <animated.div
          ref={tabsRef}
          className={`${classPrefix}__tabs`}
          style={scrollStyle}
        >
          {renderTitle()}
        </animated.div>
      </div>
      <div className={`${classPrefix}__body`}>
        <div className={`${classPrefix}__content`}>{content}</div>
      </div>
    </div>
  );
};

export default Tabs;
