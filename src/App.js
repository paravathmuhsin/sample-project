import React from "react";
import { Provider } from "react-redux";
import Routers from "./Components/Routers";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
