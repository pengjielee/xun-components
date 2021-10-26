import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-slider';

interface IProps {
  visible?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Slider: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <input type="range" />
    </div>
  );
};

export default Slider;
