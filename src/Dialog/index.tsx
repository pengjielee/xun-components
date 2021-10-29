import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import { Close as CloseIcon } from 'xun-icons';
import './style.scss';
import { attachPropertiesToComponent } from '../assets/utils';

const classPrefix = 'xun-dialog';

interface IProps {
  visible?: boolean;
  showClose?: boolean;
  type?: 'alert' | 'confirm' | 'default';
  buttons?: Array<React.ReactElement>;
  width?: number;
  className?: string;
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler;
  footer?: React.ReactNode;
  onMaskClick?: () => void;
  onClose?: () => void;
}

const Dialog: React.FC<IProps> = (props) => {
  const {
    visible = false,
    showClose = false,
    children,
    buttons = [],
    onClose,
    type = 'default',
    width = 300,
    footer,
  } = props;

  var finalClassName = classnames(`${classPrefix}`, {
    [`${classPrefix}-${type}`]: true,
  });

  const Element = visible ? (
    <>
      <Mask onClick={props.onMaskClick} />
      <div className={finalClassName} style={{ width: `${width}px` }}>
        <header className={classnames(`${classPrefix}__header`)}>
          {showClose ? (
            <div
              className={classnames(`${classPrefix}__close`)}
              onClick={props.onClose}
            >
              <CloseIcon />
            </div>
          ) : null}
        </header>
        <div className={classnames(`${classPrefix}__body`)}>{children}</div>
        {footer ? (
          footer
        ) : (
          <footer className={classnames(`${classPrefix}__footer`)}>
            {buttons.map((button, index) => {
              return React.cloneElement(button, { key: index });
            })}
          </footer>
        )}
      </div>
    </>
  ) : null;

  return ReactDOM.createPortal(Element, document.body);
};

const Modal = (
  title: string,
  content: React.ReactNode,
  footer?: React.ReactNode,
  type?: 'alert' | 'confirm',
  afterClose?: () => void,
) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    afterClose && afterClose();
  };

  const component = (
    <Dialog type={type} visible={true} footer={footer} onClose={onClose}>
      {title ? (
        <div className={classnames(`${classPrefix}__title`)}>{title}</div>
      ) : null}
      <div className={classnames(`${classPrefix}__content`)}>{content}</div>
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

const Alert = (title: string, content: string) => {
  const footerClass = classnames(`${classPrefix}__footer`, {
    'hairline--top': true,
  });

  const footer = (
    <footer className={footerClass} onClick={() => close()}>
      知道啦
    </footer>
  );

  const close = Modal(title, content, footer, 'alert');
};

const Confirm = (
  title: string,
  content: string,
  yes?: () => void,
  no?: () => void,
) => {
  const onConfirm = () => {
    close();
    yes && yes();
  };
  const onCancel = () => {
    close();
    no && no();
  };
  const footerClass = classnames(`${classPrefix}__footer`, {
    'hairline--top': true,
  });

  const footer = (
    <footer className={footerClass}>
      <Button className="btn-cancel hairline--right" onClick={onCancel}>
        取消
      </Button>
      <Button className="btn-confirm" onClick={onConfirm}>
        确认
      </Button>
    </footer>
  );
  const close = Modal(title, content, footer, 'confirm');
};

export default attachPropertiesToComponent(Dialog, {
  alert: Alert,
  confirm: Confirm,
  modal: Modal,
});
