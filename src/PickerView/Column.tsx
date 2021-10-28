import React, { FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import classnames from 'classnames';
import { bound, rubberbandIfOutOfBounds } from '../assets/utils/';
import { PickerColumnItem, PickerValue } from './index';
import './style.scss';

const classPrefix = 'xun-picker-column';

interface IProps {
  column: PickerColumnItem[];
  value: PickerValue;
  onSelect: (value: PickerValue) => void;
  className?: string;
}

const PickerColumn: FC<IProps> = (props) => {
  const { column = [], value, onSelect, className } = props;

  const itemHeight = 34;

  const finalClassName = classnames(classPrefix, className);

  function scrollSelect(index: number) {
    const finalPosition = index * -itemHeight;
    api.start({ y: finalPosition });
    typeof onSelect === 'function' && onSelect(column[index].value);
  }

  const [{ y }, api] = useSpring(() => ({
    from: { y: 0 },
    config: {
      tension: 400,
      mass: 0.8,
    },
  }));

  const bind = useDrag(
    (state) => {
      const min = -((column.length - 1) * itemHeight);
      const max = 0;
      if (state.last) {
        const position =
          state.offset[1] + state.velocity[1] * state.direction[1] * 50;
        const targetIndex = -Math.round(bound(position, min, max) / itemHeight);
        scrollSelect(targetIndex);
      } else {
        const position = state.offset[1];
        api.start({
          y: rubberbandIfOutOfBounds(position, min, max, itemHeight * 50, 0.2),
        });
      }
    },
    {
      axis: 'y',
      from: () => [0, y.get()],
      filterTaps: true,
    },
  );

  return (
    <div className={finalClassName} {...bind()}>
      <animated.div style={{ y }} className={`${classPrefix}-wheel`}>
        {column.map((item, index) => {
          return (
            <div
              key={item.value}
              className={`${classPrefix}-item`}
              onClick={() => scrollSelect(index)}
            >
              <div className={`${classPrefix}-label`}>{item.label}</div>
            </div>
          );
        })}
      </animated.div>
    </div>
  );
};

export default PickerColumn;
