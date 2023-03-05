import {uvColorsType} from "./pantones.types";

export const uv: Record<uvColorsType, {rgb: string, pantone: number}> = {
  blue: {
    rgb: '#a1e7ff',
    pantone: 801
  },
  green: {
    rgb: '#44d62c',
    pantone: 802
  },
  yellow: {
    rgb: '#ffe900',
    pantone: 803
  },
  orange: {
    rgb: '#ffaa4d',
    pantone: 804
  },
  red: {
   rgb: '#ff7276',
   pantone: 805,
  },
  pink: {
    rgb: '#ff3eb5',
    pantone: 806
  },
  purple: {
    rgb: '#ea27c2',
    pantone: 807
  }
}
