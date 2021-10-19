import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InnerLoading from './Loading';

const containers = [];

const unmount = (container) => {
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
};

const clear = () => {
  while (true) {
    const container = containers.pop();
    if (!container) {
      break;
    }
    unmount(container);
  }
};

const mount = (options) => {
  const { duration = 2000, content } = options;
  let timer = 0;
  const container = document.createElement('div');
  document.body.appendChild(container);
  clear();
  containers.push(container);

  const Temp = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (duration === 0) {
        return;
      }
      timer = window.setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => {
        window.clearTimeout(timer);
      };
    }, []);

    return <InnerLoading {...options} visible={visible} content={content} />;
  };

  ReactDOM.render(<Temp />, container);
};

const Loading = {
  show: (options) => mount(options),
  hide: () => clear(),
};

export default Loading;
