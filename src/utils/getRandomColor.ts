import { Color } from "../reducers/colorReducer";

const getRandomColor = () =>
  [0, 0, 0]
    .map((_num) => Math.random() * 255)
    .map((num) => Math.round(num)) as Color;

export default getRandomColor;
