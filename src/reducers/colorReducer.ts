import { useReducer } from "react";
import getRandomColor from "../utils/getRandomColor";

type Color = [number, number, number];

type ColorActionType = "CHANGE_COLOR";

interface ColorAction {
  type: ColorActionType;
  color: Color;
}

const colorReducer = (color: Color, action: ColorAction) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return action.color;
    default:
      return color;
  }
};

const initialColor: Color = getRandomColor();

const useColorReducer = () => useReducer(colorReducer, initialColor);

export { useColorReducer };
export type { Color, ColorAction };
