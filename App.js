import React, {Component} from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/redux/reducers";
import BoNavigation from './src/bottomNavigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <BoNavigation />
      </Provider>
    );
  }
}
