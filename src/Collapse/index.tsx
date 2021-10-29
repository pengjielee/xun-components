import React, { FC, useState } from 'react';
import classnames from 'classnames';
import './style.scss';
import { ArrowRight } from 'xun-icons';

const classPrefix = 'xun-collapse';

interface IProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Collapse: FC<IProps> = (props) => {
  const { className, text } = props;
  const [activeKey, setActiveKey] = useState(props.activeKey);

  const panels = [];

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }
    panels.push(child);
  });

  const finalClassName = classnames(classPrefix, className);

  const renderItems = () => {
    return panels.map((panel) => {
      const { title, children } = panel.props;
      const handleClick = (key) => {
        if (!key) {
          return;
        }
        setActiveKey(key);
      };

      const isActive = panel.key === activeKey;

      const itemClassName = classnames({
        [`${classPrefix}__item`]: true,
        [`${classPrefix}__item-active`]: isActive,
      });

      return (
        <React.Fragment key={panel.key}>
          <div className={itemClassName} onClick={() => handleClick(panel.key)}>
            <div
              className={classnames(
                `${classPrefix}__header`,
                'hairline--bottom',
              )}
            >
              <div className={`${classPrefix}__title`}>{title}</div>
              <i className="icon-arrow">
                <ArrowRight />
              </i>
            </div>
            <div
              className={classnames(
                `${classPrefix}__content`,
                'hairline--bottom',
              )}
              style={{ height: isActive ? 'auto' : '0px' }}
            >
              <div className={`${classPrefix}__content-inner`}>{children}</div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };
  return <div className={finalClassName}>{renderItems()}</div>;
};

export default Collapse;
