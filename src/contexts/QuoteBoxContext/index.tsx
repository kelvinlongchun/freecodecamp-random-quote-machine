import { FC, ReactNode, createContext, useContext } from "react";
import {
  QuoteBox,
  QuoteBoxAction,
  useQuoteBoxReducer,
} from "../../reducers/quoteBoxReducer";

interface QuoteBoxContextType {
  quoteBox: QuoteBox;
  quoteBoxDispatch: React.Dispatch<QuoteBoxAction>;
}

interface Props {
  children: ReactNode;
}

const QuoteBoxContext = createContext<QuoteBoxContextType | {}>({});

const useQuoteBoxContext = () =>
  useContext(QuoteBoxContext) as QuoteBoxContextType;

const QuoteBoxContextProvider: FC<Props> = (props) => {
  const [quoteBox, quoteBoxDispatch] = useQuoteBoxReducer();

  return (
    <QuoteBoxContext.Provider value={{ quoteBox, quoteBoxDispatch }}>
      {props.children}
    </QuoteBoxContext.Provider>
  );
};

export default QuoteBoxContextProvider;
export { useQuoteBoxContext };
