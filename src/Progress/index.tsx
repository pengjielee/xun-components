import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-progress';

interface IProps {
  percent?: number;
  strokeWidth?: number;
  strokeColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const Progress: FC<IProps> = (props) => {
  const {
    percent = 0,
    strokeWidth = 1,
    strokeColor = '#00bc70',
    className,
    children,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const radius = 20; //圆的半径
  // const strokeWidth = 4; //圆环宽度

  const dasharray = Math.PI * radius * 2;
  const dashoffset = (dasharray * (100 - percent!)) / 100;
  const diameter = radius * 2;

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__circle`}>
        <svg viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            stroke="#eee"
          />
          <circle
            className="progress"
            r={radius}
            cx="25"
            cy="25"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={dashoffset}
            strokeDasharray={dasharray}
          />
        </svg>
        <div className={`${classPrefix}__content`}>
          {children ? (
            children
          ) : (
            <>
              <span className={`${classPrefix}__number`}>{percent}</span>
              <span className={`${classPrefix}__percent`}>%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;
