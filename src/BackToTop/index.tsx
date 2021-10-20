import React, { FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-back-to-top';

interface IProps {
  visibilityHeight?: number;
  children?: React.ReactNode;
  className?: string;
}

const BackToTop: FC<IProps> = (props) => {
  const { visibilityHeight = 300, className, children } = props;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => {
      //const top = document.documentElement.scrollTop;
      if (window.pageYOffset > visibilityHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', fn, false);
    return () => {
      window.removeEventListener('scroll', fn, false);
    };
  }, []);

  const finalClassName = classnames(classPrefix, className);

  const scrollToTop = () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <div className={finalClassName} onClick={scrollToTop}>
          {children}
        </div>
      )}
    </>
  );
};

export default BackToTop;
