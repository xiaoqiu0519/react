import React, { Component } from 'react'
import TableList from "./components/table";
import { Provider } from 'react-redux';
import store from './store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TableList/>
      </Provider>
    )
  }
}

