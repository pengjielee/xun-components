// @ts-nocheck
import React, { FC } from 'react';
import Column from './Column';

export type PickerValue = string | null;

export type PickerColumnItem = {
  label: string;
  value: string;
};

export type PickerColumn = (string | PickerColumnItem)[];

const classPrefix = `xun-picker-view`;

interface IProps {
  columns: PickerColumn[];
  value: PickerValue[];
  onSelect: (value: PickerValue[]) => void;
  className?: string;
}

const PickerView: FC<IProps> = (props) => {
  const { columns = [], value = [] } = props;

  return (
    <div className={`${classPrefix}`}>
      <Column
        column={columns}
        onSelect={(val) => {
          props.onSelect?.(val);
        }}
      />
      <div className={`${classPrefix}-mask ${classPrefix}-mask-top`} />
      <div className={`${classPrefix}-mask ${classPrefix}-mask-bottom`} />
    </div>
  );
};

export default PickerView;
