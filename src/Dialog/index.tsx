import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './style.scss';

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
}

const sc = (name?: string) => {
  return [classPrefix, name].filter(Boolean).join('-');
};

const Dialog: React.FC<IProps> = (props) => {
  const {
    visible = false,
    showClose = false,
    children,
    buttons = [],
    onClose,
    type = 'default',
    width = 350,
    footer,
  } = props;

  const haneleMaskClick = (e: React.MouseEvent) => {
    onClose && onClose(e);
  };
  const handleCloseClick = (e: React.MouseEvent) => {
    onClose && onClose(e);
  };

  var dialogClassName = classnames(`${classPrefix}`, {
    [`${classPrefix}-${type}`]: true,
  });

  const Element = visible ? (
    <>
      <div className={sc('mask')} onClick={haneleMaskClick}></div>
      <div className={dialogClassName} style={{ width: `${width}px` }}>
        <header className={sc('header')}>
          {showClose ? (
            <div className={sc('close')} onClick={handleCloseClick}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2071"
                data-spm-anchor-id="a313x.7781069.0.i0"
                width="32"
                height="32"
              >
                <path
                  d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
                  p-id="2072"
                  fill="#e6e6e6"
                ></path>
              </svg>
            </div>
          ) : null}
        </header>
        <main className={sc('body')}>{children}</main>
        {footer ? (
          footer
        ) : (
          <footer className={sc('footer')}>
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
      {title ? <div className={sc('title')}>{title}</div> : null}
      <div className={sc('content')}>{content}</div>
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

const Alert = (title: string, content: string) => {
  const footerClass = classnames(sc('footer'), {
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
  const footerClass = classnames(sc('footer'), {
    'hairline--top': true,
  });

  const footer = (
    <footer className={footerClass}>
      <button className="btn-cancel hairline--right" onClick={onCancel}>
        取消
      </button>
      <button className="btn-confirm" onClick={onConfirm}>
        确认
      </button>
    </footer>
  );
  const close = Modal(title, content, footer, 'confirm');
};

export default Dialog;
