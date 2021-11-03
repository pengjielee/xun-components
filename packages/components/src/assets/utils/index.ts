export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P,
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

export function hexToRgba(hex: string, alpha: number) {
  if (!hex || typeof alpha !== 'number' || alpha > 1 || alpha < 0) {
    return '';
  }

  const replaced = hex.replace('#', '').trim();

  if (replaced.length !== 6) {
    return '';
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getCssValue(varname) {
  return getComputedStyle(document.documentElement).getPropertyValue(varname);
}

const hexToRgb = (hex) => {
  const replaced = hex.replace('#', '').trim();

  if (replaced.length !== 6) {
    return '';
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return [r, g, b];
};

const rgbToHsl = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  const l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
};

export function getDarkColor(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  const h = Math.floor(hsl[0]) + 'deg';
  const s = Math.floor(hsl[1]) - 10 + '%';
  const l = Math.floor(hsl[2]) - 20 + '%';
  return `hsl(${h} ${s} ${l})`;
}

/* https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E7%9A%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD*/
export let passiveIfSupported = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    get: function () {
      passiveIfSupported = true;
    },
  });

  window.addEventListener('test', null, opts);
} catch (err) {}

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function bound(
  position: number,
  min: number | undefined,
  max: number | undefined,
) {
  let ret = position;
  if (min !== undefined) {
    ret = Math.max(position, min);
  }
  if (max !== undefined) {
    ret = Math.min(ret, max);
  }
  return ret;
}

export function rubberband(
  distance: number,
  dimension: number,
  constant: number,
) {
  return (distance * dimension * constant) / (dimension + constant * distance);
}

export function rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  dimension: number,
  constant = 0.15,
) {
  if (constant === 0) return bound(position, min, max);
  if (position < min)
    return -rubberband(min - position, dimension, constant) + min;
  if (position > max)
    return +rubberband(position - max, dimension, constant) + max;
  return position;
}
