import React, { FC } from 'react';
import classnames from 'classnames';
import Mask from '../Mask';
import './style.scss';

const classPrefix = 'xun-popup';

interface IProps {
  position?: 'bottom' | 'top' | 'left' | 'right';
  visible?: boolean;
  children?: React.ReactNode;
  className?: string;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Popup: FC<IProps> = (props) => {
  const { position = 'bottom', visible = false, className, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <>
      <div
        className={finalClassName}
        style={{ display: visible ? 'unset' : 'none' }}
      >
        <Mask opacity={2} onClick={props.onMaskClick} />
        <div
          className={classnames(
            `${classPrefix}__body`,
            `${classPrefix}__body-${position}`,
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
