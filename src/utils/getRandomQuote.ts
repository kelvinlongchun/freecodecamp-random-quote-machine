interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = async (): Promise<Quote | undefined> => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": process.env.REACT_APP_API_KEY as string },
    });
    const data = await response.json();
    if (data) {
      const { quote, author } = data[0];
      if (quote && author) {
        return { quote, author };
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    return { quote: "Error: Cannot fetch the API.", author: "😓" };
  }
};

export default getRandomQuote;
export type { Quote };
