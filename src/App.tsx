import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Rotas from "./routes";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { Store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
