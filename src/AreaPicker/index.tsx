import React, { FC, useState } from 'react';
import classnames from 'classnames';
import Popup from '../Popup';
import './style.scss';

import DISTRICTS from './data.js';

const DEFAULT_CODE = '0';

const classPrefix = 'xun-area-picker';

interface IProps {
  visible?: boolean;
  province?: string;
  city?: string;
  area?: string;
  onlyProvince?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onConfirm?: () => void;
}

const getProvinces = () => {
  let provinces = [];
  const obj = DISTRICTS[DEFAULT_CODE];

  for (let key in obj) {
    provinces.push({ id: key, name: obj[key] });
  }
  return provinces;
};

const getCities = (provinceCode) => {
  let cities = [];
  const obj = DISTRICTS[provinceCode];

  for (let key in obj) {
    cities.push({ id: key, name: obj[key] });
  }
  return cities;
};

const getAreas = (cityCode) => {
  let areas = [];
  const obj = DISTRICTS[cityCode];

  for (let key in obj) {
    areas.push({ id: key, name: obj[key] });
  }
  return areas;
};

const AreaPicker: FC<IProps> = (props) => {
  const [tab, setTab] = useState(1);
  const [currentProvince, setCurrentProvince] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);

  const {
    visible,
    province,
    onlyProvince = true,
    className,
    text,
    children,
    onMaskClick,
    onConfirm,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const handleClick = (province) => {
    typeof onConfirm === 'function' && onConfirm(province);
  };

  const renderProvinces = () => {
    const provinces = getProvinces();
    return provinces.map((item) => {
      const active = province && province === item.name;
      return (
        <div
          key={item.id}
          className={classnames(`${classPrefix}__item`, `hairline--bottom`, {
            [`${classPrefix}__item-active`]: active,
          })}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  const renderCities = () => {};

  const renderAreas = () => {};

  return (
    <Popup visible={visible} onMaskClick={onMaskClick}>
      <div className={finalClassName}>
        <div
          className={classnames(`${classPrefix}__header`, `hairline--bottom`)}
        >
          请选择
        </div>
        <div className={classnames(`${classPrefix}__body`)}>
          {onlyProvince && renderProvinces()}
          {tab === 1 && renderProvinces()}
          {tab === 1 && renderCities()}
          {tab === 2 && renderAreas()}
        </div>
      </div>
    </Popup>
  );
};

export default AreaPicker;
