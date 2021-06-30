import React, { Component } from 'react'
import { BrowserRouter,Switch ,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
// import RouterView from './router/index'
import store from './store';
import Login from './views/login'
import Mathclist from './views/matchlist'
import Matchpoll from './views/matchpoll'
export default class App extends Component {
  render() {
    // console.log(RouterView())
    // const token = store.getState().app.token
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/matchlist' exact component={Mathclist}></Route>
            <Route path='/Matchpoll' exact component={Matchpoll}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

