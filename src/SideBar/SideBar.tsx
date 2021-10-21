import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-side-bar';

interface IProps {
  activeKey?: string | null;
  children?: React.ReactNode;
  className?: string;
  onChange: () => void;
}

const SideBar: FC<IProps> = (props) => {
  const { activeKey, className, text, children, onChange } = props;

  const finalClassName = classnames(classPrefix, className);

  const handleClick = (key) => {
    typeof onChange === 'function' && onChange(key);
  };

  const renderItems = () => {
    return React.Children.map(children, (item) => {
      const active = item.key === activeKey;
      return (
        <div
          className={classnames(`${classPrefix}__item`, {
            [`${classPrefix}__item-active`]: active,
          })}
          onClick={() => handleClick(item.key)}
        >
          <span className={`${classPrefix}__title`}>{item.props.title}</span>
        </div>
      );
    });
  };

  return <div className={finalClassName}>{renderItems()}</div>;
};

export default SideBar;
