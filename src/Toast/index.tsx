import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import InnerToast from './Toast';

const createToast = (content, options) => {
  const duration = (options && options.duration) || 300000;

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
  show: (t, o) => createToast(t, { ...o, type: 'default' }),
  success: (t, o) => createToast(t, { ...o, type: 'success' }),
  fail: (t, o) => createToast(t, { ...o, type: 'fail' }),
  warn: (t, o) => createToast(t, { ...o, type: 'warn' }),
  info: (t, o) => createToast(t, { ...o, type: 'info' }),
};

export default Toast;
