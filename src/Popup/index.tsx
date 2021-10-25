import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import Mask from '../Mask';
import './style.scss';

const classPrefix = 'xun-popup';

interface IProps {
  position?: 'bottom' | 'top' | 'left' | 'right';
  visible?: boolean;
  children?: React.ReactNode;
  className?: string;
  bodyStyle?: React.CSSProperties;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  container?: any;
}

const getMountContainer = (mountContainer?): HTMLElement => {
  if (mountContainer) {
    if (typeof mountContainer === 'function') {
      return mountContainer();
    }
    if (
      typeof mountContainer === 'object' &&
      mountContainer instanceof HTMLElement
    ) {
      return mountContainer;
    }
  }
  return document.body;
};

const Popup: FC<IProps> = (props) => {
  const {
    position = 'bottom',
    visible = false,
    bodyStyle,
    className,
    children,
    container = document.body,
  } = props;

  console.log(container);

  const finalClassName = classnames(classPrefix, className);

  const { percent } = useSpring({
    percent: visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30,
    },
  });

  const Element = (
    <div
      className={finalClassName}
      style={{ display: visible ? 'unset' : 'none' }}
    >
      <Mask onClick={props.onMaskClick} />
      <animated.div
        style={{
          ...bodyStyle,
          transform: percent.to((v) => {
            if (props.position === 'bottom') {
              return `translate(0, ${v}%)`;
            }
            if (props.position === 'top') {
              return `translate(0, -${v}%)`;
            }
            if (props.position === 'left') {
              return `translate(-${v}%, 0)`;
            }
            if (props.position === 'right') {
              return `translate(${v}%, 0)`;
            }
            return 'none';
          }),
        }}
        className={classnames(
          `${classPrefix}__body`,
          `${classPrefix}__body-${position}`,
        )}
      >
        {children}
      </animated.div>
    </div>
  );

  return ReactDOM.createPortal(Element, container || document.body);
};

export default Popup;
