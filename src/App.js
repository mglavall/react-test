import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import CardListContainer from "./containers/CardListContainer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CardListContainer />
      </Provider>
    );
  }
}
