import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import InnerToast from './Toast';

const createToast = (content, options) => {
  const duration = (options && options.duration) || 3000;

  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<InnerToast content={content} {...options} />, container);

  const destory = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  setTimeout(() => destory(), duration);
};

const Toast = {
  show: (t, o) => createToast(t, { ...o, type: '' }),
  success: (t, o) => createToast(t, { ...o, type: 'success' }),
  failure: (t, o) => createToast(t, { ...o, type: 'failure' }),
  warning: (t, o) => createToast(t, { ...o, type: 'warning' }),
  info: (t, o) => createToast(t, { ...o, type: 'info' }),
};

export default Toast;
