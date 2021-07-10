import React, { Component ,lazy,Suspense} from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
const Login = lazy(()=>import('./views/login'))
const Comtainer = lazy(()=>import('./views/container'))
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path='/login' key='/login' component={Login}></Route>
            <Route path='/' key='/' component={Comtainer}></Route>
          </Switch>
        </Suspense>
      </Provider>
    )
  }
}

