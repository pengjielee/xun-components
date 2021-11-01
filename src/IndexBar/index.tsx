// @ts-nocheck
import React, { FC, useRef, useState } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-index-bar';

interface IProps {
  sticky?: boolean;
  stickyOffsetTop?: number;
  children?: React.ReactNode;
  className?: string;
}

const groups = [
  {
    title: 'a',
    items: [
      { id: 0, name: 'afd' },
      { id: 1, name: 'ahat' },
      { id: 2, name: 'aocial' },
      { id: 3, name: 'aircle' },
    ],
  },
  {
    title: 'b',
    items: [
      { id: 4, name: 'bfds ' },
      { id: 5, name: 'bhat' },
      { id: 6, name: 'bocial' },
      { id: 7, name: 'bircle' },
    ],
  },
  {
    title: 'c',
    items: [
      { id: 8, name: 'cdfd' },
      { id: 9, name: 'chat' },
      { id: 10, name: 'cocial' },
      { id: 11, name: 'circle' },
    ],
  },
  {
    title: 'd',
    items: [
      { id: 12, name: 'dere' },
      { id: 13, name: 'dhat' },
      { id: 14, name: 'docial' },
      { id: 15, name: 'dircle' },
    ],
  },
  {
    title: 'e',
    items: [
      { id: 16, name: 'eafd' },
      { id: 17, name: 'ehat' },
      { id: 18, name: 'eocial' },
      { id: 19, name: 'eircle' },
    ],
  },
];

const IndexBar: FC<IProps> = (props) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState('');
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  const scrollTo = (index: string) => {
    const body = bodyRef.current;
    if (!body) return;

    const children = body.children;
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement;
      if (!panel) continue;
      const panelIndex = panel.dataset['index'];
      if (panelIndex == index) {
        body.scrollTop = panel.offsetTop;
        setActiveIndex(index);
        return;
      }
    }
  };

  const handleClick = (index) => {
    scrollTo(index);
  };

  const handleScroll = () => {
    const body = bodyRef.current;
    if (!body) {
      return;
    }
    const scrollTop = body.scrollTop;

    const children = body.getElementsByClassName(`${classPrefix}__anchor`);
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement;
      if (!panel) {
        continue;
      }
      const panelIndex = panel.dataset['index'];
      if (!panelIndex) {
        continue;
      }
      if (panel.offsetTop + panel.clientHeight > scrollTop) {
        setActiveIndex(panelIndex);
        return;
      }
    }
  };

  return (
    <div className={finalClassName}>
      <div
        ref={bodyRef}
        className={`${classPrefix}__body`}
        onScroll={handleScroll}
      >
        {groups.map((group, index) => {
          return (
            <div
              className={`${classPrefix}__group`}
              key={group.title}
              data-index={index}
            >
              <div data-index={index} className={`${classPrefix}__anchor`}>
                {group.title.toUpperCase()}
              </div>
              {group.items.map((item) => {
                return (
                  <div
                    className={classnames(
                      `${classPrefix}__item`,
                      `hairline--bottom`,
                    )}
                    key={item.id}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={`${classPrefix}__index`}>
        {groups.map((group, index) => {
          return (
            <div
              className={classnames(`${classPrefix}__index-item`, {
                [`${classPrefix}__index-item-active`]: index == activeIndex,
              })}
              key={index}
              onClick={() => handleClick(index)}
            >
              {group.title.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndexBar;
