import React, { FC } from 'react';
import classnames from 'classnames';
import Mask from '../Mask';
import './style.scss';

const classPrefix = 'xun-toast';

interface IProps {
  type?: 'default' | 'success' | 'fail' | 'info' | 'warn' | 'error';
  className?: string;
  hasMask?: boolean;
  content?: React.ReactNode;
}

const Toast: FC<IProps> = (props) => {
  const {
    type = 'default',
    hasMask = false,
    content,
    className,
    children,
  } = props;

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}__${type}`,
    className,
  );

  return (
    <>
      {hasMask ? <Mask theme="light" opacity={1}></Mask> : null}
      <div className={finalClassName}>
        <div className={`${classPrefix}__content`}>{content}</div>
      </div>
    </>
  );
};

export default Toast;
