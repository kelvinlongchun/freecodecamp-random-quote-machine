import Background from "./components/Background";
import QuoteBox from "./components/QuoteBox";
import GlobalContextProvider from "./contexts/GlobalContext";
import QuoteBoxContextProvider from "./contexts/QuoteBoxContext";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Background>
          <QuoteBoxContextProvider>
            <QuoteBox />
          </QuoteBoxContextProvider>
        </Background>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
