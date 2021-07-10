import React, { Component ,lazy,Suspense} from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Spin } from 'antd';
import { connect} from 'react-redux';
const Login = lazy(()=>import('./views/login'))
const Comtainer = lazy(()=>import('./views/container'))
class App extends Component {
  render() {
    const { loading } = this.props
    return (
      <Spin spinning={loading}>
        <Suspense fallback={<h1 style={{display:'none'}}>loading...</h1>}>
          <Switch>
            <Route path='/login' key='/login' component={Login}></Route>
            <Route path='/' key='/' component={Comtainer}></Route>
          </Switch>
        </Suspense>
      </Spin>
    )
  }
}
export default connect(
  state=>({loading:state.app.loading}),
  null
)(App)

