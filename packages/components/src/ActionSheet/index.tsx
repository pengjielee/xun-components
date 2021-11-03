// @ts-nocheck
import React, { FC } from 'react';
import classnames from 'classnames';
import Popup from '../Popup';
import './style.scss';

const classPrefix = 'xun-action-sheet';

interface Action {
  key: string | number;
  text: string;
  type?: 'success' | 'failure' | 'warning' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

interface IProps {
  visible?: boolean;
  actions?: Action[];
  title?: string;
  cancelText?: string;
  className?: string;
  onMaskClick?: () => void;
  onCancel?: () => void;
}

const ActionSheet: FC<IProps> = (props) => {
  const {
    visible = false,
    actions = [],
    title,
    cancelText = '',
    className,
    onCancel,
    onMaskClick,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const handleCancel = () => {
    typeof onCancel === 'function' && onCancel();
  };

  const handleClick = (action: Action) => {
    const { disabled = false, onClick } = action;
    if (disabled) {
      return;
    }
    typeof onClick === 'function' && onClick();
  };

  const renderActions = () => {
    return actions.map((action, index) => {
      const { key, text, type = 'info', disabled = false, onClick } = action;
      return (
        <div
          key={key || index}
          className={classnames(
            `${classPrefix}__actions-item`,
            `${classPrefix}__actions-item_${type}`,
            `hairline--bottom`,
            {
              [`${classPrefix}__actions-item_disabled`]: disabled,
            },
          )}
          onClick={() => handleClick(action)}
        >
          {text}
        </div>
      );
    });
  };

  return (
    <Popup visible={visible} onMaskClick={onMaskClick}>
      <div className={finalClassName}>
        {title && (
          <div
            className={classnames(`${classPrefix}__title`, `hairline--bottom`)}
          >
            {title}
          </div>
        )}

        <div className={`${classPrefix}__actions`}>{renderActions()}</div>

        {cancelText && (
          <div className={`${classPrefix}__cancel`} onClick={handleCancel}>
            {cancelText}
          </div>
        )}
      </div>
    </Popup>
  );
};

export default ActionSheet;
