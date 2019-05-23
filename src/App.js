import React from "react";
import { StoreContext } from "redux-react-hook";
import store from "./store";

import Main from "./pages/Main";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Main />
    </StoreContext.Provider>
  );
}

export default App;
