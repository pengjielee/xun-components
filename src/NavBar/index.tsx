import React from 'react';

interface IProps {
  text?: string;
}

const NavBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-nav-bar">{children}</div>;
};

export default NavBar;
