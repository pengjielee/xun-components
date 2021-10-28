import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';
import ClearIcon from './clear.svg';
import KeyboardIcon from './keyboard.svg';

const classPrefix = 'xun-keyboard';

interface IProps {
  visible?: boolean;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}

const Keyboard: FC<IProps> = (props) => {
  const { className, text, children } = props;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'x'];

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__keys`}>
        {numbers.map((number) => {
          return (
            <div className={`${classPrefix}__item`}>
              {number != 'x' ? number : <img src={KeyboardIcon} />}
            </div>
          );
        })}
      </div>
      <div className={`${classPrefix}__action`}>
        <div
          className={classnames(
            `${classPrefix}__item`,
            `${classPrefix}__item-clear`,
          )}
        >
          <img src={ClearIcon} />
        </div>
        <div
          className={classnames(
            `${classPrefix}__item`,
            `${classPrefix}__item-ok`,
          )}
        >
          ok
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
