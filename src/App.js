import "./App.css";
import "./styles/styles.css";
import Home from "./components/homeComponent/View";
import ProductContextProvider from "./contexts/productContext";

function App() {
  return (
    <ProductContextProvider>
      <Home />
    </ProductContextProvider>
  );
}

export default App;
