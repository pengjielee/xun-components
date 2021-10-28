import React from 'react';
import classnames from 'classnames';

interface IProps {
  style?: React.CSSProperties;
  className?: string;
  fill?: string;
}

const classPrefix = 'xun-icon';

const Home: React.FC<IProps> = (props) => {
  const className = (props && props.className) || '';
  const style = (props && props.style) || null;
  const fill = (props && props.fill) || '#8a8a8a';

  const finalClassName = classnames(
    classPrefix,
    `${classPrefix}-home`,
    className,
  );

  return (
    <svg
      t="1635385202804"
      className={finalClassName}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7834"
      width="100%"
      height="100%"
      style={style}
    >
      <path
        d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z"
        fill={fill}
        p-id="7835"
      ></path>
    </svg>
  );
};

export default Home;