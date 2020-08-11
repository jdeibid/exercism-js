import { COLORS } from "../resistor-color/resistor-color";

export const decodedValue = (colorsArray) => {
  return parseInt(`${COLORS.indexOf(colorsArray[0])}${COLORS.indexOf(colorsArray[1])}`);
};