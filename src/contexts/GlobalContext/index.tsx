import { FC, ReactNode, createContext, useContext } from "react";
import {
  Color,
  ColorAction,
  useColorReducer,
} from "../../reducers/colorReducer";

interface GlobalContextType {
  color: Color;
  colorDispatch: React.Dispatch<ColorAction>;
}

interface Props {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | {}>({});

const useGlobalContext = () => useContext(GlobalContext) as GlobalContextType;

const GlobalContextProvider: FC<Props> = (props) => {
  const [color, colorDispatch] = useColorReducer();

  return (
    <GlobalContext.Provider value={{ color, colorDispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export { useGlobalContext };
