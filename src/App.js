import React from 'react';
import store from "./redux";
import { Provider } from "react-redux";
import { Homepage } from "./pages/homepage/Homapage";

function App() {


  return (
    <Provider store={store}>
      <h1 align={'center'}>Hello world!</h1>
      <p align={'center'}>Let's build it awesome!</p>
      <Homepage />
    </Provider>
  );
}

export default App;
