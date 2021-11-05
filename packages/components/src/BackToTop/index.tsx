// @ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { canUseDOM, getMountContainer } from '../assets/utils';
import './style.scss';

const classPrefix = 'xun-back-to-top';

interface IProps {
  visibilityHeight?: number;
  children?: string | React.ReactNode;
  className?: string;
  scrollContainer?: HTMLElement | (() => HTMLElement);
}

const getScrollContainer = (scrollContainer) => {
  let container =
    typeof scrollContainer === 'function' ? scrollContainer() : scrollContainer;

  if (!container) {
    container = canUseDOM ? window : undefined;
  }

  return container;
};

const BackToTop: FC<IProps> = (props) => {
  const { visibilityHeight = 300, className, children = 'Up' } = props;

  const [visible, setVisible] = useState(false);
  const container = getScrollContainer(props.scrollContainer);

  useEffect(() => {
    if (container) {
      const fn = () => {
        //const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || window.scrollY;
        const scrollTop =
          container === window ? window.pageYOffset : container.scrollTop;
        if (scrollTop > visibilityHeight) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };

      container.addEventListener('scroll', fn, false);
      return () => {
        container.removeEventListener('scroll', fn, false);
      };
    }
  }, [container]);

  const scrollToTop = () => {
    // window.scrollTo(0, 0);
    container &&
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  const Element = (
    <div
      className={classnames(classPrefix, className)}
      onClick={scrollToTop}
      style={{
        display: visible ? 'inline' : 'none',
        position: container === window ? 'fixed' : 'absolute',
        bottom: 40,
        right: 40,
      }}
    >
      {children}
    </div>
  );

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(Element, getMountContainer(container));
};

export default BackToTop;
