import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Aplicacao from "./styles";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/organisms/Menu";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Aplicacao className='App row'>
        <BrowserRouter>
          <Menu />
          <Routes />
        </BrowserRouter>
      </Aplicacao>
    </Provider>
  );
}

export default App;
// export default App;
