import React from "react";
import { Provider } from "react-redux";
import { Context } from "./Components/Context";
import Routers from "./Components/Routers";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <Context>
        <Routers />
      </Context>
    </Provider>
  );
}

export default App;
