import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom'
import { changeLoading } from './store/actions/app'
import './index.less'
React.changeLoading = (flag)=>{
  store.dispatch(changeLoading(flag))
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
document.getElementById('root'));
