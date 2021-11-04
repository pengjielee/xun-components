// @ts-nocheck
import React, { FC, useState } from 'react';
import classnames from 'classnames';
import TabPanel from './TabPanel';
import './style.scss';

const classPrefix = 'xun-tabs';

interface IProps {
  activeKey?: string | number;
  className?: string;
  onChange?: (value) => void;
  data?: object | array;
}

const Tabs: FC<IProps> = (props) => {
  const { className, data = [], onChange } = props;

  let titles = [];
  let activeKey = 0;
  if (Array.isArray(data)) {
    titles = data;
    activeKey = props.activeKey || 0;
  } else if (data.constructor === Object) {
    titles = Object.keys(data);
    activeKey = props.activeKey || titles[0];
  }

  const [selectedKey, setSelectedKey] = useState(activeKey);

  const finalClassName = classnames(classPrefix, className);

  const content = data[selectedKey] || '';

  const handleClick = (item) => {
    console.log(item);
    setSelectedKey(item);
    props.onChange?.(item);
  };

  const renderTitle = () => {
    if (Array.isArray(data)) {
      return titles.map((item, index) => {
        const selected = index === selectedKey;
        const itemClassName = classnames(`${classPrefix}__item`, {
          [`${classPrefix}__item-active`]: selected,
        });
        return (
          <div className={`${classPrefix}__wrapper`}>
          <div
            key={item}
            onClick={() => handleClick(index)}
            className={itemClassName}
          >
            {item}
          </div>
          </div>
        );
      });
    }

    return titles.map((item, index) => {
      const selected = item === selectedKey;
      const itemClassName = classnames(`${classPrefix}__item`, {
        [`${classPrefix}__item-active`]: selected,
      });
      return (
        <div
          key={item}
          onClick={() => handleClick(item)}
          className={itemClassName}
        >
          {item}
        </div>
      );
    });
  };

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__title`}>{renderTitle()}</div>
      <div className={`${classPrefix}__content`}>{content}</div>
    </div>
  );
};

export default Tabs;
