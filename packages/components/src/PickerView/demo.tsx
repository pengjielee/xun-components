import React, { useState } from 'react';
import { PickerView } from 'xun-components';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  let columns = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
  ];

  const format = (columns) => {
    return columns.map((item) =>
      typeof item === 'string'
        ? {
            label: item,
            value: item,
          }
        : item,
    );
  };

  columns = format(columns);

  return (
    <>
      <PickerView columns={columns}>PickerView</PickerView>
    </>
  );
};

export default Demo;
