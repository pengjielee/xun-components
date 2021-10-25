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
