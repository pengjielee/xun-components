import React, { FC } from 'react';
import classnames from 'classnames';
import SearchIcon from './search.svg';
import './style.scss';

const classPrefix = 'xun-search-bar';

interface IProps {
  text?: string;
  className?: string;
}

const SearchBar: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return (
    <div className={finalClassName}>
      <div className={`${classPrefix}__icon`}>
        <img src={SearchIcon} alt="search" />
      </div>
      <div className={`${classPrefix}__text`}>{text}</div>
    </div>
  );
};

export default SearchBar;
