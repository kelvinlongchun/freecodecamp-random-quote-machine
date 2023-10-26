import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import QuoteBoxButtons from "./QuoteBoxButtons";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useQuoteBoxContext } from "../../contexts/QuoteBoxContext";
import getRandomQuote, { Quote } from "../../utils/getRandomQuote";
import getRgbString from "../../utils/getRgbString";
import "./styles.scss";

const QuoteBox = () => {
  const { color } = useGlobalContext();
  const { quoteBox, quoteBoxDispatch } = useQuoteBoxContext();

  const updateQuote = async () => {
    const { quote, author } = (await getRandomQuote()) as Quote;
    quoteBoxDispatch({
      type: "CHANGE_QUOTE",
      quote,
      author,
    });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div id="quote-box" style={{ color: getRgbString(color) }}>
      <p
        className="text-container"
        style={{ opacity: quoteBox.isTextShowed ? 1 : 0 }}
      >
        <FontAwesomeIcon icon={faQuoteLeft} />
        <span id="text">{quoteBox.quote}</span>
      </p>
      <p id="author" style={{ opacity: quoteBox.isTextShowed ? 1 : 0 }}>
        - {quoteBox.author}
      </p>
      <QuoteBoxButtons />
    </div>
  );
};

export default QuoteBox;
