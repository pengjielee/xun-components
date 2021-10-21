import React, { FC } from 'react';
import classnames from 'classnames';
import Popup from '../Popup';
import './style.scss';

const classPrefix = 'xun-action-sheet';

interface Action {
  key: string | number;
  text: string;
  type?: 'primary' | 'success' | 'fail' | 'warn' | 'danger';
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

  const hancleCancel = () => {
    typeof onCancel === 'function' && onCancel();
  };

  const renderActions = () => {
    return actions.map((action, index) => {
      const { key, text, type = 'info', onClick } = action;
      return (
        <div
          key={key || index}
          className={classnames(
            `${classPrefix}__actions-item`,
            `${classPrefix}__actions-item-${type}`,
            `hairline--bottom`,
          )}
          onClick={onClick}
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
          <div className={`${classPrefix}__cancel`} onClick={hancleCancel}>
            {cancelText}
          </div>
        )}
      </div>
    </Popup>
  );
};

export default ActionSheet;
