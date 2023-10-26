import { useReducer } from "react";

interface QuoteBox {
  quote: string;
  author: string;
  isTextShowed: boolean;
}

type QuoteBoxActionType = "CHANGE_QUOTE" | "TOGGLE_SHOWED";

interface QuoteBoxAction {
  type: QuoteBoxActionType;
  quote?: string;
  author?: string;
}

const quoteBoxReducer = (quoteBox: QuoteBox, action: QuoteBoxAction) => {
  switch (action.type) {
    case "CHANGE_QUOTE":
      return {
        ...quoteBox,
        quote: action.quote as string,
        author: action.author as string,
      };
    case "TOGGLE_SHOWED":
      return { ...quoteBox, isTextShowed: !quoteBox.isTextShowed };
    default:
      return quoteBox;
  }
};

const initialQuoteBox: QuoteBox = {
  quote: "",
  author: "",
  isTextShowed: true,
};

const useQuoteBoxReducer = () => useReducer(quoteBoxReducer, initialQuoteBox);

export { useQuoteBoxReducer };
export type { QuoteBox, QuoteBoxAction };
