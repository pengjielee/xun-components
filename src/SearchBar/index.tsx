import React from 'react';

interface IProps {
  text?: string;
}

const SearchBar: React.FC<IProps> = (props) => {
  const { text, children } = props;
  return <div className="xun-search-bar">{children}</div>;
};

export default SearchBar;
