import React, { FC } from 'react';
import classnames from 'classnames';
import GridItem from './GridItem';
import './style.scss';

const classPrefix = 'xun-grid';

interface IProps {
  columns: number;
  gap?: number | number[] | string | string[];
  children?: React.ReactNode;
  className?: string;
}

const Grid: FC<IProps> = (props) => {
  const { columns, gap, className, children } = props;

  const finalClassName = classnames(classPrefix, className);

  const renderItems = () => {
    return React.Children.map(children, (child, index) => {
      return <GridItem {...child.props} />;
    });
  };

  let gapStyle = {};

  if (gap) {
    const [rowGap, columnGap] = Array.isArray(gap) ? gap : [gap, gap];
    gapStyle = {
      ...gapStyle,
      '--column-gap':
        typeof columnGap === 'number' ? `${columnGap}px` : columnGap,
      '--row-gap': typeof rowGap === 'number' ? `${rowGap}px` : rowGap,
    };
  }

  const style = {
    ...gapStyle,
    '--columns': columns,
  };

  return (
    <div className={finalClassName} style={style}>
      {renderItems()}
    </div>
  );
};

export default Grid;
