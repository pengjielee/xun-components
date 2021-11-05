import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-badge';

interface IProps {
  color?: string;
  content?: string;
  shape?: 'rect' | 'radius' | 'round' | 'circle' | 'leaf';
  dot?: boolean;
  style: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
}

const Badge: FC<IProps> = (props) => {
  const {
    color = '#FF411C',
    dot = false,
    shape = 'rect',
    content = '',
    children,
    className,
  } = props;

  const finalClassName = classnames(
    classPrefix,
    {
      [`${classPrefix}-${shape}`]: shape,
      [`${classPrefix}-dot`]: dot,
      [`${classPrefix}-fixed`]: !!children,
    },
    className,
  );

  const style = {
    '--color': color,
    '--right': 0,
    '--top': 0,
    ...props.style,
  };

  const Element = (
    <span className={finalClassName} style={style}>
      {!dot ? (
        <span className={`${classPrefix}__content`}>{content}</span>
      ) : null}
    </span>
  );

  return children ? (
    <div className={`${classPrefix}-wrap`}>
      {children}
      {Element}
    </div>
  ) : (
    Element
  );
};

export default Badge;
