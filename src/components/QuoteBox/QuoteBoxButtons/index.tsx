import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import Button from "../../common/Button";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { useQuoteBoxContext } from "../../../contexts/QuoteBoxContext";
import getRgbString from "../../../utils/getRgbString";
import getRandomQuote from "../../../utils/getRandomQuote";
import getRandomColor from "../../../utils/getRandomColor";
import type { Quote } from "../../../utils/getRandomQuote";
import "./styles.scss";

const QuoteBoxButtons = () => {
  const { color, colorDispatch } = useGlobalContext();
  const { quoteBox, quoteBoxDispatch } = useQuoteBoxContext();

  const replaceAllSpace = (str: string) => str.replaceAll(" ", "%20");

  const getTwitterUrl = (quote: string, author: string) =>
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" +
    replaceAllSpace(quote) +
    "%22%20" +
    replaceAllSpace(author);

  const getTumblrUrl = (quote: string, author: string) =>
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
    replaceAllSpace(author) +
    "&content=" +
    replaceAllSpace(quote) +
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

  const handleClick = async () => {
    const { quote, author } = (await getRandomQuote()) as Quote;
    quoteBoxDispatch({
      type: "CHANGE_QUOTE",
      quote,
      author,
    });
    quoteBoxDispatch({ type: "TOGGLE_SHOWED" });
    setTimeout(() => {
      quoteBoxDispatch({ type: "TOGGLE_SHOWED" });
    }, 300);
    colorDispatch({ type: "CHANGE_COLOR", color: getRandomColor() });
  };

  return (
    <div className="quote-box-buttons">
      <a
        id="tweet-quote"
        className="share-button"
        href={getTwitterUrl(quoteBox.quote, quoteBox.author)}
        target="_blank"
        rel="noreferrer noopener"
        title="Tweet this quote!"
        style={{ backgroundColor: getRgbString(color) }}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        id="tumblr-quote"
        className="share-button"
        href={getTumblrUrl(quoteBox.quote, quoteBox.author)}
        target="_blank"
        rel="noreferrer noopener"
        title="Post this quote on tumblr!"
        style={{ backgroundColor: getRgbString(color) }}
      >
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      <Button
        id="new-quote"
        backgroundColor={getRgbString(color)}
        onClick={handleClick}
      >
        New Quote
      </Button>
    </div>
  );
};

export default QuoteBoxButtons;
