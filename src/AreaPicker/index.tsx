import React, { FC, useState } from 'react';
import classnames from 'classnames';
import Popup from '../Popup';
import './style.scss';

import DISTRICTS from './data';

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

const getList = (id) => {
  let list = [];
  const obj = DISTRICTS[id];

  for (let key in obj) {
    list.push({ id: key, name: obj[key] });
  }
  return list;
};

const getProvinces = () => {
  return getList('0');
};

const getCities = (provinceId) => {
  return getList(provinceId);
};

const getAreas = (cityId) => {
  return getList(cityId);
};

const AreaPicker: FC<IProps> = (props) => {
  const [tab, setTab] = useState(1);
  const [currentProvince, setCurrentProvince] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);

  const {
    visible,
    province,
    city,
    area,
    onlyProvince = false,
    className,
    text,
    children,
    onMaskClick,
    onConfirm,
  } = props;

  const finalClassName = classnames(classPrefix, className);

  const handleProvinceClick = (province) => {
    setCurrentProvince(province);

    onlyProvince
      ? typeof onConfirm === 'function' && onConfirm([province])
      : setTab(2);
  };

  const handleCityClick = (city) => {
    setCurrentCity(city);
    setTab(3);
  };

  const handleAreaClick = (area) => {
    setCurrentArea(area);
    typeof onConfirm === 'function' &&
      onConfirm([currentProvince, currentCity, area]);
  };

  const handleProvinceTabClick = () => {
    setCurrentCity(null);
    setCurrentArea(null);
    setTab(1);
  };

  const handleCityTabClick = () => {
    setCurrentArea(null);
    setTab(2);
  };

  const renderProvinces = () => {
    const list = getProvinces();
    return list.map((item) => {
      const active = province && province === item.name;
      return (
        <div
          key={item.id}
          className={classnames(`${classPrefix}__item`, `hairline--bottom`, {
            [`${classPrefix}__item-active`]: active,
          })}
          onClick={() => handleProvinceClick(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  const renderCities = () => {
    if (!currentProvince) {
      return;
    }

    const list = getCities(currentProvince.id);
    return list.map((item) => {
      const active = city && city === item.name;
      return (
        <div
          key={item.id}
          className={classnames(`${classPrefix}__item`, `hairline--bottom`, {
            [`${classPrefix}__item-active`]: active,
          })}
          onClick={() => handleCityClick(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  const renderAreas = () => {
    if (!currentCity) {
      return;
    }
    const list = getAreas(currentCity.id);
    return list.map((item) => {
      const active = city && city === item.name;
      return (
        <div
          key={item.id}
          className={classnames(`${classPrefix}__item`, `hairline--bottom`, {
            [`${classPrefix}__item-active`]: active,
          })}
          onClick={() => handleAreaClick(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <Popup visible={visible} onMaskClick={onMaskClick}>
      <div className={finalClassName}>
        <div
          className={classnames(`${classPrefix}__header`, `hairline--bottom`)}
        >
          {onlyProvince ? (
            <div onClick={handleProvinceTabClick}>
              {(currentProvince && currentProvince.name) || '选择省'}
            </div>
          ) : (
            <span onClick={handleProvinceTabClick}>
              {(currentProvince && currentProvince.name) || '选择省'}
            </span>
          )}
          {onlyProvince ? null : (
            <>
              <span onClick={handleCityTabClick}>
                {(currentCity && currentCity.name) || '选择市'}
              </span>
              <span>{(currentArea && currentArea.name) || '选择区'}</span>
            </>
          )}
        </div>
        <div className={classnames(`${classPrefix}__body`)}>
          {onlyProvince && renderProvinces()}
          {tab === 1 && renderProvinces()}
          {tab === 2 && renderCities()}
          {tab === 3 && renderAreas()}
        </div>
      </div>
    </Popup>
  );
};

export default AreaPicker;
