import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";


// import {Provider} from "react-redux"
// import store from "./redux/store"

ReactDOM.render(
    <Router>
      <StateProvider initialState={initialState} reducer={reducer} >
        <App/>
      </StateProvider>
    </Router>,
  document.getElementById("root")
);
