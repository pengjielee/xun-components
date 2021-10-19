import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-progress-bar';

interface IProps {
  percent?: number;
  strokeWidth?: number;
  strokeColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const ProgressBar: FC<IProps> = (props) => {
  const {
    percent = 0,
    strokeWidth = 5,
    strokeColor = '#00bc70',
    className,
    children,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const trailStyle = {
    height: `${strokeWidth}px`,
    borderRadius: `${strokeWidth / 2}px`,
    background: '#eee',
  };

  const pathStyle = {
    height: `${strokeWidth}px`,
    borderRadius: `${strokeWidth / 2}px`,
    width: `${percent}%`,
    background: strokeColor,
    transition: 'width 0.3s',
  };

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__trail`} style={trailStyle}>
        <div className={classnames(`${classPrefix}__path`)} style={pathStyle} />
      </div>
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
  );
};

export default ProgressBar;
