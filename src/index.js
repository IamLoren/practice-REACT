import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./SharedUI/Global";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import {persistor, store} from './redux/store'
import { BrowserRouter } from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      <GlobalStyles />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
