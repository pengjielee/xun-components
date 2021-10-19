import React, { FC } from 'react';
import classnames from 'classnames';
import Mask from '../Mask';
import './style.scss';

const classPrefix = 'xun-loading';

interface IProps {
  visible?: boolean;
  className?: string;
  content?: React.ReactNode;
}

const Loading: FC<IProps> = (props) => {
  const { visible = false, content, className } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <>
      {visible ? (
        <>
          <Mask theme="light" opacity={1}></Mask>
          <div className={finalClassName}>
            {content ? (
              <div className={`${classPrefix}__content`}>{content}</div>
            ) : (
              <div className={`${classPrefix}__snipper`}></div>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Loading;
