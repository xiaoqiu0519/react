import React, { Component } from 'react'
import {Redirect,Route,BrowserRouter,Switch} from 'react-router-dom'
import TableList from "./components/table";
import Matchlist from './views/matchlist';
import Login from './views/login'
import { Provider } from 'react-redux';
import store from './store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/matchlist' component={Matchlist}></Route>
            <Route path='/tablelist' component={TableList}></Route>
            <Redirect to='/login'></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

